
import keystone from 'keystone'
import emailservice from '../services/email'

const Types = keystone.Field.Types

/**
 * User Model
 * ==========
 */

const User = new keystone.List('User')

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
})

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin
})


/**
 * Relationships
 */

User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' })


/**
 * Hooks
 */

User.schema.post('save', function() {

	const user = this

	emailservice.send({
		to: user.email,
		from: 'jornandretangen@gmail.com',
		subject: 'admin user change'
	})
})


/**
 * Registration
 */

User.defaultColumns = 'name, email, isAdmin'
User.register()


import Sendgrid from 'sendgrid'

const sendgrid = Sendgrid(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD)

export default sendgrid

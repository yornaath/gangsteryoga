
import {Observable, Scheduler} from "rxjs"

/**
 * typestream.js
 * Stream text to a field like its being typed
 */
export default function typestream(opts) {
  
  var textarea = opts.el
  var text = opts.text || textarea.attributes.getNamedItem("data-text").value
  var words = text.split(" ")
  var words$ = Observable.from(words)


  var typestream$ = words$
    .concatMap(x => 
      Observable.of(x)
        .delay(
          (Math.random() * 180) + (x.length * 1.57)
    ))
    .concatMap(word => {
      var letters$ = Observable.from(word.split("").concat(" "))
      var typestream$ = letters$
        .concatMap(letter =>
          Observable.of(letter)
            .delay(
              (Math.random() * 120)
            ))
      return typestream$
    })
  
  
  typestream$
    .subscribeOn(Scheduler.animationFrame)
    .subscribe(
      char => textarea.value = textarea.value + char,
      null,
      _ => opts.onComplete && opts.onComplete()
      )
  
  return typestream$
}
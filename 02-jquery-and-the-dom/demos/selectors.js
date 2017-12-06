//*****basic selectors*****//

//element
$('main') // => All selectors return a jQuery (Array-like) object
$('body')
$('li')

//class
$('.li-template')
$('.form-element')

//id
$('#beautiful-list')

//parent descendent
$('section input')
$('section input[type="text"]')

// parent > child
$('ul > li')

// keep an eye out for this but
$('ul .class') // any element with a class of .class interior to a ul
$('ul.class') // any ul with a class of .class

//attribute
$('button[type="button"]')
$('input[type="password"]')
$('li[data-category="list-item"]')

//another way to do the previous selection
$('li').data('category') // <-- use this to GET values of the data-category attribute, DO NOT SET NEW VALS WITH THIS...

//get text of the matched element(s)
$('li[data-category="list-item"]').text()

//set text of the matched element(s)
$('li[data-category="list-item"]').text('Scott was here...')

//make a new <li> and append it to the <ul>
$('#beautiful-list').append('<li id="wat">Hello World! jQuery is gud!</li>')


//remove an element from the DOM
$('#beautiful-list').remove('#wat')


//run a command as soon as the DOM loads
$(document).ready(function() {
  doAllTheThings()
  doSomethingElse()
})


// Shorthand for the above document.ready()
// $(function() {

// })

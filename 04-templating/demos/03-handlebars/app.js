'use strict'

let peeps = []

function People(name, title, bio) {
  this.name = name
  this.title = title
  this.bio = bio
  peeps.push(this)
}


new People('scott', 'instructor', 'this is me')
new People('scott', 'instructor', 'this is me')
new People('scott', 'instructor', 'this is me')
new People('scott', 'instructor', 'this is me')
new People('scott', 'instructor', 'this is me')

let source = document.getElementById('myTemp').innerHTML
let template = Handlebars.compile(source)
// Handlebars.compile returns a function


peeps.forEach(person => {
  let sectionEl = document.getElementById('people')

  let completeTemplate = document.createElement('div')
  completeTemplate.innerHTML = template(person)


  sectionEl.appendChild(completeTemplate)
})
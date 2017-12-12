'use strict'

// AJAX Syntax

// GETS info from the API
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon/2',
  method: 'GET',
  success: function (data, message) {
    console.log(data)
  }
})
// .then()
// .then()
// .catch()

// POSTS new info to the API
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon',
  method: 'POST',
  data: {/*...*/},
  success: function (data, message) {
    console.log(data)
  }
})

// PUTS updated info to the API at an existing record
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon/2',
  method: 'PUT',
  data: {/*...*/},
  success: function (data, message) {
    console.log(data)
  }
})

// DELETEs a record from the API
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon/2',
  method: 'DELETE',
  success: function (data, message) {
    console.log(data)
  }
})


// SHORTHAND AJAX METHODS
$.get('https://pokeapi.co/api/v2/pokemon/2') // => jQuery Deferred object
  .then(data => {
    // a whole bunch of DOM maniputions
    // add all this content to the page using a handlebars template

  }) // => returns pokemon/2
  .then(() => $.get('https://pokeapi.co/api/v2/pokemon/3')) // => jQuery Deferred object
  .then(data => console.log(data)) // => returns pokemon/3 AFTER 2 has been logged
  .catch(err => console.error(err))

$.post('https://pokeapi.co/api/v2/pokemon/2', {/* ... */}) // second arg is the data to WRITE
  .then(success => console.log(success))
  .catch(err => console.error(err))

$.getJSON('./sample.json') // You can use any AJAX method to request data from file paths or URLs/APIs
  .then(data => console.log(data))
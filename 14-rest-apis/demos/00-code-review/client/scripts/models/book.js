'use strict';

var app = app || {};
var __API_URL__ = 'http://localhost:3000'; // TODO: Define the URL to your deployed API on Heroku

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  }

  Book.prototype.toHtml = function(templateId) {
    let template = Handlebars.compile($(`#${templateId}`).text());
    return template(this);
  }

  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));
  Book.fetchOne = (id, callback) =>
    $.get(`${__API_URL__}/api/v1/books/${id}`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback)

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);

  Book.removeOne = function(id) {
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${id}`,
      method: 'DELETE',
    })
    .then(() => page('/'))
    .catch(module.errorView.initErrorPage)
  }

  // Set up an event listener for the Pokemon Search
  $('#pokemon-form').on('submit', function(e) {
    e.preventDefault()
    page(`/pokemon/${e.target.pokeName.value}`)
  })

  module.Book = Book;
})(app)

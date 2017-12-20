'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexPage = function (err) {
    $('.container').hide()
    $('.book-view').show()
    module.Book.all.map(book => $('#book-list').append(book.toHtml()))
  }

  module.bookView = bookView
})(app)

$(() => app.Book.fetchAll(app.bookView.initIndexPage))
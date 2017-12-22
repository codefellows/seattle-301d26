'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('#book-list').empty();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')));
  }

  bookView.initDetailPage = function() {
    $('.container').hide()
    $('#detail-desc').empty()
    $('.detail-view').show()
    module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-detail-template')));
    $('.book-container').on('click', 'button', function(e) {
      // console.log($(this).data('bookid')) => returns the id of the book from the data-bookid attrib
      module.Book.removeOne($(this).data('bookid'))
    })
  }

  // First callback in our pagejs middleware chain
  bookView.pokemonSearch = function(ctx, next) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${ctx.params.name}`)
      .then(pokemon => {
        console.log(pokemon)
        return ctx.pokemon = pokemon
      })
      .then(next) // this `next` will invoke the bookView.renderPokemon method
      .catch(console.error)
  }

  bookView.renderPokemon = function(ctx) {
    $('.container').hide()
    $('#pokemon-desc').empty()
    $('.pokemon-view').show()
    $('#pokemon-desc').append(`
      <p>${ctx.pokemon.name}</p>
      <img src=${ctx.pokemon.sprites.front_default}>
    `)
  }

  module.bookView = bookView;
})(app)
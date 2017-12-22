'use strict'

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage))
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage))

// Middleware example
page(
  '/pokemon/:name',
  // app.bookView.pokemonSearch, // same as the line below
  (ctx, next) => app.bookView.pokemonSearch(ctx, next),
    // app.bookView.renderPokemon
  ctx => app.bookView.renderPokemon(ctx)
)

page()
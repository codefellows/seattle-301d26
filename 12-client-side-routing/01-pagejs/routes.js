'use strict'

page('/one', ctx => initOne(ctx))
page('/two', initTwo)
page('/three/:letter', initThree)
// page('/books/:id', showSomeDetail)

page()
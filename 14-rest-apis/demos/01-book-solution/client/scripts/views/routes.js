'use strict'

page('/'
  , (ctx, next) => app.Book.fetchAll(() => app.bookView.initIndexPage(ctx, next))
  , (ctx, next) => app.adminView.verify(ctx, next)
);
page('/books/new'
  , ctx => app.bookView.initCreateFormPage(ctx)
);
page('/books/search'
  , ctx => app.bookView.initSearchFormPage()
);
page('/books/:book_id/update'
  , (ctx, next) => app.Book.fetchOne(ctx, next)
  , ctx => app.bookView.initUpdateFormPage(ctx)
);
page('/books/:book_id'
  , (ctx, next) => app.Book.fetchOne(ctx, () => app.bookView.initDetailPage(ctx, next))
  , (ctx, next) => app.adminView.verify(ctx, next)
);
page('/admin'
  , () => app.adminView.initAdminPage()
);
page();
'use strict';

// REVIEW: Configure an object to hold all of our functions for dynamic updates and article-related event handlers.
let articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    // REVIEW: We can declare several variables at once and assign their values later when using let. Keep in mind that we cannot do this with const.
    let authorName, category, optionTag;
    if(!$(this).hasClass('template')) {
      // REVIEW: We need to take every author name from the page, and make it an option in the Author filter.
      // To do so, Build an <option> DOM element that we can append to the author <select> element.
      // Start by grabbing the author's name from `this` article element, and then use that bit of text to create the option tag (in a variable named `optionTag`) that we can append to the #author-filter select element.
      authorName = $(this).attr('data-author');

      // TODO: Refactor this concatenation using a template literal.
      // optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
      optionTag = `<option value="${authorName}">${authorName}</option>`;

      // if($('#author-filter option[value="' + authorName + '"]').length === 0) {
      if($(`#author-filter option[value="${authorName}"]`).length === 0) {
          $('#author-filter').append(optionTag);
      }

      // REVIEW: Similar to the above, but...
      // Avoid duplicates! We don't want to append the category name if the <select> already has this category as an option!
      category = $(this).attr('data-category');

      // TODO: Refactor this concatenation using a template literal.
      optionTag = `<option value="${category}">${category}</option>`;

      if(!$(`#category-filter option[value="${category}"]`).length) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    // REVIEW: Inside this function, "this" is the element that triggered the event handler function we are defining. "$(this)" is using jQuery to select that element (analogous to event.target that we have seen before), so we can chain jQuery methods onto it.
    if($(this).val()) {
      // TODO: If the <select> menu was changed to an option that has a value, we first need to hide all the articles, and then show just the ones that match for the author that was selected.
      // Use an "attribute selector" to find those articles, and fade them in for the reader.
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn(350)

    } else {
      // TODO: If the <select> menu was changed to an option that is blank, we should first show all the articles, except the one article we are using as a template.
      // $('article').not('.template').show();
      $('article').show();
      $(`article[data-author="${$(this).val()}"]`).hide()

    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  // TODO: Just like we do for #author-filter above, we should handle change events on the #category-filter element.
  // When an option with a value is selected, hide all the articles, then reveal the matches.
  // When the blank (default) option is selected, show all the articles, except for the template.
  // Be sure to reset the #author-filter while you are at it!
  $('#category-filter').on('change', function () {
    if($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn(350)

    } else {
      // $('article').not('.template').show();
      $('article').show();
      $(`article.template`).hide()
    }

    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function() {
  // TODO: Add an event handler to .main-nav elements that will power the Tabs feature.
  // Clicking any .tab element should hide all the .tab-content sections, and then reveal the single .tab-content section that is associated with the clicked .tab element.
  // So: You need to dynamically build a selector string with the correct ID, based on the data available to you on the .tab element that was clicked.

  $('.main-nav .tab').on('click', function() {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).show();
  })

  // REVIEW: Now trigger a click on the first .tab element, to set up the page.
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  // REVIEW: Hide elements beyond the first 2 in any article body.
  $('.article-body *:nth-of-type(n+2)').hide();

  // TODO: Add an event handler to reveal all the hidden elements, when the .read-on link is clicked. You can go ahead and hide the "Read On" link once it has been clicked. Be sure to prevent the default link-click action!
  // Ideally, we'd attach this as just one event handler on the #articles section, and let it process (in other words... delegate) any .read-on clicks that happen within child nodes.
  $('#articles').on('click', 'article .read-on', function(e) {
    e.preventDefault();

    $(this).siblings().filter('.article-body').children().show();
    $(this).hide();
  })
};

// TODO: Call all of the above functions, once we are sure the DOM is ready.
$(document).ready(function() {
  $('.template').hide();
  articleView.populateFilters();
  articleView.handleAuthorFilter();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
})

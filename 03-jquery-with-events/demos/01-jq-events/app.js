'use strict';

// TAB BASED NAVIGATION
$('header a').on('click', function(e) {
  // e.preventDefault(); // if needed
  // console.log(e.target);
  // console.log('vanilla this', this)

  // console.log('jquery this', $(this))
  // as a getter these work the same
  // console.log($(this).children().data('tab'))
  // console.log($(this).children().attr('data-tab'))

  $('.tab-content').hide(350)

  // $('#' + selection).show()
  $(`#${$(this).data('tab')}`).show(350)
})

// EVENT DELEGATION

  // non-delegated
$('button[name="adder1"]').on('click', function() {
  let $liEl =$('#menu1 li:first').clone()
  $liEl.text('new list')
  $('#menu1').append($liEl)
})

$('#menu1 li').on('click', function() {
  console.log('clicked this', this)
})

  // delegated
$('button[name="adder2"]').on('click', function() {
  let $liEl = $('#menu2 li:first').clone()
  $liEl.text('new list')
  $('#menu2').append($liEl)
})

$('#menu2').on('click', 'li', function() {
  console.log('clicked this', this)
})

// example of delegation to multiple descendents
// $('#myform').on('click', 'input textarea', function() {
//   console.log('clicked this', this)
// })


// CHECKBOX STATE CHANGE
$('input[type="checkbox"]').on('change', function() {
  let $checkbox = $(this)
  $('#checked-state').html(`.attr("checked"):${$checkbox.attr('checked')}<br>.prop('checked'):${$checkbox.prop('checked')}`)
}).change()


// SELECT BOX / CHANGE EVENT
$('select[name="icecream"]').on('change', function() {
  // console.log($(this).val())
  $('img').hide()
  $(`img[data-flavor=${$(this).val()}]`).show()
})


// Trigger the tabs to hide on page load
$(function() {
  $('.tab-content').hide()
})
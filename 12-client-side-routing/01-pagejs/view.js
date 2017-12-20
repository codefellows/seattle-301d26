'use strict'

$(function() {
  $('.container').hide()
})

function initHome() {
  $('.container').hide()
  $('#home').show()
}

function initOne(ctx) {
  console.log('ctx', ctx)
  $('.container').hide()
  $('#one').show()
}

function initTwo(ctx) {
  console.log('ctx', ctx)
  $('.container').hide()
  $('#two').show()
}

function initThree(ctx) {
  console.log('ctx', ctx)
  $('.container').hide()
  $('#three').show()
}

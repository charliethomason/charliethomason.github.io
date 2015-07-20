$(document).ready(function() {
  $('input[type="checkbox"]').change(function() {
    if ($(this).is(':checked')) {
      $(this).attr('aria-checked','true');
    } else {
      $(this).attr('aria-checked','false');
    }
  });

  $('input[type="radio"]').change(function() {
    $(this).siblings('input[type="radio"]').attr('aria-checked','false');
    if ($(this).is(':checked')) {
      $(this).attr('aria-checked','true');
    }
  });

  $('.tooltip-icon').click(function(e) {
    e.preventDefault();
    var $target = $(this).siblings('.tooltip-help');
    $target.toggle();
    $target.focus();
  });

  $('.tooltip-help').click(function(e) {
    $(this).toggle();
    $(this).siblings('.tooltip-icon').focus();
  });

  $('#update1').click(function(e) {
    e.preventDefault();
    $('#result1').html('Updated!');
  });

  $('.on-off-toggle').click(function(e) {
    if (!$(this).hasClass('on')) {
      $('.on-off-toggle.on').removeClass('on').attr('aria-checked','false');
      $(this).addClass('on').attr('aria-checked','true');
    }
  });

});
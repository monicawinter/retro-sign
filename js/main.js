var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn');
var $engage = $('.engage');

$btn.on('click', function () {
  $lines.toggleClass('line2');
  $lines.toggleClass('lines');
  $engage.toggleClass('engaged');
  $(this).toggleClass('button');
});

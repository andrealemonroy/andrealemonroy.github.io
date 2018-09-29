// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.fixed-action-btn');
//   var instances = M.FloatingActionButton.init(elems, {
//     direction: 'left',
//     hoverEnabled: false
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  
  $('.preloader-background').delay(700).fadeOut('slow');

  $('.preloader-wrapper')
    .delay(700)
    .fadeOut();
});
// $('.trigger').on('click', function(){
//   $(this).toggleClass('clicked');
// })
$(document).ready(function(){
  $('.carousel').carousel();
});
$(document).ready(function(){

// if ($('#back-to-top').length) {
//     var scrollTrigger = 700, // px
//         backToTop = function () {
//             var scrollTop = $(window).scrollTop();
//             if (scrollTop > scrollTrigger) {
//                 $('#back-to-top').addClass('show-arrow');
//             } else {
//                 $('#back-to-top').removeClass('show-arrow');
//             }
//         };
//     backToTop();
//     $(window).on('scroll', function () {
//         backToTop();
//     });
//     $('#back-to-top').on('click', function (e) {
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: 0
//         }, 700);
//     });
// }


	$('#main-slider').bxSlider({
		mode: 'fade',
		auto: true,
		controls: false,
		adaptiveHeight: true,
		pager: false
	});


});
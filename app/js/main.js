
$(document).ready(function(){





	var owl = $(".slider-2");

	owl.owlCarousel({
		loop:true,
		margin:0,
		navText: ["",""],
		dotsEach: true,
autoHeight: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			740:{
				items:1,
				nav:true
			},
			1000:{
				items:1,
				nav:true
			}
		}
	});


	var allItem2 = $('.tabs-caption li').length;
	var currenItem2 = $('.tabs-caption li.active').index() +1;
	$('.curr span').html(currenItem2 + ' / ' + allItem2);


	var allItem = $('.slider-2 .owl-item:not(.cloned)').length;
	var currenItem = $('.slider-2 .owl-item.active').index() -1;
	$('.current-js').html(currenItem + ' / ' + allItem);


	owl.on('changed.owl.carousel', function(e) {
		var items = e.item.count;
		var page = e.page.index+1;

		$('.current-js').text(page  + ' / ' + items)
	});


	$('.m-h-1, .m-h-2, .bg-color h6').matchHeight();

	function get_border($opt, $opt2) {
		var hhh = $($opt).css('height').slice(0,-2) /2;
		console.log(hhh);
		$('<style>'+$opt2+'.active'+'::after{border-width: '+hhh+'px !important;}</style>').appendTo( "head" );
	}


	get_border('.tabs-caption li.active', '.tabs-caption li');


	$(function() {
		$('.tabs-caption').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs-main').find('.tabs-content').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 300);
			get_border($(this), '.tabs-caption li');
			var allItem2 = $('.tabs-caption li').length;
			var currenItem2 = $('.tabs-caption li.active').index() +1;
			$('.curr span').html(currenItem2 + ' / ' + allItem2);
		})
	}); 

// $('#slider-1').bxSlider({
// 		controls: true, 
// 		pager: false,
// 		slideWidth: 940,
// 		minSlides: 4,
// 		maxSlides: 4,
// 		moveSlides: 1
// 	});

// $("#owl-demo").owlCarousel({
//       navigation : true, // Show next and prev buttons
//       slideSpeed : 300,
//       paginationSpeed : 400,
//       singleItem: false,
//       items: 4,
//       pagination : true,
//       itemsDesktop : [1920,4],
//       navigationText: false,
//       // autoPlay: 20000,
//       // "singleItem:true" is a shortcut for:
//       // items : 1, 
//       // itemsDesktop : false,
//       // itemsDesktopSmall : false,
//       // itemsTablet: false,
//       // itemsMobile : false
//     mouseDrag : false,
//     touchDrag : false

//   });  

 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });

//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });





// var sl_small = $('#flex-small');


	$('#flex-small').flexslider({
		animation: "slide",
		controlNav: false,
	 // directionNav: true,
	 // move: 1,

	 prevText: "",
	 nextText: "",  

	 animationLoop: false,
	 slideshow: false,
	 itemWidth: 205,
	 itemMargin: 10,
	 // maxItems: 7,
	 asNavFor: '#flex-slider'
	});




	$('#flex-slider').flexslider({
		animation: "slide",
		controlNav: false,
		// directionNav: true,
		// move: 1,

		prevText: "",
		nextText: "",  

		animationLoop: false,
		slideshow: false,
		sync: "#flex-small"

	});







var flexslider = $('#flex-small').data('flexslider');

	var flag = true;
	$(window).on('load resize', function() {

		console.log('qwe');
		if (window.innerWidth <= 1720) {
			if (flag) {
				flag = false;
				console.log('rrr');
				// sl_small.flexslider({
				// 			itemWidth: 156	
				// });
			}
		}

	});








});



$(window).load(function() {




});








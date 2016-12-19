
$(document).ready(function(){

	$('.wrapp-match a').on('click', function(e) {
	 e.preventDefault(); 
	});

	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		.attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});

	$(".various").fancybox({
		maxWidth  : '100%',
		minWidth: '70%',
		maxHeight : 600,
		fitToView : false,
		height    : '80%',
		autoSize  : false,
		closeClick  : false,
		openEffect  : 'none',
		closeEffect : 'none'
	});

	$('.m-h-1, .m-h-2, .wrapp-match').matchHeight({
		byRow: true
	});

	$('.hover-block h6').matchHeight({
		byRow: true
	});

	function get_border($opt, $opt2) {
		var hhh = $($opt).css('height').slice(0,-2) /2;
		console.log(hhh);
		$('<style>'+$opt2+'.active'+'::after{border-width: '+hhh+'px !important;}</style>').appendTo( "head" );
	}

	get_border('.tabs-caption li.active', '.tabs-caption li');

	$('.tabs-caption').on('click', 'li:not(.active)', function() {



		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs-main').find('.tabs-content').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 300);

		get_border($(this), '.tabs-caption li');

		var allItem2 = $('.tabs-caption li').length;
		var currenItem2 = $('.tabs-caption li.active').index() +1;
		$('.curr span').html(currenItem2 + ' / ' + allItem2);

			$('.m-h-2').matchHeight({
		byRow: true
	});	
	})


	$("a.modal-form").fancybox({
		'hideOnContentClick': true,
		minWidth : 230,
		padding : 0,
		closeBtn : true

	});


	jQuery(function($){ 
		$(".mask").mask("+7(999) 999-9999");
	});



	$('.tabs-caption-call').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.timecall').find('.tabs-content-input').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 300);

	})




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
		smoothHeight: true,
		animationSpeed: "400",
		controlNav: false,
		// directionNav: true,
		// move: 1,

		prevText: "",
		nextText: "",  

		animationLoop: false,
		slideshow: false,
		sync: "#flex-small"

	});




	var owl2 = $('.hover-block, .slider-3');

	var cont = $('#flex-slider>.container');

	var flag = true;
	var flag2 = true;

	$(window).on('load resize', function() {

		if (window.innerWidth <= 768) {
			if (flag) {
				flag = false;
				flag2 = true;
				$('header').append(cont);
				$('.check.padding-left li').on('click', function(e) {
					e.preventDefault(); 
					$(this).siblings().slideToggle(); 
				});

				owl2.owlCarousel({
					loop:true,
					margin:0,
					navText: ["",""],
					dotsEach: false,
				autoHeight: true,
				items: 1,
				nav: true,
				responsiveClass:true
			});

			}
		} else {
			flag = true;
			$('#flex-slider').append(cont);

			if (flag2 && $('.hover-block.owl-carousel').length ) {
				flag2 = false;
				$(".hover-block").data('owlCarousel').destroy();
				$(".slider-3").data('owlCarousel').destroy();
				$('.section-8, .section-9').find('.owl-stage-outer').children().unwrap();
				$('.hover-block, .slider-3').removeClass('owl-carousel owl-loaded owl-responsive--1');
			}

			$('.check.padding-left li').off('click');
		}




	});








});



$(window).load(function() {

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





});








$(document).ready(function(){
    // QUANTITY
    $('.sl-quantity button.btn-count').click(function(e){
        e.preventDefault();
        var elem = $(this).closest('.sl-quantity').find('input.counter');
        var krat = $(this).closest('.sl-quantity').find('input.counter').data('krat');
        var min = $(this).closest('.sl-quantity').find('input.counter').data('min');
        var currentQty= elem.val();

        if( $(this).hasClass('minus') && currentQty>min){
            elem.val(parseInt(currentQty, 10) - krat);
            elem.trigger("change");
        }else{
            if( $(this).hasClass('plus')){
                elem.val(parseInt(currentQty, 10) + krat);
                elem.trigger("change");
            }
        }
    });
    // ms2 pseudo submit
    $(".pseudo_submit").click(function(e) { 
		e.preventDefault();
		$(this).attr("disabled");
		$("#msOrder .ms2_link").trigger("click");
	});	
    // mobile menu toggler
    $(".sl_burger").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("sl_noactive");
		$('.sl_header-mobile').toggleClass("sl_active");
		if($('body').hasClass("sl_noscroll")){
			$('body').removeClass("sl_noscroll");
		}else{
			$('body').addClass("sl_noscroll");
		}   
	});
    // orders toggler
    $(".sl-list-orders .item .item-toggle").click(function(e){
        e.preventDefault();
        $(this).closest('.item').toggleClass('small-info');
    });
    // phone mask has bug
    // $('input.phone').mask('+9 (999) 999 99 99');
    // tabs
    $(document).on("click", ".tabber", function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        $(".tabber").removeClass("active");
        $(this).addClass("active");
        $(".tabber-c").hide();
        $(target).show();
    });
    // anchor scroll
    $(document).on("click", '.toanchor', function(e){
        e.preventDefault();
        $("html, body").animate({
		 scrollTop: $($(this).attr("href")).offset().top + "px"
	        }, {
		 duration: 500,
		 easing: "swing"
	    });
	    return false;
    });
    // filter handlers
    $(".widget-filter .filters-title").click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass("active");
    });
    var $element_filter = $('.sorting_box');
	if($element_filter.length){
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			var offset = $element_filter.offset().top + $element_filter.height();        
			if (scroll > offset) {
				$('.flyer_filters').addClass('active');
			}else{
				$('.flyer_filters').removeClass('active');
			}
		});
		$( window ).resize(function() {
			var $element_filter = $('.sorting_box');
			var scroll = $(window).scrollTop();
			var offset = $element_filter.offset().top + $element_filter.height();        
			if (scroll > offset) {
				$('.flyer_filters').addClass('active');
			}else{
				$('.flyer_filters').removeClass('active');
			}
		});
	}
	$(".sort-toggler").click(function(e) { 
		e.preventDefault();
		$(this).parent().toggleClass("active");
	});	
	$(document).mouseup(function (e){
		var div = $(".sorting_box_inner");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0
			&& div.hasClass("active")) { 
			div.toggleClass("active");
		}
	});
	$(".filter-toggler").click(function(e) {
		e.preventDefault();
		var overlay = $(".overlay");
		$(this).toggleClass("noactive");
		$('.blog-widget.widget-filters').toggleClass("active");
		if($('body').hasClass("noscroll")){
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}   
		overlay.toggleClass("active");
	});	
	$(".filter-close").click(function(e) {
		e.preventDefault();
		$(".filter-toggler").toggleClass("noactive");
		$('.blog-widget.widget-filters').toggleClass("active");
		$('.overlay').toggleClass("active");
		if($('body').hasClass("noscroll")){
			$('body').removeClass("noscroll");
		}else{
			$('body').addClass("noscroll");
		}                
	});
    $(".filters_reset").click(function(){
		$("#mse2_filters").trigger("reset");
	});
    // CLIENTS SLIDER
	$('.clients-slider').owlCarousel({
        loop: true,
        items: 6,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        navText: ['<i class="icon icon-left" aria-hidden="true"></i>', '<i class="icon icon-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 2,
            nav: false
          },
          0: {
            items: 3,
            nav: false
          },
          900: {
            items: 4,
            nav: false
          },
          1200: {
            items: 6,
            nav: false
          }
        }
    });
    // MAIN SLIDER
	$('.main-slider').owlCarousel({
		loop: false,
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 1,
				nav: false
			},
			1000: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: true
			}
		}
	});
});
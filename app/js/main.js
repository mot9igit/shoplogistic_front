$(document).ready(function(){
	$(".eqh").matchHeight();
    // QUANTITY
	/*

	NOT FOR PROD

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
		$('body').addClass("sl_noscroll");  
		$('body').addClass('loading');
		$(this).attr("disabled");
		$("#msOrder .ms2_link").trigger("click");
	});	
	*/
    // mobile menu toggler
    $(".sl_burger").click(function(e) {
		e.preventDefault();
		if($(this).hasClass('sl_noactive')){
			$('.sl_header-mobile').addClass("sl_active");
			$(this).removeClass("sl_noactive");
		}else{
			$('.sl_header-mobile').removeClass("sl_active");
			$('.mobile_catalog').removeClass("active");
			$(".mobile_catalog .mobile-catalog__inner-block").removeClass("active");
            $('.mobile_catalog .root_menu').addClass("active");
			$('.mobile_navigation a').removeClass('active');
			$(this).addClass("sl_noactive");			
		}
			
		if($('body').hasClass("sl_noscroll")){
			$('body').removeClass("sl_noscroll");
		}else{
			$('body').addClass("sl_noscroll");
		}   
	});
	$(document).on("click", ".toggle_catalog", function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".sl_burger").toggleClass("sl_noactive");
		$('.mobile_menu_catalog').toggleClass("active");
		if($('body').hasClass("sl_noscroll")){
			$('body').removeClass("sl_noscroll");
		}else{
			$('body').addClass("sl_noscroll");
		}   
	});
	$(document).on("click", ".toggle_lk", function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".sl_burger").toggleClass("sl_noactive");
		$('.mobile_menu_lk').toggleClass("active");
		if($('body').hasClass("sl_noscroll")){
			$('body').removeClass("sl_noscroll");
		}else{
			$('body').addClass("sl_noscroll");
		}   
	})
	$(".mobile_catalog .root_menu ul>li>a").click(function(e){
        var target = $(this).data("target");
        if(target){
            e.preventDefault();
            $(".mobile_catalog .root_menu").removeClass("active");
            $(target).addClass("active");
        }
    });
    $(".mobile_catalog .back").click(function(e){
        e.preventDefault();
        var target = $(this).data("target");
        if(target){
            $(".mobile_catalog .mobile-catalog__inner-block").removeClass("active");
            $(target).addClass("active");
        }
    });
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 180) {
			$('.sl_header-bottom').addClass('smaller');			
		}else{
			$('.sl_header-bottom').removeClass('smaller');			
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
    // MAGAZINE SLIDER
	$('.magazine-slider').owlCarousel({
        loop: true,
        items: 4,
        margin: 24,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: true,
        navText: ['<i class="sl_icon sl_icon-arrow_left" aria-hidden="true"></i>', '<i class="sl_icon sl_icon-arrow_right" aria-hidden="true"></i>'],
        responsive: {
			0: {
				items: 1,
				nav: false
			},
			200: {
				items: 1,
				nav: false
			},
			300: {
				items: 2,
				nav: false
			},
			500: {
				items: 3,
				nav: false
			},
			900: {
				items: 4,
				nav: false
			},
			1200: {
				items: 4
			}
        }
    });
	$('.seeto-slider').owlCarousel({
        loop: true,
        items: 4,
        margin: 24,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: true,
        navText: ['<i class="sl_icon sl_icon-arrow_left" aria-hidden="true"></i>', '<i class="sl_icon sl_icon-arrow_right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: false
          },
		  200: {
            items: 1,
            nav: false
          },
		  300: {
            items: 2,
            nav: false
          },
          500: {
            items: 3,
            nav: false
          },
          900: {
            items: 4,
            nav: false
          },
          1200: {
            items: 4
          }
        }
    });
    // MAIN SLIDER
	$(function() {
		var main_owl = $('.main_slide'),
	
			owlOptions = {
			  	loop: false,
				margin: 8,
				nav: false,
				dots: false,
				items: 1
			};
	
		if ( $(window).width() < 1200 ) {
			var owlActive = main_owl.owlCarousel(owlOptions);
		} else {
			main_owl.addClass('off');
		}
	
		$(window).resize(function() {
			if ( $(window).width() < 1200 ) {
				if ( $('.main_slide').hasClass('off') ) {
					var owlActive = main_owl.owlCarousel(owlOptions);
					main_owl.removeClass('off');
				}
			} else {
				if ( !$('.main_slide').hasClass('off') ) {
					main_owl.addClass('off').trigger('destroy.owl.carousel');
					main_owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
				}
			}
		});
	});
	// MAIN MENU SLIDER
	$(function() {
		var menu_owl = $('.main_menu_slider'),	
			owlOptions = {
			  	loop: false,
				margin: 8,
				nav: false,
				dots: false,
				items: 6,
				responsive: {
					0: {
					  items: 1,
					  nav: false
					},
					200: {
					  items: 1,
					  nav: false
					},
					300: {
					  items: 2,
					  nav: false
					},
					400: {
						items: 3,
						nav: false
					  },
					760: {
					  items: 4,
					  nav: false
					},
					900: {
					  items: 5,
					  nav: false
					}
				  }
			};	
		if ( $(window).width() < 1200 ) {
			var owlActive = menu_owl.owlCarousel(owlOptions);
		} else {
			menu_owl.addClass('off');
		}
	
		$(window).resize(function() {
			if ( $(window).width() < 1200 ) {
				if ( $('.main_menu_slider').hasClass('off') ) {
					var owlActive = menu_owl.owlCarousel(owlOptions);
					menu_owl.removeClass('off');
				}
			} else {
				if ( !$('.main_menu_slider').hasClass('off') ) {
					menu_owl.addClass('off').trigger('destroy.owl.carousel');
					menu_owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
				}
			}
		});
	});
	// PRODUCT GALLERY	
	var sync1 = $(".product-gallery .big-gallery");
    var sync2 = $(".product-gallery .small-gallery");
    var slidesPerPage = 3;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
		margin: 0,
		nav: true,
		dots: false,
		navText: ['<i class="sl_icon sl_icon-arrow_left" aria-hidden="true"></i>', '<i class="sl_icon sl_icon-arrow_right" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            margin: 12,
			nav: true,
			dots: false,
			navText: ['<i class="sl_icon sl_icon-arrow_left" aria-hidden="true"></i>', '<i class="sl_icon sl_icon-arrow_right" aria-hidden="true"></i>'],
			responsive: {
				0: {
					items: 4
				},
				600: {
					items: 4
				},
				1000: {
					items: 4
				},
				1200: {
					items: 4
				}
			}
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var current = el.item.index;
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
	// TABLETS SLIDER 
	$(function() {
		var tablets_owl = $('.owl-carousel-tablets'),
	
			owlOptions = {
			  	loop: false,
				margin: 16,
				nav: false,
				dots: false,
				items: 1,
				responsive: {
					0: {
						items: 1
					},
					300: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 3
					}
				}
			};
	
		if ( $(window).width() < 991 ) {
			var owlActive = tablets_owl.owlCarousel(owlOptions);
		} else {
			tablets_owl.addClass('off');
		}
	
		$(window).resize(function() {
			if ( $(window).width() < 991 ) {
				if ( $('.owl-carousel-tablets').hasClass('off') ) {
					var owlActive = tablets_owl.owlCarousel(owlOptions);
					tablets_owl.removeClass('off');
				}
			} else {
				if ( !$('.owl-carousel-tablets').hasClass('off') ) {
					tablets_owl.addClass('off').trigger('destroy.owl.carousel');
					tablets_owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
				}
			}
		});
	});

	// MOBILE SLIDER 
	$(function() {
		var owl = $('.owl-carousel-mobile'),
	
			owlOptions = {
			  	loop: false,
				margin: 8,
				nav: false,
				dots: false,
				items: 1
			};
	
		if ( $(window).width() < 601 ) {
			var owlActive = owl.owlCarousel(owlOptions);
		} else {
			owl.addClass('off');
		}
	
		$(window).resize(function() {
			if ( $(window).width() < 601 ) {
				if ( $('.owl-carousel-mobile').hasClass('off') ) {
					var owlActive = owl.owlCarousel(owlOptions);
					owl.removeClass('off');
				}
			} else {
				if ( !$('.owl-carousel-mobile').hasClass('off') ) {
					owl.addClass('off').trigger('destroy.owl.carousel');
					owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
				}
			}
		});
	});
	// ANIMATE ON SCROLL
	$(document).bind("scroll",function(){
        $(".owl-carousel-mobile").each(function(){
          	var position = $(this).offset().top;
          	var classToBeAdded = "scroll_hook";
			if (position + 150 > $(window).scrollTop() + $(window).height()){
                $(this).removeClass(classToBeAdded);
          	}
          	if (position + 150 < $(window).scrollTop() + $(window).height()){
            	$(this).addClass(classToBeAdded);
          	}         
			if (position+$(this).height()+600 < $(window).scrollTop() + $(window).height()){
                $(this).removeClass(classToBeAdded);
          	}
        });
      });

	var screen_width = document.documentElement.clientWidth;
    var container_width = $("footer .dart_container").innerWidth();
    var field = (screen_width - container_width) / 2 + 15;
    //alert(field);    
    if($(".slider_card").length){
        $(".slider_card .item:first-child").css("margin-left",field+"px");
        var owl = $(".slider_card").owlCarousel({
            margin: 32,
            loop: false,
            autoWidth: true,
            items: 4
        });  
        $( window ).resize(function(){
            owl = $(".slider_card");
            owl.trigger('destroy.owl.carousel');
            var screen_width = document.documentElement.clientWidth;
            var container_width = $("footer .dart_container").innerWidth();
            var field = (screen_width - container_width) / 2 + 15;
            $(".slider_card .item:first-child").css("margin-left",field+"px");
            var owl = $(".slider_card").owlCarousel({
                margin: 32,
                loop: false,
                autoWidth: true,
                items: 4
            });  
        });
    }     
});


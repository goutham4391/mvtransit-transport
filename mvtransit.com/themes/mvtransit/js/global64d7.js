/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {
    }
  };
  	$( document ).ready(function() {
  		mapPointsOn();
  		navSlider();
  		logosSlider();
  		quotesSlider();
  		searchBarOpen();
  		timelinePointsOn();
  		resizeArrows();
  		customTwitterFooter();
  		fixAccordion();
  		menuFixedTransform();
	});

	$(window).resize(function(){
		resizeArrows();
	});

	function mapPointsOn() {
		$('#main-page-arrows').mapster({
			scaleMap: true,
			fillColor: 'ffffff',
			fillOpacity: 0.1,
			selected: true,
			fade: true,
			singleSelect: true,
			mapKey: 'data-point',
        		listKey: 'name',
	          showToolTip: true,
	          toolTipClose: ["tooltip-click", "area-click"],
	          toolTipContainer: '<div class="fun-facts animated fadeIn"></div>',
	          onShowToolTip: factsPosition,
	          areas:  [
	          	{
	          		key: "point1", 
	          		toolTip: $('<div><img src="../themes/mvtransit/img/fun-facts/fact3.png"/></div>')
	          	},
	          	{
	          		key: "point2", 
	          		toolTip: $('<div><img src="../themes/mvtransit/img/fun-facts/fact6.png"/></div>')
	          	},
	          	{
	          		key: "point3", 
	          		toolTip: $('<div><img src="../themes/mvtransit/img/fun-facts/fact2.png"/></div>')
	          	},
	          	{
	          		key: "point4", 
	          		toolTip: $('<div><img src="../themes/mvtransit/img/fun-facts/fact1.png"/></div>')
	          	},
	          	{
	          		key: "point5", 
	          		toolTip: $('<div><img src="../themes/mvtransit/img/fun-facts/fact7.png"/></div>')
	          	},
	          	{
	          		key: "point6", 
	          		toolTip: $('<div><img src="../themes/mvtransit/img/fun-facts/fact4.png"/></div>')
	          	},
	          	{
	          		key: "point7", 
	          		toolTip: $('<div><img src="../themes/mvtransit/img/fun-facts/fact5.png"/></div>')
	          	},
	          	{
	          		key: "point8", 
	          		toolTip: $('<div><img src="../themes/mvtransit/img/fun-facts/fact8.png"/></div>')
	          	},
	          	{
	          		key: "point9", 
	          		toolTip: $('<div><img src="../themes/mvtransit/img/fun-facts/fact9.png"/></div>')
	          	}
	          ]
     	});
	}

	function timelinePointsOn() {
		$('#timeline-arrow-image').mapster({
			scaleMap: true,
			fillColor: 'ffffff',
			fillOpacity: 0.1,
			selected: true,
			fade: true,
			singleSelect: true,
			mapKey: 'data-point',
        		listKey: 'name',
	          showToolTip: true,
	          toolTipClose: ["area-click"],
	          toolTipContainer: '<div class="fun-facts time-line-facts animated fadeIn"></div>',
	          onShowToolTip: timelinePosition,
	          areas:  [
	          	{
	          		key: "time1", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time1">1975</p></div>')
	          	},
	          	{
	          		key: "time2", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time2">1978</p></div>')
	          	},
	          	{
	          		key: "time3", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time3">1983</p></div>')
	          	},
	          	{
	          		key: "time4", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time4">1986</p></div>')
	          	},
	          	{
	          		key: "time5", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time5">1990</p></div>')
	          	},
	          	{
	          		key: "time6", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time6">1998</p></div>')
	          	},
	          	{
	          		key: "time7", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time7">1999</p></div>')
	          	},
	          	{
	          		key: "time8", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time8">2003</p></div>')
	          	},
	          	{
	          		key: "time9", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time9">2005</p></div>')
	          	},
	          	{
	          		key: "time10", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time10">2007</p></div>')
	          	},
	          	{
	          		key: "time11", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time11">2008</p></div>')
	          	},
	          	{
	          		key: "time12", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time12">2012</p></div>')
	          	},
	          	{
	          		key: "time13", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time13">2013</p></div>')
	          	},
	          	{
	          		key: "time14", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time14">2018</p></div>')
	          	},
	          	{
	          		key: "time15", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time15">2020</p></div>')
	          	},
	          	{
	          		key: "time16", 
	          		toolTip: $('<div class="timeline-circle"><p class="timelinetime" id="time16">2020</p></div>')
	          	}
	          ]
     	});
	}

	function mapPointsOff() {
		$('#main-page-arrows').mapster({
			scaleMap: true,
			fillColor: 'ffffff',
			fillOpacity: 0.1,
			selected: false,
			fade: true,
			singleSelect: true,
			mapKey: 'data-point',
        		listKey: 'name',
	          showToolTip: true,
	          toolTipClose: ["area-mouseout"],
	          areas:  [
	          	{
	          		key: "point1", 
	          		toolTip: "p1"
	          	},
	          	{
	          		key: "point2", 
	          		toolTip: "p2"
	          	},
	          	{
	          		key: "point3", 
	          		toolTip: "p3"
	          	},
	          	{
	          		key: "point4", 
	          		toolTip: "p4"
	          	},
	          	{
	          		key: "point5", 
	          		toolTip: "p5"
	          	},
	          	{
	          		key: "point6", 
	          		toolTip: "p6"
	          	},
	          	{
	          		key: "point7", 
	          		toolTip: "p7"
	          	},
	          	{
	          		key: "point8", 
	          		toolTip: "p8"
	          	},
	          	{
	          		key: "point9", 
	          		toolTip: "p9"
	          	}
	          ]
     	});
	}

	function mapPointsBlinker(callback, delay, repetitions) {
		var x = 0;
    		var intervalID = window.setInterval(function () {
       		callback();
			if (++x === repetitions) {
				window.clearInterval(intervalID);
       		}
    		}, delay);
	}

	function factsPosition(e) {
		var topVal = e.toolTip.css("top");
		topVal = parseInt(topVal, 10);

		var leftVal = e.toolTip.css("left");
		leftVal = parseInt(leftVal, 10);

		e.toolTip.css({ left: (leftVal + 140) + 'px', top: (topVal +165) + 'px' });
	}

	function timelinePosition(e) {
		var divID = $('.timelinetime').attr('id');
		$(".timeline-sets h2").css("visibility", "visible");
		$(".timeline-sets p").css({"color": "#727272", "font-weight": "300"});

		var topVal = e.toolTip.css("top");
		topVal = parseInt(topVal, 10);

		var leftVal = e.toolTip.css("left");
		leftVal = parseInt(leftVal, 10);

		e.toolTip.css({ left: (leftVal + 46) + 'px', top: (topVal + 66) + 'px' });

		$(".timeline-sets #" + divID + " h2").css("visibility", "hidden");
		$(".timeline-sets #" + divID + " p").css({"color": "#005587", "font-weight": "500"});
	}

	function navSlider() {
		$('.nav-slider').slick({
		  	infinite: true,
		  	dots: false,
		  	arrows: false,
		  	autoplay: true,
  			autoplaySpeed: 4000,
  			pauseOnHover: false,
  			fade: true,
  			cssEase: 'linear'
		});
	}

	function logosSlider() {
		$('.logos-slider-element').slick({
		  	infinite: true,
		  	dots: false,
		  	arrows: false,
		  	autoplay: true,
  			autoplaySpeed: 2000,
  			pauseOnHover: false,
  			slidesToShow: 6,
  			slidesToScroll: 1,
  			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});
	}

	function quotesSlider() {
		$('.quote-slider').slick({
		  	infinite: true,
		  	dots: false,
		  	arrows: false,
		  	autoplay: true,
  			autoplaySpeed: 3000,
  			pauseOnHover: true
		});
	}

	function searchBarOpen() {
		$( "#edit-submit-c" ).click(function() {
			var navW = $("#block-mvtransit-main-menu").width();
			$( "#block-searchform" ).css({ "display": "block", "width": navW });
			$( "#edit-submit-c" ).css("display", "none");
		});
		$( "#edit-close-c" ).click(function() {
			$( "#block-searchform" ).css({ "display": "none", "width": "auto" });
			$( "#edit-submit-c" ).css("display", "block");
		});
	}

	function resizeArrows() {
		var h = $('.arrows-container').width();
		var counterH = $('#main-page-arrows').width();
		if (h > counterH) {
			h = counterH;
		}
		$('#main-page-arrows').mapster('resize', h, 0, 0);

		var j = $('.timeline-arrows').width();
		var counterJ = $('#timeline-arrow-image').width();
		if (j > counterJ) {
			j = counterJ;
		}
		$('#timeline-arrow-image').mapster('resize', j, 0, 0);
	}

	function customTwitterFooter() {
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
		    if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
		    js.src="//platform.twitter.com/widgets.js";
		    fjs.parentNode.insertBefore(js,fjs);}
		}(document,"script","twitter-wjs");
		var options = {
		    "url": "/~mvtransi/themes/mvtransit/css/custom-twitter.css"
		};
		CustomizeTwitterWidget(options);
	}

	function fixAccordion() {
		$('.our-people .nav-pills .nav-link').on('click', function () {
			$(".tab-pane, .our-people .nav-pills .nav-link").removeClass('active show');
		})
	}

	function menuFixedTransform() {
		$(window).scroll(function () {
		    	if ($(window).scrollTop() > 280) {
		    		$('#navbar-main').removeClass('navbar-dark');
		     	$('#navbar-main').addClass('fixed-top animated fadeInDown navbar-light');
		    	}
		    	if ($(window).scrollTop() < 281) {
		    		$('#navbar-main').addClass('navbar-dark');
		      	$('#navbar-main').removeClass('fixed-top animated fadeInDown navbar-light');
		    	}
		});
	}

})(jQuery, Drupal);

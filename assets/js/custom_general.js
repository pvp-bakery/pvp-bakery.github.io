// To setup the template, change the variables below
// Follow instructions in code comments or see documentation for more detail

//  1. Configurations or Settings
//  2. Navigation on click
// 	3. Menu / Internal / Exteranl links  
//	4. General Sections
//	5. Reservation Form Start
//	6. Contact Form Start
//	7. Home page Promotions Sections
//	8. Custom  Functions Section

/*****************************************************************************
						1. Configurations or Settings
******************************************************************************/

		//Scroll speed and page animation Scrollto.js parameter
		
		var horizontal_scroll_speed=1500 // speed Horizontal Scrollto parameter default #1200.
		
		//animation sliding speed configure 
		var menu_header_speed=300 // on sub page topbar sliding down animation default #350
		var menu_main_header_speed=600   // home page middle bar sliding down animation default #800

        //Scroll speed and page animation end
		

/**********************Configuration / Settings END**********************/


/******************************************************************************
		  	            2. Navigation on click 
******************************************************************************/


// On Document Ready initialise the options 
jQuery(document).ready(function($){
"use strict";

// on click navigation 
/*********************************************************************************/

$("ul.nav li a").click(function () {
	$('ul.nav li a').removeAttr('class');
	$(this).attr('class', 'selected');
	});


/******************	 2. Navigation on click END******************/



/***************************************************
		  		3. Menu / Internal / Exteranl links  
***************************************************/

// Slick navigation for mobile / tablet purpose

$(function(){
	$('#home_nav').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutQuint", //available with jQuery UI
	closeOnClick:true
});
});

$(function(){
	$('#sub-nav').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutQuint", //available with jQuery UI
	closeOnClick:true
});
});


// on external and internal page link 
$('.link').click(function () {
var name = $(this).attr('href');
window.location.href = name;
}); 

$('a.external-link').click(function () {
 return !window.open(this); 
 }); 

$('a.internal-link').click(function () {
var name = $(this).attr('href');
window.location.href = name;
}); 

/******************	3. Menu / Internal / Exteranl links END******************/


/*************************************************************
		  		4. General Sections
**************************************************************/

//Preloader
		$("body").jpreLoader(
			  {
				splashID:"#jSplash",
				showPercentage:!0,
				autoClose:!0,
				showSplash: true,
				splashFunction:function(){
				$("#circle").delay(1250).animate({opacity:1},700,"linear");
			  }
			 })
//Preloader end


// Home page Social on mouse over slide up / down
		
		jQuery(function($){
				$('.accura-jump a,' +
				'.accura-jump-bg a').each(function () {
					var $el = $(this);
					$el.append($el.find('i').clone());
				});
		$('.accura-social-icons-big a i').wrap('<span></span>');
		});

// Home page Social on mouse over END


//  FIT VID Video for Responsive purpose */
		$(".video_containers").fitVids();
//  FIT VID Video END */

/*  Carousel Slider Used In home page  */                    
		$('.carousel').carousel({
		  interval: 3000
		})
/* Carousel Slider end */

//  Toggle Menu */


	$('.toggle-content').hide();  //hides the toggled content

	$('.toggle-link').click(function () {
		if ($(this).is('.toggle-close')) {
			$(this).removeClass('toggle-close').addClass('toggle-open').parent().next('.toggle-content').slideToggle(300);
  $('#scrolldynamic').getNiceScroll().resize();
			return false;
		} 
		
		else {
			$(this).removeClass('toggle-open').addClass('toggle-close').parent().next('.toggle-content').slideToggle(300);
			$(".menuscroll").getNiceScroll().resize();
			  $('#scrolldynamic').getNiceScroll().resize();
			return false;
		}
	});			 

//  Toggle Menu */


/****************** 4. General Sections ******************/

/*************************************************************
            5. Reservation Form Start
**************************************************************/	

	/* Date Picker */
  $('.form_datetime').datetimepicker({
        language:  'en',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian:0,
		pickerPosition: "bottom-left"
    });
  /* Date Picker */
  
  $('#reservation_form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
	phone: {
    required: true,
    },
    email: {
    required: true,
    email: true
    },
    subject: {
    minlength: 2,
    required: true
    },
    message: {
    minlength: 2,
    required: true
    }
    },
    highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					$.post('reservation-general-form.php', $("#reservation_form").serialize(), function(data) { // action file is here 
						$('#reservation_form').html(data);
					});
				}
    });
  

/****************** 5. Reservation Form END******************/


/*************************************************************
            6. Contact Form Start
**************************************************************/	
	  $('#contact_form').validate(
		{
		rules: {
		name: {
		minlength: 2,
		required: true
		},
		phone: {
		required: true,
		},
		email: {
		required: true,
		email: true
		},
		subject: {
		minlength: 2,
		required: true
		},
		message: {
		minlength: 2,
		required: true
		}
		},
		highlight: function(element) {
		$(element).closest('.control-group').removeClass('success').addClass('error');
		},
		success: function(element) {
		element
		.text('OK!').addClass('valid')
		.closest('.control-group').removeClass('error').addClass('success');
		},
		submitHandler: function(form) {
						// do other stuff for a valid form
						$.post('contact-general-form.php', $("#contact_form").serialize(), function(data) { // action file is here 
							$('#contact_form').html(data);
						});
					}
		});


/****************** 6. Contact Form END******************/


/*************************************************************
		  		7. Home page Promotions Sections
**************************************************************/

/* Promotions BOX1 */
		 $('.spmenu1').hover(function() {
				$(this).addClass('forefront');
			}, function() {
				$(this).removeClass('forefront');
			})
			
			var $lightbox = $('#lightbox');
			$('[data-target="#lightbox"]').on('click', function(event) {
				var $img = $(this).find('img'), 
					src = $img.attr('src'),
					alt = $img.attr('alt'),
					css = {
						'maxWidth': $(window).width() - 100,
						'maxHeight': $(window).height() - 100
					};
			
				$lightbox.find('.close').addClass('hidden');
				$lightbox.find('img').attr('src', src);
				$lightbox.find('img').attr('alt', alt);
				$lightbox.find('img').css(css);
			});
			
			$lightbox.on('shown.bs.modal', function (e) {
				var $img = $lightbox.find('img');
					
				$lightbox.find('.modal-dialog').css({'width': $img.width()});
				$lightbox.find('.close').removeClass('hidden');
			});
/*   Promotions BOX1 End   */





/* Promotions BOX3 */
		$('.spmenu3').hover(function() {
			$(this).addClass('forefront');
		}, function() {
			$(this).removeClass('forefront');
		})
		
		var $lightbox = $('#lightbox3');
			
		$lightbox.on('shown.bs.modal', function (e) {
			var $img = $lightbox.find('img');
				
			$lightbox.find('.modal-dialog').css({'width': $img.width()});
			$lightbox.find('.close').removeClass('hidden');
		});
/*   Promotions BOX3 End   */

		$('body').click(function(){
		   if( $('#lightbox1').dialog("isOpen") ) {
			  $('#lightbox1').dialog("close")
		   }
		
		});
		
/* Promotions BOX2 */
		$('.spmenu2').hover(function() {
			$(this).addClass('forefront');
		}, function() {
			$(this).removeClass('forefront');
		})
		
		var $lightbox = $('#lightbox2');
		
		$('[data-target="#lightbox2"]').on('click', function(event) {
			var $img = $(this).find('iframe'), 
				src = $img.attr('src'),
				alt = $img.attr('alt'),
				css = {
					'maxWidth': $(window).width() - 100,
					'maxHeight': $(window).height() - 100
				};
		
			$lightbox.find('.close').addClass('hidden');
			$lightbox.find('iframe').attr('src', src);
			$lightbox.find('iframe').attr('alt', alt);
			$lightbox.find('iframe').css(css);
		});
		
		$lightbox.on('shown.bs.modal', function (e) {
			var $img = $lightbox.find('iframe');
				
			$lightbox.find('.modal-dialog').css({'width': $img.width()});
			$lightbox.find('.close').removeClass('hidden');
	});
/*   Promotions BOX2 End   */

/****************** 7. Home page Promotions Sections END******************/



}); 
// On Document Ready initialise the options 


/*************************************************************
		    8. Custom  Functions Section
*************************************************************/

// used to show the modals
	function modalshow(modalid)  
	{
		$(modalid).modal('show');
	}

// this is used add animation Class  
	function Animation(element,effect,timedelay) 
	{
		$(element).delay(timedelay).removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		 $(this).removeClass();
		});
	};

// home page animation functions
	function Homepage_Animation()
	{
	$('#mainheader').show('fade', { easing: 'easeInQuad' }, menu_main_header_speed); //on homepage topbar sliding up animation 
	Animation("#mainheader","fadeInUp","200");
	Animation("#spmenu1","fadeInRight","300");
	Animation("#spmenu2","fadeInRight","800");
	Animation("#spmenu3","fadeInRight","5000");
	Animation("#1","fadeInLeft","800");
	Animation("#2","fadeInUp","1800");
	Animation("#3","fadeInDown","800");
	Animation("#4","fadeInLeft","1800");
	Animation("#5","fadeInRight","800");
	}

// sub page animation functions
	function Subpage_animation ()
	{
	Animation("#header","fadeInDown","200");
	$('#header').show('fade', { direction: 'top', easing: 'easeInQuad' }, menu_header_speed); //on sub page topbar sliding down animation 
	}


/* // Progress bar animation start  */
// scroll to view element and used for bar and skills 
	function isScrolledIntoView(elem) {
		var docViewTop = jQuery(window).scrollTop();
		var docViewBottom = docViewTop + jQuery(window).height();
	
		var elemTop = jQuery(elem).offset().top;
		var elemBottom = elemTop + jQuery(elem).height();
	
		return ((elemBottom <= (docViewBottom + jQuery(elem).height())) && (elemTop >= (docViewTop - jQuery(elem).height())));
	}
// skills bar
	function skillbarActive(){
		setTimeout(function(){
	
			jQuery('.progress-bar').each(function() {
				jQuery(this)
					.data("origWidth", jQuery(this)[0].style.width)
					.css('width','1%').show();
				jQuery(this)
					.animate({
					width: jQuery(this).data("origWidth")
					}, 50);
			});
	
			jQuery('.progress-bar .dot').each(function() {
				var me = jQuery(this);
				var perc = me.attr("data-percentage");
	
				var current_perc = 0;
	
				var progress = setInterval(function() {
					if (current_perc>=perc) {
						clearInterval(progress);
							} else {
								current_perc +=1;
								me.text((current_perc)+'%');
							}
				}, 10);
			});
		}, 10);}

/* // Progress bar animation end  */

/*   Spmenu video Stop On Click Close Button  */

$('button.close').click(function() {
   video_containers = $('.video_containers');
   video_containers.html( video_containers.html() );
});

$('.modal').click(function() {
   video_containers = $('.video_containers');
   video_containers.html( video_containers.html() );
});

/*   Spmenu video Stop On Click Close Button  */

/****************** 8. Custom  Functions Section END******************/

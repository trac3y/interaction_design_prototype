'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
	_userAgentInit = function() {
		docElem.setAttribute('data-useragent', navigator.userAgent);
	},
	_init = function() {
		$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
            	$(document).foundation('joyride', 'start');
            });
            _userAgentInit();
        };
        return {
        	init: _init
        };
    })(document, jQuery);

// To display the current date
function displayCurrentDate() {
	var today = new Date();
	console.log(today);

	var monthNames = [ "January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December" ];
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	today.setDate(today.getDate() + 1);    

	$('#current-date').html("It's " + dayNames[today.getDay()] + ' ' + monthNames[today.getMonth()] + ' ' + today.getDate() + ' ' + today.getFullYear() + ".");
}

function delay (URL) {
    setTimeout( function() { 
    	window.location = URL }, 1500);
}

$(function() {
	app.init();
	displayCurrentDate();

	$('path').hover(function() {
		console.log('hover');
		// $(this).attr('stroke', '#fff');
		$(this).css('animation', 'shrink 5s linear');
	},
	function() {
		console.log('leaving');
		// $(this).attr('stroke', '#000');
		$(this).css('animation', 'draw 5s linear');	
		
	});

	$('.squiggle-wrapper').click(function() {
		$('.squiggle-wrapper').css('background-color', 'white');
		$('path').attr('stroke', 'black');
		$(this).css('background-color', 'black');
		$(this).find('path').attr('stroke', 'white');
	});

	// Survey Question 4
	var tellMore;
	// fill in the blanks
	$('#fill-in-blanks').on('invalid.fndtn.abide', function () {
		console.log('yo stop');
		tellMore = '<p style="display:none;">Wait, fill everything out!</p>';
		$(tellMore).hide().appendTo('.tell-more').fadeIn(1000);
		$('#link-to-5').bind('click', false);
	});
	$('#fill-in-blanks').on('valid.fndtn.abide', function () {
		console.log('good shit yo');
		tellMore = '<p style="display:none;">Really? Tell me more!</p>';
		$(tellMore).hide().appendTo('.tell-more').fadeIn(1000);
	});

});

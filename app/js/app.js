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

	$('#current-date > p').html("It's " + dayNames[today.getDay()] + ' ' + monthNames[today.getMonth()] + ' ' + today.getDate() + ' ' + today.getFullYear() + ".");
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

	// Survey Question 1
	$('.squiggle-wrapper').click(function() {
		$('.squiggle-wrapper').addClass('light-background');
		$('path').attr('stroke', 'black');
		$(this).removeClass('light-background');
		$(this).addClass('dark-background');
		$(this).find('path').attr('stroke', 'white');
	});

	// Survey Question 2
	$('.color-row').click(function() {
		$('.color-row').removeClass('highlight');
		$(this).addClass('highlight');
	});

	// Survey Question 4
	// fill in the blanks
	$('#fill-in-blanks').on('invalid.fndtn.abide', function () {
		console.log('bad');
		$('.complete').css('display', 'none');;
		$('.incomplete').fadeIn(500);
	});
	$('#fill-in-blanks').on('valid.fndtn.abide', function () {
		console.log('good');
		$('.incomplete').css('display', 'none');;
		$('.complete').fadeIn(500);
		$('.submit-button').addClass('hidden');
		$('.next-button').removeClass('hidden');
	});

});

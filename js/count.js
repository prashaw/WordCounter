
$(function() {

var $countButton = $('#count');
var $clearButton = $('#clear');
var $text = $('#text');
var $wordcount = $('#wordcount');
var $charcount = $('#charcount');
var $lettercount = $('#lettercount');

function isWord(str) {

		// checking if first character in word is a letter
		if ( !( (str.charCodeAt(0) >= 65) && (str.charCodeAt(0) <= 90) ||
			   (str.charCodeAt(0) >= 97) &&  (str.charCodeAt(0) <= 122) ) ) {
			return false;
		}

		// checks if word has punctuation
		var hasPunctuation = false;
		var punctuation = ".?!,;:";
		for (var i = 0; i < punctuation.length; i++) {
			if (str.charCodeAt(str.length-1) === punctuation.charCodeAt(i)) {
				hasPunctuation = true;
			}
		}


		for (var i = 0; i < str.length; i++) {
			
			if ( !( (str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 90) ||
			   (str.charCodeAt(i) >= 97) &&  (str.charCodeAt(i) <= 122) )
			   && str.charCodeAt(i) != 39 && str.charCodeAt(i) != 45 ) {

			   	if (i == (str.length-1) && (hasPunctuation)) {
			   		// do nothing
			   	} else {
			   		return false;
			   	}
				
			}
		}

		return true;		
}


    
function count() {
		var s = $text.val();
		s = s.trim();
		var words = s.split(' ');
		var wcount = 0;
		for (var i = 0; i < words.length; i++) {
			if (isWord(words[i])) {
				wcount++;
			}
		}

		$wordcount.text(wcount);
		$charcount.text(s.length);

		var letters = s;
		var lcount = 0;
		for (var i = 0; i < letters.length; i++) {
			if ((letters.charCodeAt(i) >= 65) && (letters.charCodeAt(i) <= 90) ||
			   (letters.charCodeAt(i) >= 97) &&  (letters.charCodeAt(i) <= 122)) {
				lcount++;
			}
		}

		$lettercount.text(lcount);
}




$(document).ready( function() {

	$clearButton.on('click', function() {
		$text.val('');
		$wordcount.text(0);
		$charcount.text(0);
		$lettercount.text(0);
	}); 

	$countButton.on('click', function() {
		count();
	});
	
	$text.on('change', function() {
		count();
	});

	$text.on('keydown', function() {
		count();
	});

	$text.on('keypress', function() {
		count();
	});

	$text.on('keyup', function() {
		count();
	});

	$text.on('blur', function() {
		count();
	});

	$text.on('focus', function() {
		count();
	});

});






});



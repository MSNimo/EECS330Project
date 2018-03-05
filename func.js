function learn_more() {
     location.href = "learnmore.html";
} 

function duckworth_go() {
    location.href = "duckworth.html";
}

function kirk_go() {
    location.href = "learnmore.html";
}

function schakowsky_go() {
    location.href = "learnmore.html";
}

function lasonde_go() {
    location.href = "learnmore.html";
}

function shrek_go(){
	location.href = "https://en.wikipedia.org/wiki/Shrek_(character)"
}

function kamala_go(){
	location.href = ""
}

function loretta_go(){
	location.href = ""
}

function crying_go(){
	location.href = "https://en.wikipedia.org/wiki/Emoji"
}

//Matchme, Matchme-Loader and Match-results
function match_me(){
	location.href = "matchme.html";
}

function collect_match_me(){
	location.href = "matchme-loader.html"
}


//color of candidates button changes if democrat or republican
$(document).ready(function() {
	var customcards = $('.customcard')
	for(var i = 1; i < customcards.length + 1; i++) {
		var party = $('.band .customcard:nth-child('+ i +') .party-text');
		if(party.text() == 'Democrat') {
			$('.band .customcard:nth-child('+ i +')  .customcard-btn').css({backgroundColor: '#4579B2'});
		}
		if(party.text() == 'Republican') {
			$('.band .customcard:nth-child('+ i +')  .customcard-btn').css({backgroundColor: '#CA5B54'});
		}
	}
})
function buttonColor(){
	console.log(document.getElementByClass("party-text"));

}


/* Filter */

$("select.filterby").change(function(){
    var filters = $.map($("select.filterby").toArray(), function(e){
        return $(e).val();
    }).join(".");
    $("div.band").find("div").hide();
    $("div.band").find("div." + filters).show();
});
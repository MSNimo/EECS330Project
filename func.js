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

//Matchme, Matchme-Loader and Match-results
function match_me(){
	location.href = "matchme.html";
}

function collect_match_me(){
	location.href = "matchme-loader.html"
}


//color of candidates button changes if democrat or republican
$(document).ready(function() {
	var cards = $('.card')
	for(var i = 1; i < cards.length + 1; i++) {
		var party = $('.band .card:nth-child('+ i +') .party-text');
		if(party.text() == 'Democrat') {
			$('.band .card:nth-child('+ i +')  .card-btn').css({backgroundColor: '#4579B2'});
		}
		if(party.text() == 'Republican') {
			$('.band .card:nth-child('+ i +')  .card-btn').css({backgroundColor: '#CA5B54'});
		}
	}
})
function buttonColor(){
	console.log(document.getElementByClass("party-text"));

}
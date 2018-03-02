function learn_more() {
     location.href = "learnmore.html";
}

function duckworth_go() {
    location.href = "duckworth.html";
}

function kirk_go() {
    location.href = "kirk.html";
}

function schakowsky_go() {
    location.href = "schakowsky.html";
}

function lasonde_go() {
    location.href = "lasonde.html";
}

//Matchme, Matchme-Loader and Match-results
function match_me(){
}

function collect_match_me(){
  var matchAnswers = document.form[0];
  var matchOutput = [0,0,0,0]; // [duckworth, kirk, schawosky, lasonde]
  if(matchAnswers[0].checked){
    // Pro Choice
    matchoutput += [20, 20, 20, 0];
  }
  if(matchAnswers[1].checked){
    // Pro Life
    matchOutput += [0,0,0,20];
  }
  if(matchAnswers[2].checked){
    // N/A
  }
  if(matchAnswers[3].checked){
    // Pro Gun Control
  }
  if(matchAnswers[4].checked){
    // Pro Gun
  }
  if(matchAnswers[5].checked){
    // N/A
  }
  if(matchAnswers[6].checked){
    // Pro Environmental Regulation
  }
  if(matchAnswers[7].checked){
    // Anti Environmental Regulation
  }
  if(matchAnswers[8].checked){
    // N/A
  }
  if(matchAnswers[9].checked){
    // Pro Universal Healthcare
  }
  if(matchAnswers[10].checked){
    // Anti Universal Health Care
  }
  if(matchAnswers[11].checked){

  }
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

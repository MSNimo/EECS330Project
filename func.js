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
}

function collect_match_me(){
  var matchAnswers = document.form[0];
  var matchOutput = [0,0,0,0]; // [duckworth, kirk, schawosky, lasonde]
  if(matchAnswers[0].checked){
    // Pro Choice
    matchoutput += [20, 20, 20, 10];
  }
  if(matchAnswers[1].checked){
    // Pro Life
    matchOutput += [0, 0, 0, 10];
  }
  if(matchAnswers[2].checked){
    // N/A
    matchOutput += [10, 10, 10, 10]
  }
  if(matchAnswers[3].checked){
    // Pro Gun Control
    matchOutput += [20, 5, 20, 10]
  }
  if(matchAnswers[4].checked){
    // Pro Gun
    matchOutput += [0, 5, 0, 10];
  }
  if(matchAnswers[5].checked){
    // N/A
    matchOutput += [10, 10, 10, 10];
  }
  if(matchAnswers[6].checked){
    // Pro Environmental Regulation
    matchOutput += [20, 15, 20, 10]
    tammy duckworth:
    mark kirk:
    Jan Schawosky:
    Joan McCarthy Lasonde:
  }
  if(matchAnswers[7].checked){
    // Anti Environmental Regulation
    matchOutput += [0, 5, 0, 10];
  }
  if(matchAnswers[8].checked){
    // N/A
    matchOutput += [10, 10, 10, 10];
  }
  if(matchAnswers[9].checked){
    // Pro Universal Healthcare
    matchOutput += [15, 0, 20, 5];
  }
  if(matchAnswers[10].checked){
    // Anti Universal Health Care
    matchOutput += [5, 20, 0, 15];
  }
  if(matchAnswers[11].checked){
    // N/A
    matchOutput += [10, 10, 10, 10];

  }
  location.href = "matchme-loader.html";
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

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

function shrek_go(){
	location.href = "https://en.wikipedia.org/wiki/Shrek_(character)"
}

function kamala_go(){
	location.href = "harris.html"
}

function loretta_go(){
	location.href = "sanchez.html"
}

function crying_go(){
	location.href = "https://en.wikipedia.org/wiki/Emoji"
}

function match_me_go(){
  location.href = "matchme.html";
}

//Matchme, Matchme-Loader and Match-results
function match_me(){
  var perD = localStorage.getItem("DuckPer");
  var perK = localStorage.getItem("KirkPer");
  var perS = localStorage.getItem("SchaPer");
  var perL = localStorage.getItem("LasoPer");
  document.getElementById("duckworth-percent").innerHTML = perD + "%";
  document.getElementById("kirk-percent").innerHTML = perK + "%";
  document.getElementById("schawosky-percent").innerHTML = perS + "%";
  document.getElementById("lasonde-percent").innerHTML = perL + "%";

}

function collect_match_me(){
  // location.href = "matchme-loader.html";
  var matchAnswers = document.forms[0];
  // var matchOutput = [0,0,0,0]; // [duckworth, kirk, schawosky, lasonde]
  var perDuckworth = 0;
  var perKirk = 0;
  var perSchawosky = 0;
  var perLasonde = 0;
  if(matchAnswers[0].checked){
    // Pro Choice
    // matchoutput += [20, 20, 20, 10];
    perDuckworth += 20;
    perKirk += 20;
    perSchawosky += 20;
    perLasonde += 10;
  }
  if(matchAnswers[1].checked){
    // Pro Life
    // matchOutput += [0, 0, 0, 10];
    perLasonde += 10;
  }
  if(matchAnswers[2].checked){
    // N/A
    // matchOutput += [10, 10, 10, 10];
    perDuckworth += 10;
    perKirk += 10;
    perSchawosky += 10;
    perLasonde += 10;
  }
  if(matchAnswers[3].checked){
    // Pro Gun Control
    // matchOutput += [20, 5, 20, 10];
    perDuckworth += 20;
    perKirk += 5;
    perSchawosky += 20;
    perLasonde += 10;
  }
  if(matchAnswers[4].checked){
    // Pro Gun
    // matchOutput += [0, 5, 0, 10];
    perKirk += 5;
    perLasonde += 10;
  }
  if(matchAnswers[5].checked){
    // N/A
    // matchOutput += [10, 10, 10, 10];
    perDuckworth += 10;
    perKirk += 10;
    perSchawosky += 10;
    perLasonde += 10;
  }
  if(matchAnswers[6].checked){
    // Pro Environmental Regulation
    // matchOutput += [20, 15, 20, 10];
    perDuckworth += 20;
    perKirk += 15;
    perSchawosky += 20;
    perLasonde += 10;
  }
  if(matchAnswers[7].checked){
    // Anti Environmental Regulation
    // matchOutput += [0, 5, 0, 10];
    perKirk += 5;
    perLasonde += 10;
  }
  if(matchAnswers[8].checked){
    // N/A
    // matchOutput += [10, 10, 10, 10];
    perDuckworth += 10;
    perKirk += 10;
    perSchawosky += 10;
    perLasonde += 10;
  }
  if(matchAnswers[9].checked){
    // Pro Universal Healthcare
    // matchOutput += [15, 0, 20, 5];
    perDuckworth += 15;
    perKirk += 0;
    perSchawosky += 20;
    perLasonde += 5;
  }
  if(matchAnswers[10].checked){
    // Anti Universal Health Care
    // matchOutput += [5, 20, 0, 15];
    perDuckworth += 5;
    perKirk += 20;
    perLasonde += 15;
  }
  if(matchAnswers[11].checked){
    // N/A
    // matchOutput += [10, 10, 10, 10];
    perDuckworth += 10;
    perKirk += 10;
    perSchawosky += 10;
    perLasonde += 10;
  }
  if(matchAnswers[12].checked){
    // Reduce Taxes
    // matchOutput += [20, 0, 15, 0];
    perDuckworth += 20;
    perSchawosky += 15;
  }
  if(matchAnswers[13].checked){
    // Increase Taxes
    // matchOutput += [0, 20, 5, 20];
    perKirk += 20;
    perSchawosky += 5;
    perLasonde += 20;
  }
  if(matchAnswers[14].checked){
    // N/A
    // matchOutput += [10, 10, 10, 10];
    perDuckworth += 10;
    perKirk += 10;
    perSchawosky += 10;
    perLasonde += 10;
  }
  localStorage.setItem("DuckPer", perDuckworth);
  localStorage.setItem("KirkPer", perKirk);
  localStorage.setItem("SchaPer", perSchawosky);
  localStorage.setItem("LasoPer", perLasonde);
  window.location.href = "matchme-loader.html";

  // document.GetElementById("duckworth-percent").innerHTML = perDuckworth;
  // document.GetElementById("kirk-percent").innerHTML = perKirk;
  // document.GetElementById("schawosky-percent").innerHTML = perSchawosky;
  // document.GetElementById("lasonde-percent").innerHTML = perLasonde;
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

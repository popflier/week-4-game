/*script*/

//19-120
//1-12

/*GLOBAL*/

//declare variable for wins
var wins = 0;
//declare variable for losses
var losses = 0;
//declare a variable to set the users initial total to 0
var userTotal = 0;
//declare variable to create random target number
var targetTotal = Math.floor(Math.random() * 120) + 19;
//declare variable to create random user number
var numberOptions = [];
for(var i = 0; i < 13; i++) {
numberOptions[i] = Math.floor(Math.random() * 12) + 1;
}

//reset game to default values
resetGame();

/*FUNCTIONS*/

function resetGame (){
    //declare variable to create random target number
    targetTotal = Math.floor(Math.random() * 120) + 19;
    //set userTotal back to 0
    document.querySelector(".totalWins").innerHTML = wins;
    document.querySelector(".totalLosses").innerHTML = losses;
    document.querySelector(".userTotal").innerHTML = userTotal; 
}


//created an array of all of the crystal images
for (i = 0; i < crystalImages.length; i++){
    
    var crystalImages = ["images/blueCrystal.png", "images/whiteCrystal.png", "images/pinkCrystal.png", "images/purpleCrystal.png"];
    
    crystalImages.attr("crystalvalue", numberOptions[i]);
    
 /*   var blueCrystal = $(".blueCrystal");

    var whiteCrystal = $(".whiteCrystal");

    var pinkCrystal = $(".pinkCrystal");

    var purpleCrystal = $(".purpleCrystal");*/

}

//print random number generated above to target div
$(".targetNumber").text(targetNumber);


//if (targetTotal === userTotal) {
//    
//}









/*$(".targetNumber").on("click", function(event)){
                      
}*/


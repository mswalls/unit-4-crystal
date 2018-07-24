$(document).ready(function() {


var computerguess = Math.floor(Math.random()*(120-19+1)+19);
console.log(computerguess);
$("#computernumber").text(computerguess);



var rednum = Math.floor(Math.random()*(12-1+1)+1);
var bluenum = Math.floor(Math.random()*(12-1+1)+1);
var purplenum = Math.floor(Math.random()*(12-1+1)+1);
var yellownum= Math.floor(Math.random()*(12-1+1)+1);

var wins = 0;
var losses = 0;
var userguess= 0;


function reset(){
computerguess = Math.floor(Math.random()*(120-19+1)+19);

$("#computernumber").text(computerguess);

rednum = Math.floor(Math.random()*(12-1+1)+1);
  
bluenum = Math.floor(Math.random()*(12-1+1)+1);
    
purplenum = Math.floor(Math.random()*(12-1+1)+1);
    
yellownum= Math.floor(Math.random()*(12-1+1)+1);
    
userguess= 0;

$("#total").text(userguess);
}

function win () {
    wins += 1;
    $("#wins").text(wins);
    reset();
}

function lose () {
    losses += 1;
    $("#losses").text(losses);
    reset();
}

$("#red").on("click", function() {
    userguess = userguess + rednum;
    $("#total").text(userguess);
    if (userguess === computerguess) {
        win();
        alert("you win")
    }
    else if (userguess > computerguess) {
        lose();
        alert("you lose")
    }
 })  

 $("#blue").on("click", function() {
    userguess = userguess + bluenum;
    $("#total").text(userguess);
    if (userguess === computerguess) {
        alert("you win")
        win();
    }
    else if (userguess > computerguess) {
        alert("you lose")
        lose();
    }
 })   

 $("#purple").on("click", function() {
    userguess = userguess + purplenum;
    $("#total").text(userguess);
    if (userguess === computerguess) {
        alert("you win")
        win();
    }
    else if (userguess > computerguess) {
        alert("you lose")
        lose();
    }
 })   

 $("#yellow").on("click", function() {
    userguess = userguess + yellownum;
    $("#total").text(userguess);
    if (userguess === computerguess) {
        alert("you win")
        win();
    }
    else if (userguess > computerguess) {
        alert("you lose")
        lose();
    }
 });  

});



function diceRoll(){
    var randomNumber1= Math.floor(Math.random()*6)+1;
    var randomImageSource="images/dice"+randomNumber1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
    var randomNumber2=Math.floor(Math.random()*6)+1;
    var randomImageSource2="images/dice"+randomNumber2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player1 Won";
        document.querySelector("h1").style.color="green";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Player2 Won";
        document.querySelector("h1").style.color="purple";

    }
    else{
        document.querySelector("h1").innerHTML="It's Draw - Play Again";
        document.querySelector("h1").style.color="Yellow";
    }
}
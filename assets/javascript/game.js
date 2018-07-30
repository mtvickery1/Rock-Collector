//Starts the game.//
function start() {    

    //global variables//
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //Generates a number between 19-120 and assigns it to randomValue.//
    var randomValue = Math.floor(Math.random()*102+19)
    console.log(randomValue + " Score to match");//Display to console//

    //Generates 4 random values between 1-12 and assigns to a variable.//
    var crystalOne = Math.floor(Math.random()*12+1);
    var crystalTwo = Math.floor(Math.random()*12+1);
    var crystalThree = Math.floor(Math.random()*12+1);
    var crystalFour = Math.floor(Math.random()*12+1);

    //This is a test. It is displaying the random numbers to the console//
    var randomNumbers = [crystalOne, crystalTwo, crystalThree, crystalFour];
    for (var i = 0; i < randomNumbers.length; i++) {
    console.log(randomNumbers[i] + " Crystal value");
    }///////////////////////////////////////////////////////////////////////
    
    // Reset game
    function reset(){
        randomValue = Math.floor(Math.random()*102+19);
        console.log(randomValue + " Score to match2");
        $("#random-value").text(randomValue);
        crystalOne = Math.floor(Math.random()*12+1);
        crystalTwo = Math.floor(Math.random()*12+1);
        crystalThree = Math.floor(Math.random()*12+1);
        crystalFour = Math.floor(Math.random()*12+1);
        totalScore= 0;
        $("#total-score").text(totalScore);

        //This is a test. It is displaying the random numbers to the console//
        var randomNumbers = [crystalOne, crystalTwo, crystalThree, crystalFour];
        for (var i = 0; i < randomNumbers.length; i++) {
        console.log(randomNumbers[i] + " Crystal value2");
        }///////////////////////////////////////////////////////////////////////
        console.log(totalScore);//making sure this was reset to 0.
    } 

    //Displays randomValue to #random-value.
    function displayRandomValue() {
        $("#random-value").text(randomValue);
    }

    //If you click a crystal, this will add the value of it to the totalScore variable. Then, it will display the updated totalScore value to #total-score on the web page.//
    $("#crystal-one").on("click", function() {
        totalScore += crystalOne;//this adds crystalOne to totalScore//
        $("#total-score").text(totalScore);//this displays the score//
        //if the total score is equal to the random value then add 1 to wins and resets.
        if (totalScore === randomValue) {
            alert("You won!");
            wins = wins + 1;
            $("#wins").text(wins);
            reset();
        }
        //if the total score is more than the random value then add 1 to losses and resets.
        if (totalScore > randomValue) {
            losses = losses + 1;
            $("#losses").text(losses);
            reset();
    }
    });
    $("#crystal-two").on("click", function() {
        totalScore += crystalTwo;
        $("#total-score").text(totalScore);
        if (totalScore === randomValue) {
            alert("You won!");
            wins = wins + 1;
            $("#wins").text(wins);
            reset();
        }
        if (totalScore > randomValue) {
            losses = losses + 1;
            $("#losses").text(losses);
            reset();
    }
    });
    $("#crystal-three").on("click", function() {
        totalScore += crystalThree;
        $("#total-score").text(totalScore);
        if (totalScore === randomValue) {
            alert("You won!");
            wins = wins + 1;
            $("#wins").text(wins);
            reset();
        }
        if (totalScore > randomValue) {
            losses = losses + 1;
            $("#losses").text(losses);
            reset();
    }
    });
    $("#crystal-four").on("click", function() {
        totalScore += crystalFour;
        $("#total-score").text(totalScore);
        if (totalScore === randomValue) {
            alert("You won!");
            wins = wins + 1;
            $("#wins").text(wins);
            reset();
        }
        if (totalScore > randomValue) {
            losses = losses + 1;
            $("#losses").text(losses);
            reset();
    }
    });
    
    //Calling my function(s)//
    displayRandomValue();

}

start();
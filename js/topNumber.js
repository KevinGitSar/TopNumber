window.addEventListener("load", function () {
    /* 
        Kevin Sar, 000390567
        Created: Sunday, ‎November ‎8, ‎2020, ‏‎6:54:35 PM
        This is the JavaScript file for the game TOP NUMBER!
        It contains all the functions for the game, as well as checking for user inputs
        Model for the game.
    */

    /**
     * Gets random integer from 1-6 inclusive
     * Amount of random int is dependent on user input (How many dice they want)
     * Puts int into an array
     * Sorts from smallest to biggest
     * Uses reverse to get Biggest to smallest
     * 
     * @param {Number} dice 
     * @param {Array} array 
     */
    function roll(dice, array) {
        for (i = 0; i < dice; i++) {
            array.push(Math.floor(Math.random() * 6) + 1)
        }
        array.sort();
        array.reverse();
    }

    /**
     * Gets the current roll or score for player1
     */
    function getScore1() {
        finalScore1 = "";
        loop = 0;
        while (loop < document.getElementsByClassName("newDie").length) {
            finalScore1 += document.getElementsByClassName("newDie")[loop].innerHTML;
            loop++;
        }
        finalScore1 = parseInt(finalScore1);
    }

    /**
     * Gets the current roll or score for player2
     */
    function getScore2() {
        finalScore2 = "";
        loop = 0;
        while (loop < document.getElementsByClassName("newDie2").length) {
            finalScore2 += document.getElementsByClassName("newDie2")[loop].innerHTML;
            loop++;
        }
        finalScore2 = parseInt(finalScore2);
    }

    /**
     * Saves the current roll or score for player1
     * Then changes the view for player2
     */
    function p1Save() {
        getScore1();
        document.getElementById("player2Set").style.display = "block";
        document.getElementById("player1Set").style.display = "none";
    }

    /**
     * Saves the current roll or score for player2
     * Then changes the view for the next round
     */
    function p2Save() {
        getScore2();
        document.getElementById("player2Set").style.display = "none";
        document.getElementById("newRound").style.display = "block";
    }

    /**
     * Resets the rolls for both players to nothing
     * (if not players will see their old rolls in the score board)
     */
    function resetRolls() {
        document.getElementById("player2CRolls").innerHTML = "";
        document.getElementById("player1CRolls").innerHTML = "";
        crt.innerHTML = "Current Rolls";

    }

    /**
     * Checks for the winner, and tell the players who won
     * @param {Number} score1 -The score for player1
     * @param {Number} score2 -The score for player2
     */
    function winner(score1, score2) {

        if (score2 > score1) {
            incrementP2++;
            scoreBoard2.innerHTML = incrementP2;
            crt.innerHTML = player2.value + " is the Winner!";


        } else if (score2 < score1) {
            incrementP1++;
            scoreBoard1.innerHTML = incrementP1;
            crt.innerHTML = player1.value + " is the Winner!";

        } else {
            incrementP1++;
            scoreBoard1.innerHTML = incrementP1;
            incrementP2++;
            scoreBoard2.innerHTML = incrementP2;
            crt.innerHTML = "Tie between " + player1.value + " and " + player2.value + "!";
        }
    }

    /**
     * This increments the round
     * Let's the players know what round they are on
     */
    function roundIncrement() {
        increment++;
        round.innerHTML = "Round " + increment;
    }

    /**
     * Clears the actually set of dice for player1
     */
    function clear1() {
        let removeOldDie = document.getElementsByClassName("newDie");
        for (i = (removeOldDie.length - 1); i > -1; i--) {
            removeOldDie[i].parentNode.removeChild(removeOldDie[i]);
        }
    }

    /**
     * Clears the set of dice for player2
     */
    function clear2() {
        let removeOldDie = document.getElementsByClassName("newDie2");
        for (i = (removeOldDie.length - 1); i > -1; i--) {
            removeOldDie[i].parentNode.removeChild(removeOldDie[i]);
        }
    }

    /**
     * Sets the saved current roll/score for player 1 in the score board
     */
    function cPlayer1Rolls() {
        getScore1();
        document.getElementById("player1CRolls").innerHTML = finalScore1;
    }

    /**
     * Sets the saved current roll/score for player 2 in the score board
     */
    function cPlayer2Rolls() {
        getScore2();
        document.getElementById("player2CRolls").innerHTML = finalScore2;
    }

    /**
     * Toggles the instructions for the users
     */
    function toggleInstructions() {
        let instructions = document.getElementById("instructions");
        if (instructions.style.display === "none") {
            instructions.style.display = "block";
        } else {
            instructions.style.display = "none";
        }
    }

    /**
     * Once the players fill out the form properly and click play
     */
    playerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        /**
         * This next section is all error checking, if somehow the players incorrectly filled out the form
         * It will let the users know
         */

        let msg = "";
        let error = false; //Setting up flag

        //Checks and sets player 1 name
        let player1 = document.forms.playerForm.player1;
        if (player1.value === null || player1.value === false || player1.value === "" || player1.value == " ") {
            msg += "<br>Invalid name for player 1<br>";
            error = true;
        }
        player1 = player1.value;

        //Checks and sets player 1 age
        let player1Age = document.forms.playerForm.player1Age;
        if (player1Age.value === null || player1Age.value === false || player1Age.value <= 0) {
            msg += "<br>Invalid age for player 1<br>";
            error = true;
        }
        player1Age = player1Age.value;

        //Checks and sets player color
        let player1Color = document.forms.playerForm.player1Color;
        if (player1Color.value === null || player1Color.value === false || player1Color.value === "") {
            msg += "<br>Invalid color for player 1<br>";
            error = true;
        }
        player1Color = player1Color.value;

        //Checks player 2 name
        let player2 = document.forms.playerForm.player2;
        if (player2.value === null || player2.value === false || player2.value === "" || player1.value == " ") {
            msg += "<br>Invalid name for player 2<br>";
            error = true;
        }
        player2 = player2.value;

        //Checks player 2 age
        let player2Age = document.forms.playerForm.player2Age;
        if (player2Age.value === null || player2Age.value === false || player2Age.value <= 0) {
            msg += "<br>Invalid age for player 2<br>";
            error = true;
        }
        player2Age = player2Age.value;

        //Checks player 2 color
        let player2Color = document.forms.playerForm.player2Color;
        if (player2Color.value === null || player2Color.value === false || player2Color.value === "") {
            msg += "<br>Invalid color for player 2<br>";
            error = true;
        }
        player2Color = player2Color.value;

        //Checks amount of dice to be used
        let dice = document.forms.playerForm.dice;
        if (dice.value <= 0 || dice.value > 5 || dice.value == "" || dice.value === null || dice.value === false) {
            msg += "<br>Invalid amount of dice";
            error = true;
        }
        dice = dice.value;

        //If invalid input, tell the user(s) why
        if (error == true) {
            document.getElementById("error").style.display = "block";
            document.getElementById("errorMsg").innerHTML = msg;
            document.getElementById("scoreBoard").style.display = "none";
            document.getElementById("player1Roll").style.display = "none";

            //Reload button for user included on 'error screen'
            document.getElementById("refresh").addEventListener("click", function () {
                location.reload();
            });
        }

        //Hide the form
        let hide = document.getElementById("formContainer");
        hide.style.display = "none";

        //Show the game
        let show = document.getElementById("gameContainer");
        show.style.display = "block";

        //Set up the score board with name and age of players
        let name1 = document.getElementById("name1");
        name1.innerHTML = player1 + "<br> Age: " + player1Age;

        let name2 = document.getElementById("name2");
        name2.innerHTML = player2 + "<br> Age: " + player2Age;

        //Setting up the incrementation for rounds
        increment = 1;
        let round = document.getElementById("round");
        round.innerHTML = "Round " + increment;

        //Setting up the increment for amount of player 1 winning
        incrementP1 = 0;
        let scoreBoard1 = document.getElementById("scoreBoard1");
        scoreBoard1.innerHTML = incrementP1;

        //Setting up the increment for amount of player 2 winning
        incrementP2 = 0;
        let scoreBoard2 = document.getElementById("scoreBoard2");
        scoreBoard2.innerHTML = incrementP2;

        //Setting up a section for current rolls for the players
        let crt = document.getElementById("crt");
        crt.innerHTML = "Current Rolls";

        let player1Roll = document.getElementById("player1Roll");

        let player2Roll = document.getElementById("player2Roll");

        /**
         * If the form is correctly inputted by the user(s)
         */
        if (error == false) {

            //Makes the instruction header into a button and clickable
            let instructionHeader = document.getElementById("instructionHeader");
            instructionHeader.addEventListener("click", function () {
                toggleInstructions();
            });

            player1Counter = 0; //Setting up player 1 counter (checks how many times they roll)
            player1Roll.value = player1 + " ROLL!"; //Setting up player 1 button with their name, so they know it's their turn
            player1Roll.addEventListener("click", function () {

                document.getElementById("player1Score").style.display = "block"; //Once player 1 clicks to roll, they can choose to save their roll

                //If player one chooses to re-roll, it'll clear the old roll
                if (player1Counter > 0) {
                    clear1();
                };

                //This part actually does the rolling for player 1 creating the dice set using an array and amount of dice selected by the user(s)
                let array = [];
                roll(dice, array);

                //Show it to player 1
                for (i = 0; i < dice; i++) {
                    let newDiv = document.createElement('div');
                    newDiv.className = 'newDie';
                    newDiv.innerHTML = array[i].toString();
                    document.getElementById("player1DiceSet").appendChild(newDiv);
                    let changeDie = document.getElementsByClassName("newDie");
                    changeDie[i].style.backgroundColor = player1Color;
                };

                player1Counter++; //Incrementing player 1 counter

                //If player 1 rolled 3 times (immediately save their third roll)
                if (player1Counter == 3) {
                    p1Save();
                    player1Counter = 0;
                }
                cPlayer1Rolls(); //Outputs player 1 score to the score board
            });

            //If player 1 chooses to save their current score early
            document.getElementById("player1Score").addEventListener("click", function () {
                p1Save(); //Saves the score
                player1Counter = 0; //Reset player 1's counter back to 0
            });

            player2Counter = 0; //Setting up player 2's counter
            player2Roll.value = player2 + " ROLL!" //Setting player 2's name to the roll button
            player2Roll.addEventListener("click", function () {

                document.getElementById("player2Score").style.display = "block"; //Once player 2 rolls, they can immediately save their current score

                //If player 2 re-rolls, clear their last roll
                if (player2Counter > 0) {
                    clear2();
                };

                //Creating the rolls/set of dice of player 2
                let array = [];
                roll(dice, array);

                //Shows it to player 2
                for (i = 0; i < dice; i++) {
                    let newDiv = document.createElement('div');
                    newDiv.className = 'newDie2';
                    newDiv.innerHTML = array[i].toString();
                    document.getElementById("player2DiceSet").appendChild(newDiv);
                    let changeDie = document.getElementsByClassName("newDie2");
                    changeDie[i].style.backgroundColor = player2Color;
                };

                player2Counter++; //Increment player 2's counter for rolling

                if (player2Counter == 3) { //If player 2 rolls 3 times, immediately save the last roll
                    p2Save(); //Saves score for player 2 and shows the next round button
                    player2Counter = 0; //Reset Counter to 0 for player 2
                    winner(finalScore1, finalScore2); //Calculate the winner and outputs it in the score board
                }
                cPlayer2Rolls(); //Sets player 2's score on the score board

            });

            //If player 2 saves the scores early
            document.getElementById("player2Score").addEventListener("click", function () {
                p2Save(); //Saves score also shows the next round button
                winner(finalScore1, finalScore2); //Outputs a winner to the score board
                player2Counter = 0; //Reset player 2's counter to 0
            });

            //Next round button will show player 1's turn, hide and reset everything else.
            document.getElementById("newRound").addEventListener("click", function () {

                document.getElementById("player1Set").style.display = "block";
                document.getElementById("player1Score").style.display = "none";
                document.getElementById("player2Score").style.display = "none";
                document.getElementById("newRound").style.display = "none";
                player1Counter = 0;
                player2Counter = 0;
                clear1();
                clear2();
                roundIncrement();
                resetRolls();
            });

            //resetGame button will reload the game back to the form for the user to either change name, set wins back to 0 and change amount of dice if they wish
            document.getElementById("resetGame").addEventListener("click", function () {
                location.reload();
            });
        }
    });
});
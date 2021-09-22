
var userPick = String;
var compIndex = Number;
var compPick = ["R","P","S"];
var stats = [0,0,0];
var result = Boolean;

function playRPS() {

    userPick = window.prompt("Pick Rock[R], Paper[P] or Scissor[S]","");

    userPick = userPick.toUpperCase();

    if(!(compPick.includes(userPick))) {
        window.alert("R, P or S must be entered");
        return playRPS();
    }

    compIndex = Math.floor(Math.random()*3);


    if(userPick == compPick[compIndex]) {
        window.alert("You have Tied");
        stats[2]++;
    }
    else if ((userPick == "R" && compPick[compIndex] == "P") || (userPick == "S" && compPick[compIndex] == "R") || (userPick == "P" && compPick[compIndex] == "S")) {
        window.alert("You have Lost");
        stats[1]++;
    }
    else {
        window.alert("You have Won!");
        stats[0]++;
    };
    
    window.alert("Stats\nWins: " + stats[0] + "\nLoss: " + stats[1] + "\nTies: " + stats[2]);

    result = window.confirm("Would you like to play again?");

    if(result) {
        return playRPS();
    };
    window.alert("Sorry to see you go, play again someday");
    return;
}

playRPS();
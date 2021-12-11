let currentPlayer = 1;
let grid = [["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            [":",":",":",":",":",":",":"]];

let gameFinished = false;


function win(){
    let winner ="";
    //vertical
    for(let m = 0; m < 7; m++){
        for(let k = 0; k < 4; k++){
            if(grid[k][m] == "*" && grid[k+1][m] == "*" && grid[k+2][m] == "*" && grid[k+3][m] == "*"){
                winner = "Player 1 wins!";
                gameFinished = true;
            }
            if(grid[k][m] == "#" && grid[k+1][m] == "#" && grid[k+2][m] == "#" && grid[k+3][m] == "#"){
                
                winner = "Player 2 wins!";
                gameFinished = true;
                               
            }
            
        }
    }
    //Horizontal
    for(let m = 0; m < 7; m++){
        for(let k = 0; k < 4; k++){
            if(grid[m][k] == "*" && grid[m][k+1] == "*" && grid[m][k+2] == "*" && grid[m][k+3] == "*"){
               
                winner = "Player 1 wins!";
                gameFinished = true;
            }
            if(grid[m][k] == "#" && grid[m][k+1] == "#" && grid[m][k+2] == "#" && grid[m][k+3] == "#"){
                
                winner = "Player 2 wins!";
                gameFinished = true;
            }
            
        }
    }
    //Diagnal down
    for(let m = 0; m < 4; m++){
        for(let k = 0; k < 4; k++){
            if(grid[k][m] == "*" && grid[k+1][m+1] == "*" && grid[k+2][m+2] == "*" && grid[k+3][m+3] == "*"){
               
                winner = "Player 1 wins!";
                gameFinished = true;
            }
            if(grid[k][m] == "#" && grid[k+1][m+1] == "#" && grid[k+2][m+2] == "#" && grid[k+3][m+3] == "#"){
               
                winner = "Player 2 wins!";
                gameFinished = true;
            }
            
        }
    }
    //Diagnal up
    for(let m =  6; m >= 3; m--){
        for(let k = 0; k < 4; k++){
            if(grid[k][m] == "*" && grid[k+1][m-1] == "*" && grid[k+2][m-2] == "*" && grid[k+3][m-3] == "*"){
              
                winner = "Player 1 wins!";
                gameFinished = true;
                
            }
            if(grid[k][m] == "#" && grid[k+1][m-1] == "#" && grid[k+2][m-2] == "#" && grid[k+3][m-3] == "#"){
               
                winner = "Player 2 wins!";
                gameFinished = true;
               
            }
            
        }
    }
    console.log(winner);
    return winner;
}
function play(col)
{   
    let state ="";
    
    if(gameFinished){
        state = "Game has finished!";
    }
    else if(grid[0][col] != ""){
        state = "Column full!";
    }
    else
    {
        for(let i = 0; i < grid[0].length-1; i++){
            if(grid[i+1][col] != ""){
                if(currentPlayer == 1){
                    grid[i][col] = "*";
                    state = "Player " + currentPlayer +  " has a turn";
                    currentPlayer = 2;
                    if(win() == "Player 1 wins!" || win() == "Player 2 wins!"){
                        
                        state = win();
                        
                    }
                    break;
                }
                else if(currentPlayer == 2){
                    grid[i][col] = "#";
                    state = "Player " + currentPlayer +  " has a turn";
                    currentPlayer = 1;
                    if(win() == "Player 1 wins!" || win() == "Player 2 wins!"){
                       
                        state = win();
                    }
                    break;
                }
            }
        }
    }
    
    return state;
}
function gridStruct(m,p){
    let row = document.getElementById("row"+ m);
    if(grid[m][p] == ""){
        row.innerHTML += "<img src=\"Assets/empty.png\" class=\"classGrid\">";
    }
    else if(grid[m][p] == "*"){
        row.innerHTML += "<img src=\"Assets/Red.png\"class=\"classGrid\">";
    }
    else if(grid[m][p] == "#"){
        row.innerHTML += "<img src=\"Assets/yellow.png\"class=\"classGrid\">";
    }
    else if(grid[m][p] == "rv"){
        row.innerHTML += "<img src=\"Assets/RedV.png\"class=\"classGrid\">"
    }
    else if(grid[m][p] == "yv"){
        row.innerHTML += "<img src=\"Assets/YellowV.png\"class=\"classGrid\">"
    }
    else if(grid[m][p] == "rh"){
        row.innerHTML += "<img src=\"Assets/RedH.png\"class=\"classGrid\">"
    }
    else if(grid[m][p] == "yh"){
        row.innerHTML += "<img src=\"Assets/YellowH.png\"class=\"classGrid\">"
    }
    else if(grid[m][p] == "rdu"){
        row.innerHTML += "<img src=\"Assets/RedDUp.png\"class=\"classGrid\">"
    }
    else if(grid[m][p] == "ydu"){
        row.innerHTML += "<img src=\"Assets/YellowDUp.png\"class=\"classGrid\">"
    }
    else if(grid[m][p] == "rdd"){
        row.innerHTML += "<img src=\"Assets/RedDDown.png\"class=\"classGrid\">"
    }
    else if(grid[m][p] == "ydd"){
        row.innerHTML += "<img src=\"Assets/YellowDDown.png\"class=\"classGrid\">"
    }
    
}
function gridDestruct(m,p){
    let row = document.getElementById("row"+ m);
    row.innerHTML = "";
}
function displayFleshs(f){
    let flesh = document.getElementById("flesh");
    if(currentPlayer == 1){
        flesh.innerHTML += "<img class=\"classGrid\" src=\"Assets/RedFlesh.png\" onclick=\"setColumn"+f+"(); gameplay(); displ()\"></img>";
    }else{
        flesh.innerHTML += "<img class=\"classGrid\" src=\"Assets/YellowFlesh.png\" onclick=\"setColumn"+f+"(); gameplay(); displ()\"></img>";
    }
}
function destructFleshs(){
    let flesh = document.getElementById("flesh");
    flesh.innerHTML = "";
}
function displ(){
    scratch();
    destructFleshs()
    for(let p = 0; p < grid[0].length; p++){
        gridDestruct(0,p);
        gridDestruct(1,p);
        gridDestruct(2,p);
        gridDestruct(3,p);
        gridDestruct(4,p);
        gridDestruct(5,p);        
     }
    for(let p = 0; p < grid[0].length; p++){
        displayFleshs(p)
        gridStruct(0,p);
        gridStruct(1,p);
        gridStruct(2,p);
        gridStruct(3,p);
        gridStruct(4,p);
        gridStruct(5,p);
    }
}
let column;
function setColumn0(){column = 0;}
function setColumn1(){column = 1;}
function setColumn2(){column = 2;}
function setColumn3(){column = 3;}
function setColumn4(){column = 4;}
function setColumn5(){column = 5;}
function setColumn6(){column = 6;}

function gameplay(){
    let ply = play(column);
    if(ply == "Player 1 has a turn" || ply == "Player 2 has a turn" ){
        audio('audio/flesh.wav');
    }
    if(ply == "Player 1 wins!"){
        audio('audio/win.wav');
       document.getElementById("state").innerHTML = "<img src=\"Assets/circleRedWin.png\" id=\"Win\">" + "<span> Winner!!</span>" + "<img src=\"Assets/redWin.gif\" id=\"win\"></img>" ;
        
    }
    else if(ply == "Player 2 wins!"){
        audio('audio/win.wav');
        document.getElementById("state").innerHTML = " <img src=\"Assets/circleYellowWin.png\" id=\"Win\">" + "<span> Winner!!</span>"+ "<img src=\"Assets/yellowWin.gif\" id=\"win\"></img>";
    }
    else if(ply == "Column full!"){
        audio('audio/full.wav');
        document.getElementById("state").innerHTML = " <img src=\"Assets/full.png\" id=\"full\">"
    }
    else if(ply == "Game has finished!"){
        audio('audio/end.wav');
        document.getElementById("state").innerHTML = "<span> Game has finished!</span>"
    }else
    {
        document.getElementById("state").innerHTML = "";
    }
}

function loadGame(){
    let txt = document.getElementById("b");
    txt.innerHTML = "<div id= \"flesh\" class=\"grid\"></div>\n"+
                    "<div id=\"row0\" class=\"grid\"></div>\n"+
                    "<div id=\"row1\" class=\"grid\"></div>\n"+
                    "<div id=\"row2\" class=\"grid\"></div>\n"+
                    "<div id=\"row3\" class=\"grid\"></div>\n"+
                    "<div id=\"row4\" class=\"grid\"></div>\n"+
                    "<div id=\"row5\" class=\"grid\"></div>\n"+
                    "<button onclick=\"restart(); displ(); audio(\'audio/restart.wav\')\" id=\"restart\">Restart</button>"+
                    "<div id=\"state\" ></div>\n"+
                    "<script src=\"Game.js\"></script>\n";
    
        
   
}

function scratch(){
    
    for(let m = 0; m < 7; m++){
        for(let k = 0; k < 4; k++){
            if(grid[k][m] == "*" && grid[k+1][m] == "*" && grid[k+2][m] == "*" && grid[k+3][m] == "*"){
                grid[k][m] = "rv"; 
                grid[k+1][m] = "rv";
                grid[k+2][m] = "rv";
                grid[k+3][m] = "rv";
            }
            if(grid[k][m] == "#" && grid[k+1][m] == "#" && grid[k+2][m] == "#" && grid[k+3][m] == "#"){
                grid[k][m] = "yv"; 
                grid[k+1][m] = "yv";
                grid[k+2][m] = "yv";
                grid[k+3][m] = "yv";
            }
            
        }
    }
    //Horizontal
    for(let m = 0; m < 7; m++){
        for(let k = 0; k < 4; k++){
            if(grid[m][k] == "*" && grid[m][k+1] == "*" && grid[m][k+2] == "*" && grid[m][k+3] == "*"){
                grid[m][k] = "rh";
                grid[m][k+1] = "rh"
                grid[m][k+2] = "rh";
                grid[m][k+3] = "rh";
            }
            if(grid[m][k] == "#" && grid[m][k+1] == "#" && grid[m][k+2] == "#" && grid[m][k+3] == "#"){
                grid[m][k] = "yh";
                grid[m][k+1] = "yh"
                grid[m][k+2] = "yh";
                grid[m][k+3] = "yh";
            }
            
        }
    }
    //Diagnal down
    for(let m = 0; m < 4; m++){
        for(let k = 0; k < 4; k++){
            if(grid[k][m] == "*" && grid[k+1][m+1] == "*" && grid[k+2][m+2] == "*" && grid[k+3][m+3] == "*"){
                grid[k][m] = "rdd";
                grid[k+1][m+1] = "rdd";
                grid[k+2][m+2] = "rdd";
                grid[k+3][m+3] = "rdd";
            }
            if(grid[k][m] == "#" && grid[k+1][m+1] == "#" && grid[k+2][m+2] == "#" && grid[k+3][m+3] == "#"){
                grid[k][m] = "ydd";
                grid[k+1][m+1] = "ydd";
                grid[k+2][m+2] = "ydd";
                grid[k+3][m+3] = "ydd";
            }
            
        }
    }
    //Diagnal up
    for(let m =  6; m >= 3; m--){
        for(let k = 0; k < 4; k++){
            if(grid[k][m] == "*" && grid[k+1][m-1] == "*" && grid[k+2][m-2] == "*" && grid[k+3][m-3] == "*"){
                grid[k][m] = "rdu";
                grid[k+1][m-1] = "rdu";
                grid[k+2][m-2] = "rdu";
                grid[k+3][m-3] = "rdu";
            }
            if(grid[k][m] == "#" && grid[k+1][m-1] == "#" && grid[k+2][m-2] == "#" && grid[k+3][m-3] == "#"){
                grid[k][m] = "ydu";
                grid[k+1][m-1] = "ydu";
                grid[k+2][m-2] = "ydu";
                grid[k+3][m-3] = "ydu";
            }
            
        }
    }
}
function restart(){
    grid = [["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            [":",":",":",":",":",":",":"]];
    currentPlayer = 1;
    gameFinished = false;
    document.getElementById("state").innerHTML = "";
}
function audio(t){
    var audio = new Audio(t);
    audio.play();
}


var myWindow;

function openWin() {
  
}

function resizeWin() {
    myWindow = window.open("Connect4.html", "", "width=900, height=720,resizable=0");
    
    myWindow.focus();
}


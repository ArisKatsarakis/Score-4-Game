const board = {
    player: "red",
    cells: [],
    winner: false
};
const red = {
    player: "red",
    pieces: 21,
    winner: false
};
const yellow = {
    player: "yellow",
    pieces: 21,
    winner: false
};
var current = red;
var empty = 42;
board.cells[0] = [null, null, null, null, null, null];
board.cells[1] = [null, null, null, null, null, null];
board.cells[2] = [null, null, null, null, null, null];
board.cells[3] = [null, null, null, null, null, null];
board.cells[4] = [null, null, null, null, null, null];
board.cells[5] = [null, null, null, null, null, null];
board.cells[6] = [null, null, null, null, null, null];


function play(x, y) {
    document.getElementById("cells").innerHTML = "Empty Cells: "+ empty;
    //checkTurn
    getPlayerTurn();
    //check rows
    if (!isValidMove(x, y)) {

    } else {
        alert("The Column is Full");
    }
    for (let index = 6; index >= 0; index--) {
        if (board.cells[index][y] == null) {
            board.cells[index][y] = current.player;
            document.getElementById(index + "_" + y).style = "background-color:" + current.player;

            //ChangePlayer
            verticalWin();
            horizontalWin();
            diagonalWin(index,y);
            changePlayer();
            empty--;
            
            isDraw();
            break;
        }

    }

}

function getPlayerTurn() {
    if (current == red) {
        return red;
    } else {
        return yellow;
    }
}
function isValidMove(x, y) {
    var full = true;
    for (let index = 6; index >= 0; index--) {
        if (board.cells[index][y] == null) {
            full = false;
            break;
        } else {

        }

    }
    return full;
}

function changePlayer() {
    if (getPlayerTurn() == red) {

        current = yellow;
        document.getElementById("Turn").innerHTML = "Yellow Player Is Playing";

    } else {
        current = red;
        document.getElementById("Turn").innerHTML = "Red Player Is Playing";

    }
}

function verticalWin() {
    var count = 0;
    var j = 0;
    for (let index = 0; index <= 6; index++) {
        for (; j <= 5; j++) {
            if (board.cells[index][j] == current.player) {
                count++;
            } else {
                count = 0;
            }
            if (count == 4) {
                alert(current.player + " Player has won Vertically !");
                break;
            }

        }
        count = 0;
        j = 0;
    }
}
function horizontalWin() {
    var count = 0;
    var j = 0;
    for (let index = 0; index <= 5; index++) {
        for (; j <= 6; j++) {
            if (board.cells[j][index] == current.player) {
                count++;
            } else {
                count = 0;
            }
            if (count == 4) {
                alert(current.player + " Player has won Horizontally !");
                break;
            }

        }
        count = 0;
        j = 0;
    }
}
/*
function diagonalWin(x,y) {
    count = 0;
    if (x < 4) {
        if (y < 3) {
            for (let index = x; index < 7; index++) {
                if (count == 4) {
                    break;
                }else if ( index >=5) {
                    break;
                }
                if (board.cells[index][index] == board.cells[index +1][index+1] ) {
                    count++;
                }else{
                    count = 0;
                }
            }
        }else{
            for (let index = x; index < 7; index++) {
                if (count == 4) {
                    break;
                }
                for (let j = y; j > 0; j--) {
                    if (board.cells[index][j] == board.cells[index+1][j-1]) {
                        count++;
                    }else{
                        count =0;
                    }
                }
            }
        }
    }else{
        for (let index = x; index >0; index--) {
            if (count == 4) {
                break;
            }
            for (let j = 0; j < 5; j++) {
                if (board.cells[index][j] == board.cells[index-1][j+1]) {
                    count++;
                    index--;
                }else{
                    count = 0;
                }
            }
        }
    }
}
*/
function diagonalWin(x,y) {
    count = 0;

    if (x<4) {
        if (y<3) {
            if (board.cells[x][y] == board.cells[x+1][y+1]) {
                count++;
            }
            if (board.cells[x][y] == board.cells[x+2][y+2]) {
                count++;
            }if (board.cells[x][y] == board.cells[x+3][y+3]) {
                count++;
            }
        }else{
            if (board.cells[x][y] == board.cells[x+1][y-1]) {
                count++;
            }
            if (board.cells[x][y] == board.cells[x+2][y-2]) {
                count++;
            }if (board.cells[x][y] == board.cells[x+3][y-3]) {
                count++;
            }
        }
    }else{
        if (y<3) {
            if (board.cells[x][y] == board.cells[x-1][y+1]) {
                count++;
            }
            if (board.cells[x][y] == board.cells[x-2][y+2]) {
                count++;
            }if (board.cells[x][y] == board.cells[x-3][y+3]) {
                count++;
            }
        }else{
            if (board.cells[x][y] == board.cells[x-1][y-1]) {
                count++;
            }
            if (board.cells[x][y] == board.cells[x-2][y-2]) {
                count++;
            }if (board.cells[x][y] == board.cells[x-3][y-3]) {
                count++;
            }
        }
    }
    if (count == 3) {
        alert("Diagonal Win!");
    }
}

function isDraw(){
    if (empty == 0) {
        alert("Its Draw"); 
    }
}
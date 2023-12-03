let noRow = 10;
let noColumns = 10;
let board, planeId = 84 ;
let setChangeCometPosition, setCometPosition;

function createBoard() {
    board = [];
    for (let i = 0; i < noRow; ++i) {
        let row = [];
        for (let j = 0; j < noColumns; ++j) {
            row.push(0);
            let cell = document.createElement('div');
            cell.classList.add('box');
            cell.id = i.toString() + j.toString();
            document.getElementById('board').append(cell);
        }
        board.push(row);
    }
    document.getElementById(planeId).className = 'plane'; 
    setChangeCometPosition = setInterval(changeCometPosition, 1000);
    setCometPosition = setInterval(createRandomCometPosition, 2000);
    document.addEventListener("keyup", planeDirectionMove);
}

let cometCell;
let cometList = [];

function createRandomCometPosition() {
    cometCell = Math.floor(Math.random() * 10);
    cometList.push('0' + cometCell);
    document.getElementById('0' + cometCell).className = 'comet';
}

let time = 0;

function changeCometPosition() {
    ++time;
    for (let i = 0; i < cometList.length; ++i) {
        let newCometPosition = parseInt(cometList[i]);
        newCometPosition = newCometPosition + 10;
        if (newCometPosition >= 99) {
            document.getElementById(cometList[i]).className = 'box';
            cometList.splice(newCometPosition.toString());
        } else {
            document.getElementById(cometList[i]).className = 'box';
            document.getElementById(newCometPosition.toString()).className = 'comet';
            cometList[i] = newCometPosition.toString();
        }
        if(newCometPosition == newPlaneId) {
            scoreText.innerHTML = 'Your score is ' + time + ' !';
            document.getElementById("reload").style.display = "block";
            clearInterval(setChangeCometPosition);
            clearInterval(setCometPosition);
        }
    }
}

let newPlaneId = planeId;

 function planeDirectionMove(event) {
    if (event.keyCode == 37) {
        if (newPlaneId > 80 && newPlaneId <= 89) {
            newPlaneId -= 1;
            document.getElementById(planeId).className = "box";
            document.getElementById(newPlaneId).className = "plane";
            planeId = newPlaneId;
        }
    } else if (event.keyCode == 39) {
        if (newPlaneId >= 80 && newPlaneId < 89) {
            newPlaneId += 1;
            document.getElementById(planeId).className = "box";
            document.getElementById(newPlaneId).className = "plane";
            planeId = newPlaneId;
        }
    }
}

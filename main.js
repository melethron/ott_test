function createMatrix() {
    do{
        var n = parseInt(prompt("Please enter n>2 (where 2*n-1 - is matrix size)", ""), 10);
    }   while (isNaN(n) || n < 2);
    var size = 2*n-1;
    var result = [];
    for (var i = 0 ; i < size; i++) {
        result[i] = [];
        for (var j = 0; j < size; j++) {
            result[i][j] = (Math.random() * 5 | 0) + 6;
        }
    }
    return result;
}

function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        var str = matrix[i].join(" ");
    }
    var table = document.createElement('table');
    for (var j = 0; j < matrix.length; j++) {
        var tr = document.createElement('tr');
        for (var k = 0; k < matrix[j].length; k++) {
            var td = document.createElement('td');
            td.innerHTML = matrix[j][k];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.body.appendChild(table);
}

function printAnswer(answer) {
    var p = document.createElement('p');
    p.innerHTML = "Answer is : '" + answer+ "'";
    document.body.appendChild(p);
}

function findMiddle(matrix) {
    var middle = Math.round((matrix.length - 1) / 2);
    return [middle, middle]
}

function move_left(coord) {
    coord[1] = coord[1] - 1;
    return coord;
}

function move_down(coord) {
    coord[0] = coord[0] + 1;
    return coord;
}

function move_right(coord) {
    coord[1] = coord[1] + 1;
    return coord;
}

function move_up(coord) {
    coord[0] = coord[0] - 1;
    return coord;
}

function taskAnswer() {
    var steps = 1;
    //var steps_vertic = 1;
    var counter = 0;
    var result = matrix[coord[0]][coord[1]].toString();
    while (steps < matrix.length) {
        for (var i = 0; i < steps; i++) {
            if (counter % 2 === 0) {
                move_left(coord);
            }
            else {
                move_right(coord);
            }
            result = result.concat(" ", matrix[coord[0]][coord[1]]);            
        }            
        //steps_horiz++;
        for (var i = 0; i < steps; i++) {
            if (counter % 2 === 0) {
                move_down(coord);
            }
            else {
                move_up(coord);
            }
            result = result.concat(" ", matrix[coord[0]][coord[1]]);
        }
        steps++;
        counter++;            
    }
    for (var i=0; i < matrix.length-1; i++) {
        move_left(coord);
        result = result.concat(" ", matrix[coord[0]][coord[1]]);
    }
    return result;
}

var matrix = createMatrix();
printMatrix(matrix);
var coord = findMiddle(matrix);
var result = taskAnswer();
printAnswer(result);

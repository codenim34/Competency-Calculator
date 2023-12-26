function calculate() {
    var triangle = document.getElementById('triangle').value;
    var square = document.getElementById('square').value;
    var pi= parseFloat(document.getElementById('PI').value); // Parse pi as float
    if (triangle == "" || square == "" || pi == "") {
        alert("Please enter all values");
        return;
    }
    triangle = parseFloat(triangle);
    square = parseFloat(square);
    var result = ((triangle - square) / pi) * 100;
    document.getElementById('result').innerHTML = 'Result: ' + result.toFixed(2) + '%';

    var performance = '';
    if (result === 100) {
        performance = 'Upgrading';
    } else if (result >= 50) {
        performance = 'Achieving';
    } else if (result >= 25) {
        performance = 'Advancing';
    } else if (result >= 0 ) {
        performance = 'Activating';
    } else if (result < 0 && result >= -25) { // Changed pi to result
        performance = 'Exploring';
    } else if (result < -25 && result >=-50) { // Changed pi to result
        performance = 'Developing';
    }
    else if (result >= -100) {
        performance = 'Elementary';
    }
    document.getElementById('performance').innerHTML = 'Level of Performance: ' + performance;

    var performanceLevels = ['Elementary', 'Developing', 'Exploring', 'Activating', 'Advancing', 'Achieving', 'Upgrading'];
    var performanceIndex = performanceLevels.indexOf(performance);

    for (var i = 1; i <= 7; i++) {
        var cell = document.getElementById('cell' + i);
        if (i <= performanceIndex + 1) {
            cell.classList.add('bg-blue-500'); // Add dark color
        } else {
            cell.classList.remove('bg-blue-500'); // Remove dark color
        }
    }
}

function resetForm() {
    document.getElementById('triangle').value = '';
    document.getElementById('square').value = '';
    document.getElementById('PI').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('performance').innerHTML = '';
    // Reset the cells in the table
    for (let i = 1; i <= 7; i++) {
        document.getElementById('cell' + i).innerHTML = '';
    }
}

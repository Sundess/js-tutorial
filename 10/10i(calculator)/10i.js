let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
    calculation += value;

    // Display the calculation on the page
    // instead of console.log
    displayCalculation();

    localStorage.setItem('calculation', calculation);
}

function calculate() {

    // Note: eval() takes a string and runs it as code.
    // Avoid using eval() in real world projects since
    // it can potentially be given harmful code to run.
    // Only use eval() for learning purposes.
    calculation = eval(calculation);

    // Display the calculation on the page
    // instead of console.log
    displayCalculation();

    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.js-calculation')
        .innerHTML = calculation;
}

function clearScreen() {
    console.log('Here');
    calculation = '';

    // Display the calculation on the page
    // instead of console.log
    displayCalculation();

    localStorage.setItem('calculation', calculation);
}
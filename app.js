let countElement = document.getElementById("count");
let previousElements = document.getElementById("previous");
let totalPeople = document.getElementById("total-people-count");
let count = 0;
let numOfTotalPeople = 0;

function increment() {
    count += 1;
    countElement.textContent = count;
    total();
}

function total() {
    numOfTotalPeople++;
    totalPeople.textContent = numOfTotalPeople;
}

function save() {
    previousElements.textContent += "-" + count;
    countElement.textContent = 0;
    count = 0;
}
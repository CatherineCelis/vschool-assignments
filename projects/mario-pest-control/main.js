document.badCost.addEventListener("submit", findPayoutAmount);

function findPayoutAmount(event) {
    event.preventDefault();
    var g = document.getElementById("gamount").valueAsNumber;
    var b = document.getElementById("bamount").valueAsNumber;
    var c = document.getElementById("camount").valueAsNumber;
    var t = document.getElementById("payoutTotal");
    answer = ((g * 5) + (b * 7) + (c * 11));
    t.innerHTML = answer;
}
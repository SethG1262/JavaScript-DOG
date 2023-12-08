/*Seth Garciano */
/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
document.addEventListener("DOMContentLoaded", function () {
    var dailyRate = 35;
    var dayCounter = 0;
    const Days = document.querySelectorAll('.day-selector li');
    const full = document.getElementById('full');
    const half = document.getElementById('half');
    const clear = document.getElementById('clear-button');
    const calculatedCostElement = document.getElementById('calculated-cost');

    /********* colour change days of week *********/
    // when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
    // added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
    function DayCounter(day) {
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked');
            dayCounter++;
        } else {
            day.classList.remove('clicked');
            dayCounter--;
        }
        calculatedCost();
    }

    Days.forEach(function (day) {
        day.addEventListener('click', function () {
            DayCounter(day);
        });
    });

    /********* clear days *********/
    // when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
    clear.addEventListener('click', function () {
        Days.forEach(function (day) {
            day.classList.remove('clicked');
        });
        dayCounter = 0;
        calculatedCost();
    });

    /********* change rate *********/
    // when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
    function changeRateHalf() {
        dailyRate = 20;
        half.classList.add('clicked');
        full.classList.remove('clicked');
        calculatedCost();
    }

    half.addEventListener('click', function () {
        changeRateHalf();
    });

    /********* calculate *********/
    // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
    function calculatedCost() {
        const totalCost = dailyRate * dayCounter;
        calculatedCostElement.innerHTML = totalCost;
    }
});

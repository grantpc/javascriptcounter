const counter = document.querySelector('.counter');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const clearBtn = document.querySelector('.clear');

// initialize counter
let counterValue = 0;
counter.innerHTML = counterValue;

// event listeners
increaseBtn.addEventListener('click', () => {
  changeCounter('up');
});
decreaseBtn.addEventListener('click', () => {
  changeCounter('down');
});
clearBtn.addEventListener('click', () => {
  changeCounter('clear');
});

// functions
// change counter value
function changeCounter(direction) {
  if (direction === 'up') {
    counterValue++;
    counter.innerHTML = counterValue;
  } else if (direction === 'down') {
    counterValue--;
    counter.innerHTML = counterValue;
  } else if (direction === 'clear') {
    counterValue = 0;
    counter.innerHTML = counterValue;
  }
  counterColorCheck();
}

// check for value, change counter color
function counterColorCheck() {
  if (counterValue > 0) counter.style.color = 'green';
  if (counterValue === 0) counter.style.color = 'black';
  if (counterValue < 0) counter.style.color = 'red';
}

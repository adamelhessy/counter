var result = document.getElementById("result");

function numcolor() {
  var value = +result.textContent;
  if (value > 0) {
    result.style.color = "#3B6E7D";
  } else result.style.color = "#a36854";
}
numcolor();

function increment() {
  var value = +result.textContent;
  value++;
  result.textContent = value;
  numcolor();
}

function decrement() {
  var value = +result.textContent;
  if (value > 0) {
    value--;
    result.textContent = value;
  }
  numcolor();
}

function reset() {
  result.textContent = 0;
  numcolor();
}

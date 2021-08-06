var win;
var timerTimeout = window.setTimeout(function () {
  win = open("timeout.html", "_self", "width: 100%", "height: 100%");
}, 60000);

var numberInput = document.getElementById("timeout");
var numberInputval = parseInt(numberInput.value);
var usedValue = `${numberInputval}000`;
var usedValueint = parseInt(usedValue);
function changeTimeout() {
  numberInput = document.getElementById("timeout");
  numberInputval = parseInt(numberInput.value);
  usedValue = `${numberInputval}000`;
  usedValueint = parseInt(usedValue);
  clearTimeout(timerTimeout);
  timerTimeout = window.setTimeout(function () {
    win = open("timeout.html", "_self", "width: 100%", "height: 100%");
  }, usedValueint);
  window.onmousemove = function resetTimeout() {
    clearTimeout(timerTimeout);
    timerTimeout = window.setTimeout(function () {
      win = open("timeout.html", "_self", "width: 100%", "height: 100%");
    }, usedValueint);
  };
  console.log(usedValue);
}

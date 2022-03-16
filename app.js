function myFunction(size, color1, color2) {
  document.getElementById("result").value = size;
}
function priColor(color1) {
  document.getElementById("result").value = "S" + color1;
}

function secColor(color2) {
  document.getElementById("result").value = "SBE" + color2;
}

function myFunction() {
  var copyText = document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

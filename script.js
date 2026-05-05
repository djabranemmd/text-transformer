function getInputText() {
  return document.getElementById("inputText").value;
}

function setResult(text) {
  document.getElementById("resultText").innerText = text;
}

// 1. Uppercase
function toUpperCaseText() {
  let text = getInputText();
  let result = text.toUpperCase();
  setResult(result);
}

// 2. Lowercase
function toLowerCaseText() {
  let text = getInputText();
  let result = text.toLowerCase();
  setResult(result);
}

// 3. Reverse text
function reverseText() {
  let text = getInputText();
  let result = text.split("").reverse().join("");
  setResult(result);
}

// 4. Remove spaces
function removeSpaces() {
  let text = getInputText();
  let result = text.replace(/\s/g, "");
  setResult(result);
}

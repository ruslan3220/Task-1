//  1-Task
var sampleText =
  "JavaScript is a must-know programming language for a modern developer";

function modifyText(text) {
  // Swap words
  var newArr = text.split(" ");
  var swapWord = newArr.reverse();
  var stringWord = swapWord.toString();
  var newWord = stringWord.replaceAll(",", " ");
  // Opposite words
  var newArray = text.split("");
  var oppositeWord = newArray.reverse();
  var strWord = oppositeWord.toString();
  var newOpposite = strWord.replaceAll(",", "");
  // Answer
  return `
  result1: ${newWord},
  result2: ${newOpposite}`;
}
console.log(modifyText(sampleText));

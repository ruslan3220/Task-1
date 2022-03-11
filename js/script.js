//  1-Task
var sampleText =
  "JavaScript is a must-know programming language for a modern developer";

function modifyText(text) {
  // Swap words
  var newBut = text.split(" ");
  var book = newBut.reverse();
  var shelf = book.toString();
  var hobbi = shelf.replaceAll(",", " ");
  // Opposite words
  var look = text.split("");
  var like = look.reverse();
  var fixed = like.toString();
  var food = fixed.replaceAll(",", "");
  // Answer
  return `
  result1: ${hobbi},
  result2: ${food}`;
}
console.log(modifyText(sampleText));

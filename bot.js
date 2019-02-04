//Gets the words from 10fastfingers.com, adds 100ms delay,
//pulls the data from words array and creates custom keyup
//event on 32 (spacebar) to submit the word and move on.
let wordsIndex = 0;
const typeDelay = 110;
function type() {
  let toType = document.querySelector("#row1").children
  if (toType[wordsIndex]) {
    document.querySelector('#inputfield').value = toType[wordsIndex].textContent + ' ';
    let keyup = new CustomEvent('keyup', { bubbles: true, cancelable: true });
    keyup.which = 32;
    document.querySelector('#inputfield').dispatchEvent(keyup)
    wordsIndex++;
    setTimeout('type()', typeDelay);
  }
  if (wordsIndex === words.length) console.log(`Finished ${wordsIndex} words.`)
}
type();
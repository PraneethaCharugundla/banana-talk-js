var btntranslate = document.querySelector("#btn-translate")

var txtInput =document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output")

console.log(outputDiv);
function clickHandler() {
  outputDiv.innerText = "asdhgd" + txtInput.value 
};

btntranslate.addEventListener("click",clickHandler)






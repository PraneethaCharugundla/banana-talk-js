var btntranslate = document.querySelector("#btn-translate")

var txtInput =document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");


//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server ! try after sometime")
}

   
function clickHandler() {
 var inputText = txtInput.value; //taking input

 fetch(getTranslationURL(inputText))
   .then(reponse => reponse.json())
   .then(json => {
var tarnslatedText = json.contents.translated;
    outputDiv.innerText = tarnslatedText; //output
   })
    .catch(errorHandler)

};

btntranslate.addEventListener("click",clickHandler)






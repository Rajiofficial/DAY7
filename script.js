var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function loadJSON(path, success, error) {
 var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
     if (xhr.status === 200) {
       success(JSON.parse(xhr.responseText));
     }
     else {
       error(xhr);
     }
   }a
 };
 xhr.open('GET', path, true);
 xhr.send();
}
loadJSON("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json", myData,'jsonp');

function myData(Data){
  console.log(Data)
}



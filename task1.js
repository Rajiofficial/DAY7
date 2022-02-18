const countrie="uk"
let countries=[
    {
        city:"singapore",
        code:"uk",
        language:"english",
    },
    {
        city:"australia",
        code:"uk",
        language:"english",
    },
    {
        city:"africa",
        code:"us",
        language:"english",
    }
]
let a=countries.filter(coun=>coun.code==countrie)
console.log(a)
 

//##############################################3

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
     }
   };
   xhr.open('GET', path, true);
   xhr.send();
  }
  loadJSON("https://restcountries.com/v2/all", myData,'jsonp');
  
  function myData(Data){
  
   // Output only the details on the first post
   console.log(Data);
  Data.forEach((d) =>{
   console.log(`${d.name} ${d.capital} ${d.flag}`)  
  });
  }
//********************************************** */
  
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
   }
 };
 xhr.open('GET', path, true);
 xhr.send();
}

loadJSON("https://restcountries.com/v2/all", myData,'jsonp');


function myData(Data){
console.log("raji")


 // Output only the details on the first post
 console.log(Data);

 var a=Data.filter(coun=>coun.population<200000)
 console.log(a)
}

//***************************************8 *

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
   }
 };
 xhr.open('GET', path, true);
 xhr.send();
}

loadJSON("https://restcountries.com/v2/all", myData,'jsonp');


function myData(Data){
console.log("raji")


 // Output only the details on the first post
 console.log(Data);

 var a=Data.filter(coun=>coun.region="Asia")
 console.log(a)
}




//******************************************** *


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
loadJSON("https://restcountries.com/v2/all", myData,'jsonp');

function myData(Data){
  let c=Data.reduce((a,population)=>(a+population))
  console.log(c)
}




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

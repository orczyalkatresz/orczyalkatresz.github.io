<<<<<<< HEAD
/* window.setTimeout(function () {
    window.location.reload();
  }, 3000); */

/*   $(document).ready(function() {
    $('#header_to_include').load('../../header.html');
}); */
var d = new Date();
var start = d.getTime();
var logging = true;
var header = document.getElementById("header_to_include");
var mainContextText;
var mainContext;

window.onload = async function(){
getHTMLfromFile("../../header.html", "header_to_include");
getHTMLfromFile("../../footer.html", "footer_to_include");

// var mainContextText = getJSON("../../data/proba.json");
// logger(mainContextText);
// mainContext = getFile("../../data/proba.json");
// logger("peti: " + mainContext.cegnev);
//  document.getElementById("#peti").innerText = mainContext.cegnev;

}

function getFile(fileName){
  $.getJSON("demo_ajax_json.js", function(result){
    return result.cegnev;
  }
}

/* kommentek eltávolítása */
$('*').contents().each(function() {
  if(this.nodeType === Node.COMMENT_NODE) {
    $(this).remove();
  }
});


function getHTMLfromFileOld (htmlPath, targetID){

  fetch(htmlPath)
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById(targetID).innerHTML = data;
  });
  logger(htmlPath + " betöltve a " + targetID + " ID-jű element-be" );
}

function getHTMLfromFile (htmlPath, targetID){ 	
  $("#" +  targetID ).load( htmlPath );
}

function changeText(targetID, innerText){
  document.getElementById(targetID).innerText = innerText;
}

function getJSON(filePath){
  var xmlhttp = new XMLHttpRequest();
  var responseText;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      responseText = this.responseText;
      var myObj = JSON.parse(responseText);
      // logger(this.responseText);
       document.getElementById("telefon").innerHTML = myObj.telefon_szerviz;
       changeText("ugyfelszolg_elerhetoseg" , myObj.uzletek.baross.nyt_short);
      return  this.responseText;
    }
  };
  xmlhttp.open("GET", filePath, true);
  xmlhttp.send();
  
}


function logger(text){
  if (logging){
    console.log(text);
  }
}

var end = d.getTime();
var duration = end - start;
=======
/* window.setTimeout(function () {
    window.location.reload();
  }, 3000); */

/*   $(document).ready(function() {
    $('#header_to_include').load('../../header.html');
}); */
var d = new Date();
var start = d.getTime();
var logging = true;
var header = document.getElementById("header_to_include");
var mainContextText;
var mainContext;

window.onload = async function(){
getHTMLfromFile("../../header.html", "header_to_include");
getHTMLfromFile("../../footer.html", "footer_to_include");

// var mainContextText = getJSON("../../data/proba.json");
// logger(mainContextText);
// mainContext = getFile("../../data/proba.json");
// logger("peti: " + mainContext.cegnev);
//  document.getElementById("#peti").innerText = mainContext.cegnev;

}

function getFile(fileName){
  $.getJSON("demo_ajax_json.js", function(result){
    return result.cegnev;
  }
}

/* kommentek eltávolítása */
$('*').contents().each(function() {
  if(this.nodeType === Node.COMMENT_NODE) {
    $(this).remove();
  }
});


function getHTMLfromFileOld (htmlPath, targetID){

  fetch(htmlPath)
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById(targetID).innerHTML = data;
  });
  logger(htmlPath + " betöltve a " + targetID + " ID-jű element-be" );
}

function getHTMLfromFile (htmlPath, targetID){ 	
  $("#" +  targetID ).load( htmlPath );
}

function changeText(targetID, innerText){
  document.getElementById(targetID).innerText = innerText;
}

function getJSON(filePath){
  var xmlhttp = new XMLHttpRequest();
  var responseText;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      responseText = this.responseText;
      var myObj = JSON.parse(responseText);
      // logger(this.responseText);
       document.getElementById("telefon").innerHTML = myObj.telefon_szerviz;
       changeText("ugyfelszolg_elerhetoseg" , myObj.uzletek.baross.nyt_short);
      return  this.responseText;
    }
  };
  xmlhttp.open("GET", filePath, true);
  xmlhttp.send();
  
}


function logger(text){
  if (logging){
    console.log(text);
  }
}

var end = d.getTime();
var duration = end - start;
>>>>>>> 853e96a42b06848f3724d0616b4e61f4529484dc
logger("script lefutott: " + duration + " ms alatt");
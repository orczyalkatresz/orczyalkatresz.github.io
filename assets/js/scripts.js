var d = new Date();
var start = d.getTime();
var logging = true;
var header = document.getElementById("header_to_include");
var aszfDoc = "aszf.html";
var adatKezelesDoc = "adatkezeles.html";
var arakDoc = "arak.html";
var lastScrollTop = 0;

$(document).ready(function(){


  init();
  markaSlider();
  var d2 = new Date();
  var end = d2.getTime();
  var duration = end - start;
  logger("script lefutott: " + duration + " ms alatt");
  });

function cookieCheck(){
    var cookie = getCookie("accepted_cookie");
   if(cookie){
      hideElement("#cookie_area");
   }
   else{
      showElement("#cookie_area");
   }
    
}
function markaSlider(){
  // Kineto.create('#marka_slider_container');
  Kineto.create('#marka_slider_container',{

    // navigation arrows
    arrows: false,
    arrowsInto: null,
    arrowTemplate: null,
  
    // slide counter
    count: false,
    countInto: null,
    countTemplate: null,
  
    // pagination bullets
    pagination: false,
    paginationInto: null,
    paginationTemplate: null,
    speed: 600,
    loop: true,
    stream: true, // enable autoplay
    streamEvery: 1500,
    streamRewind: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    
  });
}
function accept_Cookies(){
  setCookie("accepted_cookie", "true", 365);
  hideElement("#cookie_area","normal");
}
function getHTMLfromFile (htmlPath, targetID, callBack){ 	
  $("#" +  targetID ).load(htmlPath, callBack);
}

function getDoc(path, targetSelector){
  logger(path + " betöltbve ide " + targetSelector )
  $(targetSelector).load(path);
}
function init(){
  $("#mobile_menu_button").click(toggleMobileMenu);
  $("#aszf_button").click(toggleASZF);
  $("#adatkezeles_button").click(toggleAdatkezeles);
  $("#arak_button").click(toggleArak);
  
 
  
  
  
  if ($(window).width() <= 768){
    hideElement(".mobile_menu");
    showElement("#mobile_menu_button");
  }
  if ($(window).width() >= 768){
    showElement(".mobile_menu");
    hideElement("#mobile_menu_button");
  }
  cookieCheck();
  removeComments();
  logger("init lefutott");
}

function toggleElement(selector, speed = "fast"){
  $(selector).slideToggle(speed);
  logger(selector + " kapcsolva");
}

function toggleArak(){
  toggleElement("#arak_content", "fast");
  
}
function toggleASZF(){
  toggleElement("#aszf_content", "fast");
}

function toggleAdatkezeles(){
  toggleElement("#adatkezeles_content", "fast");
}

function toggleMobileMenu(){
  toggleElement(".mobile_menu","fast");
}
function toggleHeader(){
  toggleElement("#header", "normal");
}

function hideElement(selector, speed = null){
  $(selector).hide(speed);
  logger( selector + " elrejtve");
}
function showElement(selector, speed = null){
  $(selector).show(speed);
  logger( selector + " megjelenítve");
}
function masonryArTablak(){
  $('#artabla_container').masonry({
      // options,
      itemSelector: '#artabla_container > div',
    //  columnWidth: 200
  });
  logger("masonryArTablak lefutott");
}
function masonryArInfok(){
  $('#arinfo_container').masonry({
     // options
    itemSelector: '#arinfo_container > div',
      // columnWidth: 50%
  });
}
/* kommentek eltávolítása */
function removeComments(){
  $('*').contents().each(function() {
    if(this.nodeType === Node.COMMENT_NODE) {
      $(this).remove();
    }
  });
}

function logger(text){
  if (logging){
    console.log(text);
  }
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

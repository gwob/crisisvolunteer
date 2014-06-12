var email = document.getElementsByClassName('email'); 
var url = 'http://backpack.openbadges.org/displayer/convert/' + email; 
var oReq = new XMLHttpRequest();


oReq.onload = function(e) {
  var arraybuffer = oReq.response; // not responseText
  /* ... */
}
oReq.responseType = "arraybuffer";
oReq.open("GET", url, true);
oReq.send();
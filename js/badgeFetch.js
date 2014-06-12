
function getID() {
var email = document.getElementsByClassName('email').value; 
var url = 'http://beta.openbadges.org/displayer/convert/' + email; 
/*var oReq = new XMLHttpRequest();


oReq.onreadystatechange = function() {
    alert(oReq.responseText);
        
    }
	

//oReq.onload = function(e) {
// var arraybuffer = oReq.response; // not responseText
// 
} 

oReq.responseType = "arraybuffer";

oReq.open("GET", url, true);
oReq.send();

*/
$.post(url, function(responseText) {
    alert(responseText);
});
}

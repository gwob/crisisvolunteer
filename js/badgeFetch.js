
function getID() {
var email = document.getElementsByClassName('email').value; 
var url = 'http://beta.openbadges.org/displayer/convert/email' + email; 
var oReq = new XMLHttpRequest();


oReq.onreadystatechange = function() {
    alert(oReq.responseText);
        
    }
	// Need to implement formData! Will not work.

oReq.responseType = "json";
oReq.open("POST", url, true);
oReq.send();

}

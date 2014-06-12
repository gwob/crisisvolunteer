
function getID() {
var email = document.getElementById('email').value; 
var url = 'http://beta.openbadges.org/displayer/convert/email'; 
var oReq = new XMLHttpRequest();

var formData = new formData();
var blob = new Blob([email], { type: "text/xml"});
formData.append("email", blob);

oReq.onreadystatechange = function() {
    alert(oReq.responseText);
        
    }
	// Need to implement formData! Will not work.

oReq.responseType = "json";
oReq.open("POST", url, true);
oReq.send(formData);

}

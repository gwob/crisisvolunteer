
function getID() {
	var email = document.getElementById('email').value; 
	var url = 'http://backpack.openbadges.org/displayer/convert/email'; 
	var oReq = new XMLHttpRequest();

	var formData = new FormData();
	formData.append("email", "c1cochran@yahoo.com");
	//var blob = new Blob(email, { type: "text/plain"});
	//formData.append("email", blob);
	//var varemail = "email=" + email;
	

	/*oReq.onreadystatechange = function() {
		alert(oReq.responseText);
			
		 */
		// Need to implement formData! Will not work.

	oReq.responseType = "application/json";
	oReq.contentType = "application/json";
	oReq.open("POST", url);
	oReq.send(formData);

}

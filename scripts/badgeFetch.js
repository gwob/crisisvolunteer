
function getID() {
	/*var email = document.getElementById('email').value; 
	var url = 'http://backpack.openbadges.org/displayer/convert/email'; 
	var oReq = new XMLHttpRequest();

	var formData = new FormData();
	formData.append("email", "c1cochran@yahoo.com");
	//var blob = new Blob(email, { type: "text/plain"});
	//formData.append("email", blob);
	//var varemail = "email=" + email;
	

	//oReq.onreadystatechange = function() {
	//	alert(oReq.responseText);
			
		 
		// Need to implement formData! Will not work.

	oReq.responseType = "application/json";
	oReq.contentType = "application/json";
	oReq.open("POST", url);
	oReq.send(formData);
*/

//$.get( "http://backpack.openbadges.org/displayer/convert/email", function( response ) {
//    console.log( response ); // server response
//});

/*
	$.ajax({
		// the URL for the request
		url: "/backpack.openbadges.org/displayer/convert/email",
	 
		// the data to send (will be converted to a query string)
		data: {
			email: "c1cochran@yahoo.com"
		},
	 
		// whether this is a POST or GET request
		type: "POST",
		
		contentType: "application/json",
		
		// the type of data we expect back
		dataType : "application/json",
	 
		// code to run if the request succeeds;
		// the response is passed to the function
		success: function( json ) {
			//$( "<h1/>" ).text( json.title ).appendTo( "body" );
			//$( "<div class=\"content\"/>").html( json.html ).appendTo( "body" );
			console.log(response);
		},
	 
		// code to run if the request fails; the raw request and
		// status codes are passed to the function
		error: function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			console.dir( xhr );
		},
	 
		// code to run regardless of success or failure
		complete: function( xhr, status ) {
			alert( "The request is complete!" );
		}
	});
*/

$.ajax({ 
	url: "scripts/getID.php" ,

	type: "GET",
	
	xhrFields: {
      withCredentials: true
   }
   
});

}

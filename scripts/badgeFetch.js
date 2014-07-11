$(function(){
   $("#submitBtn").click(function(e){
       e.preventDefault();
       var mail = $('#mail').val();
      
      $.ajax({
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'JSON',
        url: 'scripts/test.php',
        data: { 
            mail: mail 
        },
        success: function(data){
        var jdata = jQuery.parseJSON(data);
            alert("success! X: " + data);
        }
        
      });
   });
});

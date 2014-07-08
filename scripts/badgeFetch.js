$(function(){
   $("#submitBtn").click(function(){
      var run = $.ajax({
        type: "POST",
        url: "scripts/test.php",
        data: { mail: $('#mail').val()
        }
        });
       
       run.done(function(msg) {
           
       });
       run.fail(function(jqXHR, textStatus) {
           alert( "Request failed: " + textStatus );
       });
   });
});

console.log(msg);
//Pulls string from the email field and sends it to the PHP script
$(function(){
   $("#submitBtn").click(function(e){
       e.preventDefault();
       var mail = $('#mail').val();
      
      $.ajax({
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'JSON',
        url: 'scripts/idScript.php',
        data: { 
            mail: mail 
        },
        //Saves JSON user data in localStorage
        success: function(data){
            var jdata = jQuery.parseJSON(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            
        }
      }); 
   });
});

/*
$(function(){
    $("#refreshBtn").click(function(e){
        e.preventDefault(); 
        var badgeInfo = 
        
        $.ajax({
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'JSON',
            url: 'scripts/badgesScript.php',
            data: { 
                group: JSON.parse(localStorage.getItem('userInfo'));
            },
            success: function(data){
                var jdata = jQuery.parseJSON(data);
                localStorage.setItem('badgeInfo', JSON.stringify(data));

            }
        }); 
    
    });
});
*/
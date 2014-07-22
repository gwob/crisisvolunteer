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
            //var jdata = jQuery.parseJSON(data);
            localStorage.setItem('userId', data['user_id']);
            localStorage.setItem('groupOne', data[0]);
            console.log(localStorage.getItem('userId'));
            
        }
      }); 
   });
});


$(function(){
    $("#refreshBtn").click(function(e){
        e.preventDefault(); 
        var badgeInfo = JSON.parse(localStorage.getItem('userInfo'));
        
        $.ajax({
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'JSON',
            url: 'scripts/badgesScript.php',
            data: { 
                groups: badgeInfo
            },
            success: function(data){
                var jdata = jQuery.parseJSON(data);
                localStorage.setItem('badgeInfo', JSON.stringify(data));

            }
        }); 
    });
});

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

//Retrieves the first badge in the first group of badges
$(function(){
    $("#refreshBtn").click(function(j){
        j.preventDefault(); 
        var groupInfo = localStorage.getItem('groupOne');
        var userId = localStorage.getItem('userId');
        
        $.ajax({
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'text',
            url: 'scripts/badgesScript.php',
            data: { 
                user: userId,
                group: groupInfo
            },
            success: function(data){
                var jdata = jQuery.parseJSON(data);
                //localStorage.setItem('badgeInfo', JSON.stringify(data));
                var image = jdata.badges[3].assertion.badge.image;
                console.log(image);
                $("#badgeContainer").html( "<img src='" + image + "'>" + "</img>");
                
            }
        }); 
    });
});
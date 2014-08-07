//Pulls string from the email field and sends it to the PHP script
$(function(){
   $("#submitBtn").click(function(e){
       e.preventDefault();
       
       $('div.msgDiv').html("<p class='saveAnnounce'> Data saved! Please press 'Refresh' on the Badges page to view your badges. </p>");
       if(e){
           localStorage.setItem('username', $('#username').val());
           localStorage.setItem('firstname', $('#firstname').val());
           localStorage.setItem('lastname', $('#lastname').val());
           localStorage.setItem('mail', $('#mail').val());
           localStorage.setItem('skills', $('#skills').val());
       }
       
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
                var image = jdata.badges[0].assertion.badge.image;
                console.log(image);
                $("#badgeContainer").html( "<img src='" + image + "'>" + "</img>");
                
            }
        }); 
    });
});

$(document).ready(function(){
    $('#username').val(localStorage.getItem('username'));
    $('#firstname').val(localStorage.getItem('firstname'));
    $('#lastname').val(localStorage.getItem('lastname'));
    $('#mail').val(localStorage.getItem('mail'));
    $('#skills').val(localStorage.getItem('skills'));


});
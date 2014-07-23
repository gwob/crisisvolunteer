$(function(){
    $("#refreshBtn").click(function(j){
        j.preventDefault(); 
        var groupInfo = localStorage.getItem('groupOne');
        
        $.ajax({
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'text',
            url: 'scripts/badgesScript.php',
            data: { 
                group: groupInfo
            },
            success: function(data){
                var jdata = jQuery.parseJSON(data);
                //localStorage.setItem('badgeInfo', JSON.stringify(data));
                //$( "#badgeContainer" ).append( "<div ></div>" );
                var image = jdata.badges[0].assertion.badge.image;
                console.log(image);
                $( "#badgeContainer" ).html( "<img src='" + image + "'>" + "</img>");
                
            }
        }); 
    });
});
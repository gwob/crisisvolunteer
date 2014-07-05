
<?php

function get_badges(){
    $id_url = 'http://backpack.openbadges.org/displayer/convert/email';
    $mail = 'c1cochran@yahoo.com';
    $email = 'email='.$mail;
    
    $curl = curl_init();
    curl_setopt ($curl, CURLOPT_URL, $id_url);
    curl_setopt ($curl, CURLOPT_POST, true);
    curl_setopt ($curl, CURLOPT_POSTFIELDS, $email);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec ($curl);
    curl_close ($curl);
    
    $user_id = json_decode($result)->userId;
    //$user_id = $user_data['user_id'];
    print $result;
    print $user_id;
}
$run = get_badges();

?>

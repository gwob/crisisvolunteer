<?php
    
    if(isset($_REQUEST['mail']))
    {
        
        $id_url = 'http://backpack.openbadges.org/displayer/convert/email';
        $mail = $_REQUEST['mail'];
        $email = 'email='.$mail;

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $id_url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $email);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($curl);
        curl_close ($curl);

        $user_id = json_decode($result)->userId;
        $test_var = json_decode($result);
        echo $result;
        //echo $test_var;
        //echo $user_id;
    
    }
//echo var_dump($_POST);
//echo $mail;

?>

<?php
    if($_POST['mail']):
        $id_url = 'http://backpack.openbadges.org/displayer/convert/email';
        $mail = $_POST['mail'];
        $email = 'email='.$mail;

        $curl = curl_init();
        curl_setopt ($curl, CURLOPT_URL, $id_url);
        curl_setopt ($curl, CURLOPT_POST, true);
        curl_setopt ($curl, CURLOPT_POSTFIELDS, $email);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec ($curl);
        curl_close ($curl);

        $user_id = json_decode($result)->userId;

        echo $result;
        echo $user_id;
    endif;


echo "I got your value! $mail";

?>

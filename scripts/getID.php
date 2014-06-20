/*
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://backpack.openbadges.org/displayer/convert/email',
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => array(
        email => 'c1cochran@yahoo.com',
    )
));

$resp = curl_exec($curl);

curl_close($curl);

*/

//New section, untested
<?php
$data = array("email" => "c1cochran@yahoo.com");                                                                    
$data_string = json_encode($data);                                                                                   
 
$ch = curl_init();                                                                      
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    'Content-Type: application/json',                                                                                
    'Content-Length: ' . strlen($data_string))                                                                       
);                                                                                                                   
 
$result = curl_exec($ch);
?>
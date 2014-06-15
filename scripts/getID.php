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
/* 
<?php
function get_badges($mail = 'c1cochran@yahoo.com'){
	
  // GET User ID from user mail
	$id_url = 'http://backpack.openbadges.org/displayer/convert/email';

	$badges_info = array();
	if (isset($mail)) {
		$email = 'email='.$mail;
		$c = curl_init ($id_url);
		curl_setopt ($c, CURLOPT_POST, true);
		curl_setopt ($c, CURLOPT_POSTFIELDS, $email);
		curl_setopt ($c, CURLOPT_RETURNTRANSFER, true);
		$badge_user = curl_exec ($c);
		curl_close ($c);

		$user_id = json_decode($badge_user)->userId;
	
		$badges_info['user_id'] = $user_id;

	// Retrieve badges
	
		$badges_url = 'http://backpack.openbadges.org/displayer/'.$user_id.'/groups.json';
		$c = curl_init ($badges_url);
		curl_setopt ($c, CURLOPT_RETURNTRANSFER, true);
		$returned_groups = curl_exec($c);
		curl_close ($c);
	
		$badge_groups = json_decode($returned_groups)->groups;
	
		foreach ($badge_groups as $group) {
			$badges_info[] = $group->groupId;
		}
	}
		
	return $badges_info;
}

?> 
*/


<?php

$mail = 'c1cochran@yahoo.com';
$id_url = 'http://backpack.openbadges.org/displayer/convert/email';
$email = 'email='.$mail;

$curl = curl_init();
curl_setopt_array(
    $curl,
    array(
        CURLOPT_URL => $id_url,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $email,
        CURLOPT_RETURNTRANSFER => true
    )
);

$badge_user = curl_exec($curl);
curl_close($curl);

$user_id = json_decode($badge_user)->userId;
print_r($badge_user);

?>
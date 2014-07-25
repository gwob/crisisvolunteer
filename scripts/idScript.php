<?php
    
    if(isset($_REQUEST['mail']))
    {
        //Obtain User ID
        $badges_info = array();
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
        $badges_info['user_id'] = $user_id;
        
        //Retrieve badges
        $badges_url = 'http://backpack.openbadges.org/displayer/'.$user_id.'/groups.json';
		$curl = curl_init($badges_url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		$returned_groups = curl_exec($curl);
		curl_close($curl);
	
		$badge_groups = json_decode($returned_groups)->groups;
        foreach ($badge_groups as $group) 
        {
			$badges_info[] = $group->groupId;
		}
        
        $json_badges = json_encode($badges_info);

    }

//echo $returned_groups;
//echo $returned_group;
//echo $badges_info;
echo $json_badges;

?>

<?php
    
    if(isset($_REQUEST['groups']))
    {
        /*
        //Obtain User ID
        $badges_info = array();
        $id_url = 'http://backpack.openbadges.org/displayer/convert/email';
        $mail = $_REQUEST['groups'];
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
        //echo $result;
        */
        
        //Retrieve badges
        $group_url = 'http://backpack.openbadges.org/displayer/'.$user_id.'/group/'.$groupnumber;
		$curl = curl_init($group_url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		$returned_group = curl_exec($curl);
		curl_close($curl);
	
		$badge_group = json_decode($returned_group)->groupId;
	
		//foreach ($badge_groups as $group) {
			//$badges_info[] = $group->groupId;
		}
    }

echo $returned_groups;

?>
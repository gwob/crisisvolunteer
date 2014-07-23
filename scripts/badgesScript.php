<?php
    
    if(isset($_POST['group']))
    {
        //Retrieve badge information
        $group_id= $_POST['group'];
        $user_id = 99998;
        $group_url = 'http://backpack.openbadges.org/displayer/99998/group/31425.json';
        $curl = curl_init($group_url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $returned_group = curl_exec($curl);
        curl_close($curl);

        //$badge_group = json_decode($returned_group)->groupId;

        //foreach ($badge_groups as $group) {
            //$badges_info[] = $group->groupId;
       
    }
    
echo $returned_group;

?>
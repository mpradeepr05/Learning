<?php 

    $array = json_decode(file_get_contents('php://input'), true);
    $name = $array['name'];
    $email = $array['email'];
    $message = $array['message'];

    if (($name=="")||($email=="")||($message=="")) 
        { 
        printf("0"); 
        } 
    else{         
        $from="From: $name<$email>\r\nReturn-path: $email"; 
        $subject="Message sent using your contact form"; 
        mail("mpradeepr05@gmail.com", $subject, $message, $from); 

        } 

?> 
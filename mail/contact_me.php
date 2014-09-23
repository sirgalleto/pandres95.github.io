<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'Pablo Dorado <pandres95@boolinc.co>'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";

$email_body = "You have received a new message from your website contact form.\n\n" .
            "Here are the details:\n\n" .
            "Name: $name\n\n" .
            "Email: $email_address\n\n" .
            "Phone: $phone\n\n" .
            "Message:\n$message";

$headers = "From: Pablo Dorado <pandres95@boolinc.co>\r\n";
$headers .= "Reply-To: $email_address";

$var = mail($to,$email_subject,$email_body,$headers);

print(json_encode($var));
return true;

?>

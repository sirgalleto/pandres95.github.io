<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) ||
   empty($_POST['message'])	|| !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {

       echo "No arguments Provided!";
       return false;

}

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Create the email and send the message
$me = 'Pablo Dorado <pandres95@boolinc.co>';
$subject = "Website Contact Form: $name";

$body = "You have received a new message from your website contact form.\n\n" .
        "Here are the details:\n\n" .
        "Name: $name\n\n" .
        "Email: $email_address\n\n" .
        "Phone: $phone\n\n" .
        "Message:\n$message";

$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=iso-8859-1";
$headers[] = "From: Pablo Dorado <pandres95@boolinc.co>";
$headers[] = "Reply-To: {$name} <{$email_address}>";
$headers[] = "Subject: {$subject}";
$headers[] = "X-Mailer: PHP/".phpversion();

$result = new stdClass();
$result->sent = mail($me, $subject, $body, implode('\r\n',$headers));

print(json_encode($result));
return true;

?>

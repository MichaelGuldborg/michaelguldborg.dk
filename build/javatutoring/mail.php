<?php
//To enable error handling
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

$to = "mail@michaelguldborg.dk";
$subject = "mail from: " . $_POST['Name'];
$text = $_POST['Message'] . "\r\n" . "you can get back to me at: " . $_POST['Email'] . " \r\nmr. handsome";

$mail_sent = mail($to,$subject,$text);

echo "Thank you for reaching out <br>";
if($mail_sent) {
	header("location: index.php");
} else {
	echo "Unfortunately your mail was not sent succesfully! <br>
	Please try again or contact me at mail@michaelguldborg.dk instead";
}

?>

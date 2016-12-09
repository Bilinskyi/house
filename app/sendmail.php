<?
if($_SERVER["REQUEST_METHOD"] == "POST")
{
 function send_mail($to, $subject, $message, $headers)
 {

  $phone = $_POST["phone"];
  $email = $_POST["email"];
  $formname = $_POST["formname"];
  $time = $_POST["time"];
  $popup = $_POST["popup"];
  $popmain = $_POST["popmain"];
  $catalog = $_POST["catalog"];

  // $utm_source = $_POST["utm_source"];
  // $utm_medium = $_POST["utm_medium"];
  // $utm_campaign = $_POST["utm_campaign"];
  // $utm_term = $_POST["utm_term"];
  // $utm_content = $_POST["utm_content"];


  
  $to  = "1unitedcrew@gmail.com";  

  if (isset($popup)) {
   $message = "$phone<br>$email<br>$time<br><br>$formname";
 } else if (isset($popmain)) {
  $message = "$phone<br>$email<br><br>$formname";
} else if (isset($catalog)) {
  $message = "$phone<br>$email<br><br>$formname";
} else {
  $message = "$phone<br><br>$formname";
}


$subject = "Заявка с сайта"; 


$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$from = "=?UTF-8?B?".base64_encode("1unitedcrew@gmail.com")."?= <1unitedcrew@gmail.com";
$headers .= "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";

$result = mail($to, $subject, $message, $headers);
} 

{
    // Отправка email
  send_mail($to, $subject, $message, $headers);      
  echo 'true'; 
}

}
?>
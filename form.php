<?php
$errors = '';
$myemail = 'balkonypodwieszane@gmail.com';
if(empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Wszystkie pola są wymagane.";
}
$email_address = $_POST['email'];
$message = $_POST['message'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Nieprawidłowy adres email.";
}

if( empty($errors))
{
$to = $myemail;
$email_subject = "Balkonypodwieszane.pl Nowe zapytanie:";
$email_body = "Otrzymałes nowe zapytanie:".
"Email: $email_address\n Wiadomosc: \n $message";
$headers = "Od: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: index.html');
}
?>
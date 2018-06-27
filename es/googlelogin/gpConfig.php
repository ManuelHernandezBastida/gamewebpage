<?php
session_start();

//Include Google client library 
include_once 'src/Google_Client.php';
include_once 'src/contrib/Google_Oauth2Service.php';

/*
 * Configuration and setup Google API
 */
$clientId = '350158370047-p6f16l8s59uu61uhpbrf64fr5hvs85lc.apps.googleusercontent.com'; //Google client ID
$clientSecret = 'mNdkQGsccuZx99Kmka5UwZFW'; //Google client secret
$redirectURL = 'http://127.0.0.1/game/es/googlelogin'; //Callback URL

//Call Google API
$gClient = new Google_Client();
$gClient->setApplicationName('Login to CodexWorld.com');
$gClient->setClientId($clientId);
$gClient->setClientSecret($clientSecret);
$gClient->setRedirectUri($redirectURL);

$google_oauthV2 = new Google_Oauth2Service($gClient);
?>
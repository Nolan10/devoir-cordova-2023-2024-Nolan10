<?php
header("Access-Control-Allow-Origin: *");
include_once('../DAO/JoueurDAO.php');

$utilisateurDAO = new DAO\JoueurDAO();

$util = json_encode($utilisateurDAO->getTousLesJoueurs());

echo $util;
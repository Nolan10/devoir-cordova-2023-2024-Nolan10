<?php
header("Access-Control-Allow-Origin: *");
include_once('../DAO/JoueurDAO.php');
$utilisateurDAO = new DAO\JoueurDAO();
$util = "";
if (isset($_GET["methode"])){
    if($_GET["methode"] == "lister"){
        $util = json_encode($utilisateurDAO->getTousLesJoueurs());
    }

    elseif($_GET["methode"] == "ajouter" && isset($_GET["nom"]) && isset($_GET["prenom"]) && isset($_GET["club"]) && isset($_GET["nation"])){
        $utilisateurDAO->ajouterJoueur($_GET["nom"], $_GET["prenom"], $_GET["club"], $_GET["nation"]);
    }
}

echo $util;
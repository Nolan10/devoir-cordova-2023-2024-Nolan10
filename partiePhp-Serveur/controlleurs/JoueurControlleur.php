<?php

include_once('../DAO/JoueurDAO.php');

$utilisateurDAO = new DAO\JoueurDAO();

foreach ($utilisateurDAO->getJoueurParId(1) as $joueur){
    echo $joueur->getNomJoueur();
}

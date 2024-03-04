<?php

namespace DAO;
use models;

include_once('../models/Joueur.php');
require_once 'DAO.php';

class JoueurDAO
{
    public function creerJoueur($tmp)
    {

        $joueur = new models\Joueur();

        $joueur->setIdJoueur($tmp['id_joueur']);
        $joueur->setNomJoueur($tmp['nom_joueur']);
        $joueur->setPrenomJoueur($tmp['prenom_joueur']);
        $joueur->setClubJoueur($tmp['club_joueur']);
        $joueur->setNationJoueur($tmp['nation_joueur']);

        return $joueur;
    }

    public function lireRequete($sql, $arguments)
    {
        global $db_name, $user, $pass;

        $bdd = new \PDO("mysql:host=localhost:3306;dbname=$db_name", $user, $pass);
        $rs = $bdd->prepare($sql);
        $rs->execute($arguments);

        $listJoueur = array();
        while ($tmp = $rs->fetch()) {
            $joueur = $this->creerJoueur($tmp);
            array_push($listJoueur, $joueur);
        }
        return $listJoueur;
    }

    public function executerRequete($sql, $arguments)
    {

        global $db_name, $user, $pass;

        $bdd = new \PDO("mysql:host=localhost;dbname=$db_name", $user, $pass);
        $rs = $bdd->prepare($sql);
        $rs->execute($arguments);

    }

    public function getTousLesJoueurs()
    {
        $sql = "SELECT * FROM joueur";
        $argument = array();
        return $this->lireRequete($sql, $argument);
    }

    public function getJoueurParId($id)
    {
        $sql = "SELECT * FROM joueur WHERE id_joueur = ?;";
        $arguments = array();
        array_push($arguments, $id);
        return $this->lireRequete($sql, $arguments);
    }
}
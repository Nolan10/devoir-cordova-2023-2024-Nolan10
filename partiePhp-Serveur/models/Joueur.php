<?php

namespace models;

class Joueur
{
    public $idJoueur;
    public $nomJoueur;
    public $prenomJoueur;
    public $clubJoueur;
    public $nationJoueur;

    public function __construct()
    {

    }

    /**
     * @return mixed
     */
    public function getIdJoueur()
    {
        return $this->idJoueur;
    }

    /**
     * @param mixed $idJoueur
     */
    public function setIdJoueur($idJoueur)
    {
        $this->idJoueur = $idJoueur;
    }

    /**
     * @return mixed
     */
    public function getNomJoueur()
    {
        return $this->nomJoueur;
    }

    /**
     * @param mixed $nomJoueur
     */
    public function setNomJoueur($nomJoueur)
    {
        $this->nomJoueur = $nomJoueur;
    }

    /**
     * @return mixed
     */
    public function getPrenomJoueur()
    {
        return $this->prenomJoueur;
    }

    /**
     * @param mixed $prenomJoueur
     */
    public function setPrenomJoueur($prenomJoueur)
    {
        $this->prenomJoueur = $prenomJoueur;
    }

    /**
     * @return mixed
     */
    public function getClubJoueur()
    {
        return $this->clubJoueur;
    }

    /**
     * @param mixed $clubJoueur
     */
    public function setClubJoueur($clubJoueur)
    {
        $this->clubJoueur = $clubJoueur;
    }

    /**
     * @return mixed
     */
    public function getNationJoueur()
    {
        return $this->nationJoueur;
    }

    /**
     * @param mixed $nationJoueur
     */
    public function setNationJoueur($nationJoueur)
    {
        $this->nationJoueur = $nationJoueur;
    }




}
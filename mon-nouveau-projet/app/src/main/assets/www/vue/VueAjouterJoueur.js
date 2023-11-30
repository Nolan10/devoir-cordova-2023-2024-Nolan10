class VueAjouterJoueur {
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-joueur").innerHTML;
        this.actionAjouterJoueur = null;
    }

    initialiserActionAjouterJoueur(actionAjouterJoueur){
        this.actionAjouterJoueur = actionAjouterJoueur;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();

        let nom = document.getElementById("joueur-nom").value;
        let marque = document.getElementById("joueur-prenom").value;
        let club = document.getElementById("joueur-club").value;
        let nation = document.getElementById("joueur-nation").value;

        this.actionAjouterJoueur(new Joueur(nom, marque, club, nation, null));

    }

}

class VueModifierJoueur{
    constructor(){
        this.html = document.getElementById("html-vue-modifier-joueur").innerHTML;
        this.actionModifierJoueur = null
        this.joueur = null;
    }

    initialiserActionModifierJoueur(actionModifierJoueur){
        this.actionModifierJoueur = actionModifierJoueur;
    }

    initialiserJoueur(joueur){
        this.joueur = joueur;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("modifier-joueur-nom").value = this.joueur.nom;
        document.getElementById("modifier-joueur-prenom").value = this.joueur.prenom;
        document.getElementById("modifier-joueur-club").value = this.joueur.club;
        document.getElementById("modifier-joueur-nation").value = this.joueur.nation;

        document.getElementById("formulaire-modifier").addEventListener("submit",evenement =>this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();


        let nom = document.getElementById("modifier-joueur-nom").value;
        let marque = document.getElementById("modifier-joueur-prenom").value;
        let club = document.getElementById("modifier-joueur-club").value;
        let nation = document.getElementById("modifier-joueur-nation").value;

        this.actionModifierJoueur(new Joueur(nom, marque, club, nation, this.joueur.id));

    }
}
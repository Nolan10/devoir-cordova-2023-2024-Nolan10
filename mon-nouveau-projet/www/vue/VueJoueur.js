class VueJoueur{
    constructor(){
        this.html = document.getElementById("html-vue-joueur").innerHTML;
        this.joueur = null;
    }

    initialiserJoueur(joueur){
        this.joueur = joueur;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("joueur-nom").innerHTML = this.joueur.nom;
        document.getElementById("joueur-prenom").innerHTML = this.joueur.prenom;
        document.getElementById("joueur-club").innerHTML = this.joueur.club;
        document.getElementById("joueur-nationalite").innerHTML = this.joueur.nation;
    }
}
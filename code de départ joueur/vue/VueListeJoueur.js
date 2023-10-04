class VueListeJoueur {
    constructor() {
        this.html = document.getElementById("html-vue-liste-joueur").innerHTML;
        this.listeJoueurDonnee = null;
    }

    initialiserListeJoueur(listeJoueurDonnee){
        this.listeJoueurDonnee = listeJoueurDonnee;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        let listeJoueur = document.getElementById("liste-joueur");
        const listeJoueurItemHTML = listeJoueur.innerHTML;
        let listeJoueurHTMLRemplacement = "";

        for(var numeroJoueur in this.listeJoueurDonnee){
            let listeJoueurItemHTMLRemplacement = listeJoueurItemHTML;
            listeJoueurItemHTMLRemplacement = listeJoueurItemHTMLRemplacement.replace("{Joueur.id}",this.listeJoueurDonnee[numeroJoueur].id);
            listeJoueurItemHTMLRemplacement = listeJoueurItemHTMLRemplacement.replace("{Joueur.nom}",this.listeJoueurDonnee[numeroJoueur].nom);
            listeJoueurItemHTMLRemplacement = listeJoueurItemHTMLRemplacement.replace("{Joueur.prenom}",this.listeJoueurDonnee[numeroJoueur].prenom);
            listeJoueurHTMLRemplacement += listeJoueurItemHTMLRemplacement;
        }
        listeJoueur.innerHTML = listeJoueurHTMLRemplacement;
    }
}
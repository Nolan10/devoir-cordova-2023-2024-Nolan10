class Application{
    constructor(window, joueurDAO, vueListeJoueur, vueAjouterJoueur) {
        this.window = window;
        this.joueurDAO = joueurDAO
        this.vueListeJoueur = vueListeJoueur;
        this.vueAjouterJoueur = vueAjouterJoueur;
        this.vueAjouterJoueur.initialiserActionAjouterJoueur(joueur =>this.actionAjouterJoueur(joueur));

        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();

    }

    naviguer(){
        let hash = window.location.hash;

        if(!hash){

            this.vueListeJoueur.initialiserListeJoueur(this.joueurDAO.lister());
            this.vueListeJoueur.afficher();

        }else if(hash.match(/^#ajouter-joueur/)){

            this.vueAjouterJoueur.afficher();

        }
    }

    actionAjouterJoueur(joueur){
        this.joueurDAO.ajouter(joueur);
        this.window.location.hash = "#";
    }
}

new Application(window, new JoueurDAO(), new VueListeJoueur(), new VueAjouterJoueur());
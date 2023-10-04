class Application{
    constructor(window, joueurDAO, vueListeJoueur, vueAjouterJoueur, vueJoueur) {
        this.window = window;
        this.joueurDAO = joueurDAO
        this.vueListeJoueur = vueListeJoueur;
        this.vueAjouterJoueur = vueAjouterJoueur;
        this.vueAjouterJoueur.initialiserActionAjouterJoueur(joueur =>this.actionAjouterJoueur(joueur));

        this.vueJoueur = vueJoueur;

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

        }else{

            let navigation = hash.match(/^#joueur\/([0-9]+)/);
            let idJoueur = navigation[1];

            this.vueJoueur.initialiserJoueur(this.joueurDAO.lister()[idJoueur]);
            this.vueJoueur.afficher();
        }
    }

    actionAjouterJoueur(joueur){
        this.joueurDAO.ajouter(joueur);
        this.window.location.hash = "#";
    }
}

new Application(window, new JoueurDAO(), new VueListeJoueur(), new VueAjouterJoueur(), new VueJoueur());
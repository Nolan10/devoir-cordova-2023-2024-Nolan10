class Application{
    constructor(window, joueurDAO, vueListeJoueur, vueAjouterJoueur, vueJoueur, vueModifierJoueur) {
        this.window = window;
        this.joueurDAO = joueurDAO
        this.vueListeJoueur = vueListeJoueur;
        this.vueAjouterJoueur = vueAjouterJoueur;
        this.vueModifierJoueur = vueModifierJoueur;

        this.vueAjouterJoueur.initialiserActionAjouterJoueur(joueur =>this.actionAjouterJoueur(joueur));
        this.vueModifierJoueur.initialiserActionModifierJoueur(joueur =>this.actionModifierJoueur(joueur));

        this.vueJoueur = vueJoueur;

        /*this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();*/

        document.addEventListener('deviceready', () =>this.initialiserNavigation(), false);
    }

    initialiserNavigation(){
        console.log("Application-->initialiserNavigation");
        this.window.addEventListener("hashchange", () =>this.naviguer());

        setTimeout(() =>this.naviguer(), 3000);
    }

    naviguer(){
        let hash = window.location.hash;

        if(!hash){

            this.vueListeJoueur.initialiserListeJoueur(this.joueurDAO.lister());
            this.vueListeJoueur.afficher();

        }else if(hash.match(/^#ajouter-joueur/)){

            this.vueAjouterJoueur.afficher();

        }else if(hash.match(/^#joueur/)){

            let navigation = hash.match(/^#joueur\/([0-9]+)/);
            let idJoueur = navigation[1];

            this.vueJoueur.initialiserJoueur(this.joueurDAO.lister()[idJoueur]);
            this.vueJoueur.afficher();
        }
        else{
            let navigation = hash.match(/^#modifier-joueur\/([0-9]+)/);
            let idJoueur = navigation[1];

            this.vueModifierJoueur.initialiserJoueur(this.joueurDAO.lister()[idJoueur])
            this.vueModifierJoueur.afficher();
        }
    }

    actionAjouterJoueur(joueur){
        this.joueurDAO.ajouter(joueur);
        this.window.location.hash = "#";
    }

    actionModifierJoueur(joueur){
        this.joueurDAO.modifier(joueur);
        this.window.location.hash = "#";
    }
}

new Application(window, new JoueurDAO(), new VueListeJoueur(), new VueAjouterJoueur(), new VueJoueur(), new VueModifierJoueur());
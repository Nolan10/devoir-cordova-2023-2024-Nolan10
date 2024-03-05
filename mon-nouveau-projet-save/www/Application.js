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

        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();

    }

    async naviguer(){
        let hash = window.location.hash;

        if(!hash){

            this.vueListeJoueur.initialiserListeJoueur(await this.joueurDAO.getListeObjetsJoueurs() );
            console.log("c'est trop tôt");
            this.vueListeJoueur.afficher();


        }else if(hash.match(/^#ajouter-joueur/)){

            await this.vueAjouterJoueur.afficher();

        }else if(hash.match(/^#joueur/)){

            let navigation = hash.match(/^#joueur\/([0-9]+)/);
            let idJoueur = navigation[1];
            let joueurs = await this.joueurDAO.getListeObjetsJoueurs();
            this.vueJoueur.initialiserJoueur(joueurs[idJoueur - 1]);
            this.vueJoueur.afficher();
        }
        else{
            let navigation = hash.match(/^#modifier-joueur\/([0-9]+)/);
            let idJoueur = navigation[1];

            this.vueModifierJoueur.initialiserJoueur(this.joueurDAO.getListeObjetsJoueurs()[idJoueur])
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

new Application(window, new ListeJoueursDAO(), new VueListeJoueur(), new VueAjouterJoueur(), new VueJoueur(), new VueModifierJoueur());
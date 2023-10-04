class JoueurDAO {
    constructor(){
        /*
        this.listeJoueur = [
            {nom:"Messi", prenom:"Lionel", club:"Inter Miami", nation:"Argentine", id:0},
            {nom:"Ronaldo", prenom:"Cristiano", club:"Al Nasser", nation:"Portugal", id:1},
            {nom:"Mbappe", prenom:"Kylian", club:"Paris Saint Germain", nation:"France", id:2},]

         */
        this.listeJoueur = [];
    }

    lister(){

        if(localStorage['joueur']){
            this.listeJoueur = JSON.parse(localStorage['joueur']);
        }

        for(let position in this.listeJoueur){
            let joueur = new Joueur(this.listeJoueur[position].nom,
                this.listeJoueur[position].prenom,
                this.listeJoueur[position].club,
                this.listeJoueur[position].nation,
                this.listeJoueur[position].id);

            this.listeJoueur[joueur.id] = joueur;
        }

        return this.listeJoueur;
    }

    ajouter(joueur)
    {
        // il faut ici attribuer un id au joueur
        if(this.listeJoueur.length > 0)
            joueur.id = this.listeJoueur[this.listeJoueur.length-1].id + 1;
        else
            joueur.id = 0;

        this.listeJoueur[joueur.id] = joueur;

        localStorage['joueur'] = JSON.stringify(this.listeJoueur);
        console.log("JSON.stringify(this.listeJoueur) : " +
            JSON.stringify(this.listeJoueur));
    }
}
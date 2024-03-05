class ListeJoueursDAO {
    constructor() {
        this.listeObjetsJoueurs = null;
    }

    lister() {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            var apiUrl = 'http://213.32.91.121/partiePhp-Serveur/controlleurs/JoueurControlleur.php?methode=lister';

            xhr.open('GET', apiUrl, true);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var response = xhr.responseText;
                        this.listeObjetsJoueurs = this.convertirJsonEnString(response);
                        console.log(this.listeObjetsJoueurs);
                        for (let joueur of this.listeObjetsJoueurs) {
                            console.log('ID du joueur :', joueur);
                        }
                        resolve();  // Resolve the promise when the operation is complete
                    } else {
                        reject('La requête a échoué.');  // Reject the promise on error
                    }
                }
            };
            xhr.send();
        });
    }

    ajouter(joueur) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            var apiUrl = 'http://213.32.91.121/partiePhp-Serveur/controlleurs/JoueurControlleur.php?methode=ajouter&nom=' + joueur.nom + '&prenom=' + joueur.prenom + '&club=' + joueur.club + '&nation=' + joueur.nation;

            xhr.open('GET', apiUrl, true);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        console.log("joueur Ajouté")
                        resolve();  // Resolve the promise when the operation is complete
                    } else {
                        reject('La requête a échoué.');  // Reject the promise on error
                    }
                }
            };
            xhr.send();
        });
    }


    convertirJsonEnString(jsonInput) {
        var listeObjetsJoueurs = JSON.parse(jsonInput).map(jsonJoueur => {
            const joueur = new Joueur(
                jsonJoueur.nomJoueur,
                jsonJoueur.prenomJoueur,
                jsonJoueur.clubJoueur,
                jsonJoueur.nationJoueur,
                jsonJoueur.idJoueur
            );
            return joueur;
        });
        return listeObjetsJoueurs;
    }

//------------------------GETTERS AND SETTERS------------------------

    async getListeObjetsJoueurs() {
        await this.lister();
        return this.listeObjetsJoueurs;
    }
}
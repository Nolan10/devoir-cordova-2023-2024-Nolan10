class Joueur {
    constructor(nom, prenom, club, nation, id) {
        this._nom = nom;
        this._prenom = prenom;
        this._club = club;
        this._nation = nation;
        this._id = id;
    }


    get nom() {
        return this._nom;
    }

    set nom(value) {
        this._nom = value;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(value) {
        this._prenom = value;
    }

    get club() {
        return this._club;
    }

    set club(value) {
        this._club = value;
    }

    get nation() {
        return this._nation;
    }

    set nation(value) {
        this._nation = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}
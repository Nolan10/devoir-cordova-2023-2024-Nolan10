CREATE TABLE `liste-joueurs-de-foot`.`joueur` (
    `id_joueur` INT NOT NULL AUTO_INCREMENT,
    `nom_joueur` VARCHAR(255) NOT NULL,
    `prenom_joueur` VARCHAR(255) NOT NULL,
    `club_joueur` VARCHAR(255) NOT NULL,
    `nation_joueur` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id_joueur`)
)

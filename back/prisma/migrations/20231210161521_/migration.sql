-- CreateTable
CREATE TABLE `Depenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `montant` INTEGER NOT NULL,
    `libelle` VARCHAR(191) NOT NULL,
    `categorie` VARCHAR(191) NOT NULL,
    `annee` INTEGER NOT NULL,
    `mois` INTEGER NOT NULL,
    `jour` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

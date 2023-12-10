const prismaModule = require('@prisma/client');
const prisma = new prismaModule.PrismaClient()

module.exports = { prisma };

async function hardData() {

    await prisma.depenses.deleteMany();

    await prisma.depenses.create({
        data: {

            montant: -100,
            libelle: 'Noel',
            categorie: 'Courses',
            annee: 2023,
            mois: 12
        },
    });

    await prisma.depenses.create({
        data: {
            montant: -80,
            libelle: 'Noel',
            categorie: 'Courses',
            annee: 2022,
            mois: 12
        },
    });

    await prisma.depenses.create({
        data: {
            montant: -80,
            libelle: 'Noel',
            categorie: 'Courses',
            annee: 2021,
            mois: 12
        },
    });

    await prisma.depenses.create({
        data: {

            montant: -24,
            libelle: 'Cinema',
            categorie: 'Divertissement',
            annee: 2023,
            mois: 12
        },
    });

}

async function getByYearAndMonth(year, month) {
    return prisma.depenses.findMany({
        where: {
            AND: [
                {
                    annee: {
                        equals: parseInt(year)
                    }
                },
                {
                    mois: {
                        equals: parseInt(month)
                    }
                }
            ]
        }
    })
}

async function addExpenses(amount, label, category, year, month) {
    return await prisma.depenses.create({
        data: {
            montant: amount,
            libelle: label,
            categorie: category,
            annee: year,
            mois: month
        },
    });
}

module.exports = { hardData, getByYearAndMonth, addExpenses };
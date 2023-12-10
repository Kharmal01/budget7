##  1. Comment lancer le projet

* Créer une base de données vide (provider de votre choix)
* Dans /budget7/back/prisma modifiez schema.prisma pour y inclure l'url de votre database, ainsi que votre provider
```
datasource db {
  provider = "mysql"
  url      = "mysql://budget7:budget7@localhost:3306/budget7"
}
```
* npx prisma migrate dev --name init pour déployer une version dev
* npx prisma migrate deploy pour lancer une version de production
* Aller dans /budget7/front/src
* npm run build pour créer un build du front-end
* Aller dans /budget7/back
* node server.js
* Vous pouvez accéder à l'application via http://localhost:3000/


## 2. Fichiers Importants:

Back:
* server.js : serveur express avec le routeur
* prisma.js : les fonctions pour la database

Front: 
* App.js : application avec module principale MonthSummary
* ButtonsSections.js : module de sélection du mois à afficher
* ExpensesSection.js : module d'affichage des dépenses individuelles et d'ajout
* RightSection.js : module parent des modules SummaryTable et RecentMonthsTable
* SummaryTable.js : module qui affiche le total des dépenses, revenus et résultat du mois
* RecentMonthsTable.js : module qui affiche les mêmes informations pour le même mois des années précédentes
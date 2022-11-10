# myMonitoring

ce projet a pour but de permettre une mesure de temps de réponse sur une url depuis votre poste. généralement, si vous utilisés des outils gratuis comme pagespeed ou gtmetrix, le calcul se fait depuis les états unis ou le canada. ici c'est vous qui faîtes la requête, de là ou vous vous trouvez.

vous pouvez: tester une url en la collant dans un input, tester une liste de site ayant chacuns une ou plusieurs urls que vous enregistrer dans un json, classer vos url par tags pour ne tester que tel ou tel catégorie (vous pouvez assigner 0, 1 ou plusieurs catégories par site).

lorsque vous tester un site/ une url, vous pouvez cliquer sur le temps de réponse d'une url et cela crée un nouveau rapport basé sur 10 requêtes vers celle-ci.

les temps trop longs ou les codes d'erreurs s'affichent en orange ou rouge, la premiere ligne du raport indique le nombre d'erreurs critiques. Les rapports sur 10 requêtes vous donne également le temps moyen de réponse.

## installation

 - pull the repo in (local) server (js import not work with file:/// url): `git pull https://github.com/Adrien-Ray/myMonitoring.git` or download: https://github.com/Adrien-Ray/myMonitoring
 - install node if necessary and go to /nodeBack folder, and `npm install`.

## utilisation

 - go to /nodeBack folder, `node index.js`
 - go in browser interface

## aport de données

 - read your data in `/assets/scripts/modules/myData.json`

# myMonitoring [en]

this project aims to allow a measurement of response time on a url from your computer. generally, if you used free tools like pagespeed or gtmetrix, the calculation is done from the United States or Canada. here it is you who make the request, from where you are.

you can: test a url by pasting it in an input, test a list of sites having each one or more urls that you record in a json, classify your urls by tags to test only this or that category (you can assign 0, 1 or more categories per site).

when you test a site/url, you can click on the response time of a url and it creates a new report based on 10 requests to it.

long time or error codes are displayed in orange or red, the first line of the report shows the number of critical errors. The reports on 10 requests also give you the average response time.

## install

 - pull the repo in (local) server (js import not work with file:/// url): `git pull https://github.com/Adrien-Ray/myMonitoring.git` or download: https://github.com/Adrien-Ray/myMonitoring
 - install node if necessary and go to /nodeBack folder, and `npm install`.

## use

 - go to /nodeBack folder, `node index.js`
 - go in browser interface

## add data

 - read your data in `/assets/scripts/modules/myData.json`

# updates

## 2022-11-10

`c7fc0e367bc0b285e7dbdf05e10e38236565325c` suppression propre des reports au reset reports.
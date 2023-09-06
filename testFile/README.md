# Avant de commencer à executer ce projet 
- npm init .  "Pour creer le package.json neccesaire pour l'installation pour toutes les dependances 
- npm i inquirer qr-image 
- ajouter cette ligne au package.json { "type":"module"} pour pouvoir utiliser la syntaxe ECMA et nonw


# npm init recherche toujours le fichier main.js , il faut toujours s'attendre à créer un fichier portant ce nom 

<!-- tips: trouver ces propres analogies pour bien comprendre les choses  -->

#3.5 Secret Project

Dans votre exemple, le middleware verifPassword n'est pas strictement nécessaire, car vous pourriez simplement accéder à req.body.password directement dans la route app.post("/check"). Cependant, l'utilisation d'un middleware pour gérer cette logique peut être bénéfique pour plusieurs raisons :

Modularité : Si vous avez besoin de manipuler davantage les données du corps de la requête dans plusieurs endroits de votre application, vous pourriez réutiliser ce middleware.

Lisibilité : En déplaçant la logique de récupération du mot de passe dans un middleware, votre route app.post("/check") reste plus propre et se concentre davantage sur la logique de vérification du mot de passe.

Extensions futures : Si vous souhaitez ajouter des fonctionnalités supplémentaires au traitement des données du corps de la requête, vous pouvez le faire dans le middleware sans affecter directement la logique de vos routes.


## Compréhension des méthodes Sync à côté des méthodes JavaScript.

En résumé, les méthodes synchrones (Sync) bloquent l'exécution jusqu'à ce qu'elles soient terminées, tandis que les méthodes asynchrones utilisent des rappels pour gérer le flux d'exécution de manière non bloquante. Il est généralement recommandé d'utiliser les versions asynchrones dans les applications Node.js pour éviter de bloquer le thread principal et permettre à l'application de gérer plusieurs opérations en parallèle.
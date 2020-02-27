# Lancer le projet
## Etapes a suivre lors du tout premier lancement
### Dans le repertoire racine:
```
mvn clean install
mvn --projects backend spring-boot:run
```

## Pour developper plus rapidement l'interface
Le serveur webpack-dev contient un système de hot-reload qui permet de recharger la page a chaque sauvegarde de fichier dans le projet, ce qui permet un cycle de devellopement plus rapide.
```
cd frontend
yarn serve
```

# Fonctionnement du projet
## Fonctionnement général
Ce projet est découpé en 2 modules :
- Un module API backend en Java avec Springboot, qui permet de communiquer avec la base de donnée.
- Un module interface frontend en Javascript avec Vuetify, qui communique avec le serveur backend

## API Springboot
### Routes
- GET : "/get/lots" : Retourne tous les lots contenu dans la base de données
- POST : "/post/lot" : Prend en paramètre un fichier JSON (Format décris plus bas), insère en base de donnée tout les lots contenus dans ce fichier.

### Base de donnée
Nom de bdd : clay_db
Username : root
Pas de mot de passe

### Format du fichier JSON
```json
    {
        "date":"YYYY-MM-DD",
        "lots": [
            {
                "pressure": int,
                "offset": int,
                "component": String,
                "layout": int,
                "colorbound": String,
                "quality": String,
                "performance": String,
                "result": int,
                "timecode": int
            }
        ]
    }
```

### Modèle
#### Lot
```
    int pressure
    int offset
    String component
    int layout
    String colorbound
    String quality
    String performance
    int result
    int timecode
```
## Interface Vuetify
Un projet nodejs standard, fonctionnant via Vuejs

## Workflow recommandé
Lancer dans un premier temps l'api via <code>mvn --projects backend spring-boot:run</code> dans le repertoire racine, et ensuite lancer l'interface en dev via <code>yarn dev</code> dans le répertoire frontend.
Le serveur de dev est accessible sur [http://localhost:8081]

## Mise en production
Dans un premier temps, il faut lancer <code>yarn build</code> dans le répertoire frontend, et ensuite <code>mvn package</code> dans le répertoire racine.
Le contenu du build du dossier frontend sera transféré au dossier backend, donc le module backend aura tout ce dont il a besoin pour lancer le site en prod.
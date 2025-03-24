# Boîte musicale

Dans cet exercice, vous devez créer une application web pour gérer une liste de lecture des titres musicaux (playlist).

## Modalité
* Vous devez réaliser l'exercice en binôme.
* Cet exercice est noté, le rendu doit être envoyé sur GitHub Classroom.
* Le compte rendu est obligatoire, et doit impérativement indiquer les noms et prénoms de chaque étudiant du binôme.

## Consignes
Vous devrez créer une application de gestion des listes de lecture musicale à l’exemple de l'application présent sur [ce lien](https://polytechlyon.github.io/isi-alt-24-25-tp2-jukebox-example/main/).

## Fonctionnalités
Il s'agit d'une application mono-page, comprenant deux vues.
* Une liste des titres musicaux.
* Une vue pour organiser un ensemble des listes de lecture.

### Liste des titres musicaux
Cette vue comporte trois parties :
* Un contrôleur pour arrêter et reprendre le lecteur audio.
* Une liste de lecture.
* Un formulaire pour ajouter un titre à la liste.

#### Contrôleur
Lorsqu'il y a un titre en cours de lecture, le contrôleur affiche l'intitulé de ce titre, ainis qu'une barre indiquant le progrès de la lecture.
Un bouton permet de mettre en pause ou de reprendre le titre, selon l'état de lecture.

L'utilisateur peut choisir le mode de répétition grâce à un contrôle adequate.
Les modes de répétition disponibles sont Liste, Titre, ou Aucun.

#### Liste de lecture
La liste de lecture affiche les intitulés des titres ajoutés par l'utilisateur.
Chaque item est accompagné de deux boutons : un pour jouer le titre, et un pour le supprimer.

L'intitulé du titre en cours de lecture est mis en évidence, par exemple avec un texte en gras.

Les titres qui ne fonctionnent pas, par exemple, à cause d'un lien défectueux, auront le bouton de lecture grisé.
Leurs items seront marqués, par exemple par un texte barré. 

#### Formulaire d'ajout
Ce formulaire permet d'ajouter un titre à la liste de lecture.
Deux types d'ajout sont possibles : soit par lien, soit par fichier.

L'utilisateur précise le mode d'ajout souhaité grâce à un contrôle adéquat.

Pour un ajout par lien, l'utilisateur doit saisir l'URL d'un fichier audio accessible en ligne.
Le formulaire d'ajout ne vérifie pas la validité du lien.
L'intitulé du titre peut être déduit automatiquement du lien, ou saisi autrement.

Pour un ajout par fichier, l'utilisateur doit sélectionner un fichier audio depuis son système de fichiers.
Le formulaire d'ajout ne vérifie pas le format de fichier.
L'intitulé du titre peut être déduit automatiquement du nom de fichier, ou saisi autrement.

### Lecture
Lorsque le mode de répétition Liste est choisi (le mode par défaut), le lecteur joue les titres de la liste dans l'ordre.
Quand la liste est terminée, la lecture reprend de début de la liste.
Si le mode de répétition Aucun est choisi, le lecteur joue les titres dans l'ordre aussi.
Par contre, quand la liste est terminée, la lecture s'arrête.
Si le mode de répétition Titre est choisi, le lecteur joue le titre en cours de lecture en boucle.

Lorsque l'utilisateur clique sur la barre du progrès, la lecture saute à la position correspondante.

Lorsqu'un titre défectueux est détecté, il est marqué comme tel.
Le lecteur passe automatiquement au titre suivant à chaque fois qu'un titre défectueux est rencontré.
Un titre peut être défectueux pour plusieurs raisons, par exemple, un lien invalide ou un fichier audio corrompu.

### Organisation de plusieurs listes de lecture
L'utilisateur peut créer plusieurs listes de lecture.
Chaque liste aura son propre nom.
Pour visualiser et organiser les listes de lecture, l'utilisateur doit naviguer vers la vue de gestion des listes.
Cette vue est accessible par un lien dédié depuis la vue d'une liste musicale.
Elle affiche la liste des noms des listes de lecture, ainis que le nombre de titres dans chaque liste.
Chaque item, correspondant à une liste de lecture, est accompagné d'un bouton de suppression, et d'un bouton de sélection.
La liste actuellement sélectionnée ne peut pas être supprimée.

En sélectionnant une liste, l'utilisateur est redirigé vers la vue de la liste musicale, en chargeant la liste sélectionnée.

Un formulaire permet de créer une nouvelle liste de lecture.

## Contraintes
* Vous devez utiliser Vue 3 et Vue Router pour réaliser cet exercice.
* Vous ne pouvez pas utiliser d'autres librairies tierces.
* Évitez d'utiliser l'attribut `controls` de l'élément `audio`.

## Extension
Le répertoire `server` contient un serveur très simple qui écoute, une fois lancé, au port 8082.
Lors d'un appel avec la méthode HTTP POST, le serveur sauvegarde les données envoyées en format JSON.
L'entête Content-Type doit être définie à "application/json".
Suit à un appel avec la méthode HTTP GET, le serveur répond avec les données sauvegardées.

Pour lancer ce serveur, l'on peut exécuter `npm run dev` depuis le répertoire `server`.

### Objectif de l'extension
Utiliser le serveur fourni dans le dossier `serveur` comme un backend pour votre application de gestion des listes musicales.
À chaque modification, les listes doivent être sauvegardées en faisant un appel POST au serveur.
Au chargement de l'application, les listes doivent être lues en faisant un appel GET au serveur.

Seulement les titres ajoutés par lien public sont sauvegardés.
Les titres ajoutés par fichier seront donc perdu entre deux sessions.

L'extension doit être réalisée sur une branche git dédiée.

# Compte rendu
Le compte rendu doit être fourni en complétant le fichier [`Rapport.md`](Rapport.md) et doit indiquer les noms et prénoms des membres du binôme.
Il doit, d'une manière brève, décrire et justifier les choix de conception et de réalisation.
Il doit aussi décrire les difficultés rencontrées et les solutions apportées.

Si l'extension est réalisée, le nom de la branche contenant le code de l'extension doit être mentionné dans le compte rendu.

## Références
* [Vue 3](https://vuejs.org/)
* [Méthode statique `createObjectURL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static)
* [Élément d'audio embarqué](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
* [Vue Router](https://router.vuejs.org/)
* [API Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)








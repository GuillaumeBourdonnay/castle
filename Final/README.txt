Le fichier restaurants.js recherche les restaurants �toil�s sur le site michelin
Le fichier hotels.js recherche les hotels sur le site Relais Chateaux, 
et fonction.js fait la fusion des deux recherches, afin d'en retirer les hotels du site 
Relais Chateaux ayant un restaurant �toil�, et �crit le fichier result.json  
Le fichier affichage.html retranscrit ce fichier json en une table html. 

Pour que ce fichier fonctionne, il est n�cessaire d'autoriser le navigateur � acc�der 
au fichier json. Dans le cas de Chrome, il faut donc d�marrer un invite de commande et y entrer 
la ligne suivante : 

start chrome --allow-file-access-from-file

On peut alors ouvrir le fichier affichage.html, et lancer le parsing. 
La recherche est tri�e par ordre alphab�tique des hotels. 

Le fichier getHotels.js est un premier fichier JavaScript, qui permet les noms des hotels de 
Relais et Chateaux et l'URL associ�, mais n'est pas utilis� dans le projet final
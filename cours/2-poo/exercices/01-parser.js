class Parser {}

const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";

const p = new Parser(":");
p.parse(phrase);
console.log(p.str);
//8790 8987 7777 9007

/*
CAHIER DES CHARGES
- la classe contient un constructeur qui prend un séparateur en paramètre, et le stocke dans une propriété
- la classe contient une méthode parse qui prend en paramètre un string
  - découpe ce string au niveau de chaque séparateur pour générer un tableau (cf methode split des String)
  - supprime les espaces de début et de fin de chaine sur chaque morceau (cf méthode trim des String)
  - filtre le tableau pour garder uniquement les morceaux entièrement de chiffres
  - recolle les morceaux avec des espaces (cf methode join des Array)
  - stocke ce résultat dans une propriété
*/

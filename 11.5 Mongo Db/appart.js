// Ensemble pour stocker les noms de types d'appartements et les descriptions uniques
const nomsAppartementsUniques = new Set();
const descriptionsUniques = new Set();

// Fonction pour générer un nom aléatoire unique
function genererNomAleatoireUnique() {
  let nom;
  do {
    nom = genererNomAleatoire();
  } while (nomsAppartementsUniques.has(nom));
  nomsAppartementsUniques.add(nom);
  return nom;
}

// Fonction pour générer une description aléatoire unique
function genererDescriptionAleatoireUnique() {
  let description;
  do {
    description = genererDescriptionAleatoire();
  } while (descriptionsUniques.has(description));
  descriptionsUniques.add(description);
  return description;
}

// Fonction pour générer un nom aléatoire
function genererNomAleatoire() {
  const adjectifs = [
    "Charmant", "Spacieux", "Élégant", "Moderne", "Cosy",
    "Luxueux", "Rustique", "Séduisant", "Pittoresque", "Économique",
    "Serein", "Artistique", "Minimaliste", "Traditionnel", "Futuriste"
  ];
  const types = [
    "Studio", "1 Chambre", "2 Chambres", "de Luxe", "Penthouse", "en Bord de Mer", "de Ville",
    "Loft", "Maisonnette", "Duplex", "Chalet", "Cabane", "Appartement de Vacances", "Appartement de Montagne", "Appartement de Plage",
    "Chambre d'Hôte", "Appartement Familial", "Appartement avec Jardin", "Appartement Historique", "Appartement de Rêve"
  ];
  ;
  const adjectifAleatoire = adjectifs[Math.floor(Math.random() * adjectifs.length)];
  const typeAleatoire = types[Math.floor(Math.random() * types.length)];
  return `${adjectifAleatoire} Appartement ${typeAleatoire}`;
}

// Fonction pour générer une description aléatoire
function genererDescriptionAleatoire() {
  const adjectifs = [ "Belle", "Confortable", "Spacieuse", "Lumineuse", "Bien située",
  "Élégante", "Invitante", "Moderne", "Traditionnelle", "Magnifique",
  "Chaleureuse", "Impressionnante", "Sereine", "Époustouflante", "Mémorable",];

  const activites = [ "Parfait pour se détendre", "Idéal pour les voyages d'affaires", "Près des attractions touristiques", "À proximité des transports en commun",
  "À quelques pas de la plage", "Entouré de restaurants", "Avec vue sur la montagne", "Proche des boutiques", "Propice à la méditation",
  "Au cœur de la nature", "Proche des sites historiques", "Avec une ambiance romantique", "Avec un jardin privé", "Adapté aux familles",
  "Avec un balcon spacieux", "À deux pas des musées", "Près des sentiers de randonnée", "Proche des marchés locaux", "Avec une cuisine équipée",
  "Offrant une expérience locale"];
  const adjectifAleatoire = adjectifs[Math.floor(Math.random() * adjectifs.length)];
  const activiteAleatoire = activites[Math.floor(Math.random() * activites.length)];
  return `${adjectifAleatoire} appartement. ${activiteAleatoire}.`;
}

// Générer et afficher 100 noms de types d'appartements et descriptions uniques
// for (let i = 0; i < 101; i++) {
//   const nomAppartement = genererNomAleatoireUnique();
//   const description = genererDescriptionAleatoireUnique();
//   console.log(i,`Nom de l'appartement : ${nomAppartement}`);
//   console.log(i,`Description : ${description}`);
//   console.log("\n");
// }

export default function Appart(){
    const typeAppart = genererNomAleatoireUnique();
    const description = genererDescriptionAleatoireUnique();
    return {typeAppart, description}
}

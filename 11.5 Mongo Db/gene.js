// Fonction pour générer un tableau d'éléments aléatoires à partir d'une liste de mots
function genererElementsAleatoires(liste, nombreElements) {
    const elementsAleatoires = [];
    const listeOriginale = liste.slice(); // Créer une copie de la liste pour éviter de la modifier
  
    for (let i = 0; i < nombreElements; i++) {
      const indexAleatoire = Math.floor(Math.random() * listeOriginale.length);
      const elementAleatoire = listeOriginale.splice(indexAleatoire, 1)[0];
      elementsAleatoires.push(elementAleatoire);
    }
  
    return elementsAleatoires;
  }
  
  // Liste d'adjectifs pour les noms d'appartements
  const adjectifs = ["Charmant", "Spacieux", "Élégant", "Moderne", "Cosy"];
  
  // Liste de types d'appartements
  const typesAppartements = ["Studio", "1 Chambre", "2 Chambres", "de Luxe", "Penthouse", "en Bord de Mer", "de Ville"];
  
  // Liste d'adjectifs pour les descriptions
  const adjectifsDescriptions = ["Belle", "Confortable", "Spacieuse", "Lumineuse", "Bien située"];
  
  // Liste d'activités pour les descriptions
  const activites = ["Parfait pour se détendre", "Idéal pour les voyages d'affaires", "Près des attractions touristiques", "À proximité des transports en commun"];
  
  // Générer 100 éléments supplémentaires pour chaque liste
  const adjectifsSupplementaires = genererElementsAleatoires(adjectifs, 100);
  const typesAppartementsSupplementaires = genererElementsAleatoires(typesAppartements, 100);
  const adjectifsDescriptionsSupplementaires = genererElementsAleatoires(adjectifsDescriptions, 100);
  const activitesSupplementaires = genererElementsAleatoires(activites, 100);
  
  // Combinez les listes originales avec les éléments supplémentaires
  const adjectifsCombinés = [...adjectifs, ...adjectifsSupplementaires];
  const typesAppartementsCombinés = [...typesAppartements, ...typesAppartementsSupplementaires];
  const adjectifsDescriptionsCombinés = [...adjectifsDescriptions, ...adjectifsDescriptionsSupplementaires];
  const activitesCombinées = [...activites, ...activitesSupplementaires];
  
  // Afficher quelques éléments de chaque liste pour vérifier
  console.log("Adjectifs combinés:", adjectifsCombinés.slice(0, 5));
  console.log("Types d'appartements combinés:", typesAppartementsCombinés.slice(0, 5));
  console.log("Adjectifs de descriptions combinés:", adjectifsDescriptionsCombinés.slice(0, 5));
  console.log("Activités combinées:", activitesCombinées.slice(0, 5));
  
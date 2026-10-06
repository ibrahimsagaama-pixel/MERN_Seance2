const produits = [
    { nom: "Clavier", prix: 45 },
    { nom: "Souris", prix: 25 },
    { nom: "Écran", prix: 150 },
    { nom: "Casque", prix: 80 }
];
const { nom, prix } = produits[0];

console.log(nom, prix);
const souris = produits.find(produit => produit.nom === "Souris");

console.log(souris.prix);
const produitsPasChers = produits.filter(produit => produit.prix < 100);

console.log(produitsPasChers);
const avecRemise = prix => prix * 0.9;

console.log(avecRemise(320));

//Required libraries
const scrape = require('./hotels.js');
const michelinScrape = require('./restaurants.js');
let fs = require('fs');

'use strict';

const hotelJSON = scrape.getHotelsJSON();
const JSONMichelin = michelinScrape.getRestaurantsJSON();

fs.writeFileSync("result.json", JSON.stringify(findMutualChefsAndPCs(hotelJSON, JSONMichelin)));

function findMutualChefsAndPCs(LHotels, LMichelin) {
  let HotelsEtoiles = [];
  for (let i = 0; i < LHotels.length; i++) {
    for (let j = 0; j < LMichelin.length; j++) {
      if (LHotels[i].chef === LMichelin[j].chef && LHotels[i].postalCode === LMichelin[j].postalCode) {
        HotelsEtoiles.push({
          "hotelName": LHotels[i].name,
          "restaurantName": LMichelin[j].name,
          "postalCode": LHotels[i].postalCode,
          "chef": LHotels[i].chef,
          "url": LHotels[i].url,
          "price": LHotels[i].price
        })
      }
    }
  }
  return HotelsEtoiles;
}

console.log("Ecriture terminée, la liste des hotels du site ayant un restaurant étoilé est dans le fichier result.json");
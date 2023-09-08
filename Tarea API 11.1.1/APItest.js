let apiKey = 'e528e4f03dfcef9da2740c858db5c6ae';

let baseUrl = 'http://api.coinlayer.com/api/';
let endpoint = 'live';
let cryptos = ['ADA', 'ARK', 'AVAX', 'BTC', 'DOGE', 'EOS', 'ETH', 'GMX', 'LTC', 'MANA', 'MIOTA', 'NEO', 'VEE', 'XLM', 'XRP', 'ZEN'];

// URL de la API //

let apiUrl = `${baseUrl}${endpoint}?access_key=${apiKey}`;

// Fetch de la API //
fetch(apiUrl)
  .then((respuesta) => {
    return respuesta.json();
  })

  .then((data) => {
     
    // Filtro para tarjetas // 

     let filteredData = {};
     for (let crypto of cryptos) {
       if (data.rates[crypto]) {
         filteredData[crypto] = data.rates[crypto];
       }
     }
     console.log(filteredData);
     
     let cryptoContainer = document.getElementById('cryptoContainer');
     for (let crypto in filteredData) {
       
        // Divs para tarjetas filtradas //

       let cryptoDiv = document.createElement('div');
       cryptoDiv.className = 'card';
       
       cryptoDiv.textContent = `${crypto}: ${filteredData[crypto]}`;
       
       cryptoContainer.appendChild(cryptoDiv);
     }
   })
   .catch((error) => {
     console.error(error);
   });
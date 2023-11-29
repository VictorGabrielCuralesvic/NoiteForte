const axios = require('axios');

const brShop = {
    method: 'GET',
    url: 'https://fortnite-api.com/v2/shop/br',
    params: {
        language: 'pt-BR',
    }
}

async function fetchData() {
    try {
        const response = await axios.request(brShop);
        
        /* console.log(JSON.stringify(response.data, null, 2)); */
        if (response.data && response.data.data && response.data.data.featured && response.data.data.featured.entries) {
            // Itera sobre os itens e imprime várias informações de cada um
            response.data.data.featured.entries.forEach(item => {
                console.log(`Nome: ${item.items[0].name}`);
                console.log(`Descrição: ${item.items[0].description}`);
                console.log(`Tipo: ${item.items[0].type.displayValue}`);
                console.log(`Raridade: ${item.items[0].rarity.displayValue}`);
                
                // Verifica se há informações sobre a série
                if (item.items[0].series) {
                    console.log(`Série: ${item.items[0].series.text}`);
                } else {
                    console.log('Série: N/A');
                }

                // Imprime URLs das imagens
                console.log(`Ícone Pequeno: ${item.items[0].images.smallIcon}`);
                console.log(`Ícone: ${item.items[0].images.icon}`);
                console.log(`Imagem Destacada: ${item.items[0].images.featured}`);
                
                console.log('----------------------');
            });
        } else {
            console.log('Nenhum item encontrado.');
        }
    } catch (error) {
        console.log(error);
    }
};

fetchData();

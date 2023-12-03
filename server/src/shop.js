// shop.js

const axios = require('axios');

const brShop = {
    method: 'GET',
    url: 'https://fortnite-api.com/v2/shop/br',
    params: {
        language: 'pt-BR',
    }
}

async function fetchFortniteData() {
    try {
        const response = await axios.request(brShop);
        return response.data.data.featured.entries;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default fetchFortniteData;

const axios = require('axios');

const newsType = 'br';

const news = {
    method: 'GET',
    url: `https://fortnite-api.com/v2/news/${newsType}`
}

async function fetchData() {
    try {
        const response = await axios.request(news);

        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log(error);
    }
};

fetchData();
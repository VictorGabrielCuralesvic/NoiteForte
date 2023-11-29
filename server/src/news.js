const axios = require('axios');

async function fetchData(newsType) {
    try {

        const news = {
            method: 'GET',
            url: `https://fortnite-api.com/v2/news/${newsType}`
        }
        
        const response = await axios.request(news);

        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log(error);
    }
};

fetchData('br');
fetchData('creative');
fetchData('stw');
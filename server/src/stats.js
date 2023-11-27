const axios = require('axios');

const apiKey = "2b444249-94809a2e-b9c247b8-28dffd17";

// TO DO
const nameAccount = "RonaldTyvy13"

const idAccount = {
    method: "GET",
    url: `https://fortniteapi.io/v1/lookup?username=${nameAccount}`,
    headers: {
        "Authorization": `${apiKey}`
    }
};

async function fetchDataIdAccount() {
    try {
        const response = await axios.request(idAccount);
        console.log(response.data.account_id);
    } catch(error) {
        console.log(error);
    }
}

fetchDataIdAccount();


const axios = require('axios');

const apiKeyFortniteAPI = "52eae22a-3148-498a-a187-150fb89d0f77";
const apiKeyFortniteAPIIo = "2b444249-94809a2e-b9c247b8-28dffd17";

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


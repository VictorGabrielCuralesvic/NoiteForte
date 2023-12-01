// https://fortnite-api.com/v1/map

const axios = require('axios');

// Chave de uso das APIs.
const apiKeyFortniteAPI = "52eae22a-3148-498a-a187-150fb89d0f77";

// Realiza uma requisição GET à API, passando o nome da conta e retornando o ID da conta.
const mapReq = {
    method: "GET",
    url: `https://fortnite-api.com/v1/map`,
    params: {
        language: 'pt-BR',
    },
    headers: {
        "Authorization": `${apiKeyFortniteAPI}`
    }
};

// Realiza a consulta dos dados vindos da API.
async function fetchMapData() {
    try {
        const response = await axios.request(mapReq);
        console.log(response.data)
    } catch(error) {
        console.log(error);
    }
}

fetchMapData();

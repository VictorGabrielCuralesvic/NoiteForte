const axios = require('axios');

// Chave de uso das APIs.
const apiKeyFortniteAPI = "52eae22a-3148-498a-a187-150fb89d0f77";
const apiKeyFortniteAPIIo = "2b444249-94809a2e-b9c247b8-28dffd17";

// TO DO: Tornar "nameAccount" dinâmico. AQUI PEGAR O NICK DO  USUARIO
const nameAccount = "RonaldTyvy13";

// Realiza uma requisição GET à API, passando o nome da conta e retornando o ID da conta.
const idAccount = {
    method: "GET",
    url: `https://fortnite-api.com/v2/stats/br/v2?name=${nameAccount}`,
    headers: {
        "Authorization": `${apiKeyFortniteAPI}`
    }
};

// Realiza a consulta dos dados vindos da API.
async function fetchDataIdAccount() {
    try {
        const response = await axios.request(idAccount);
        const responseIdAccount = response.data.data.account.id;
        fetchDataStatsAccount(responseIdAccount);
    } catch(error) {
        console.log(error);
    }
}

// Realiza uma requisição GET à API, passando o ID da conta e retornando as estatíticas da conta.
async function fetchDataStatsAccount(idAccount) {
    const statsAccount = {
        method: "GET",
        url: `https://fortniteapi.io/v1/stats?account=${idAccount}`,
        headers: {
            "Authorization": `${apiKeyFortniteAPIIo}`
        },
    }

    try {
        const response = await axios.request(statsAccount);
        responseStatsAccount = response.data;
        console.log(responseStatsAccount);
    } catch(error) {
        console.log(error);
    }
}

fetchDataIdAccount();

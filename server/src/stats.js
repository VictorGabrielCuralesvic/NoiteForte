const axios = require('axios');

// Chave de uso das APIs.
const apiKeyFortniteAPI = "52eae22a-3148-498a-a187-150fb89d0f77";
const apiKeyFortniteAPIIo = "2b444249-94809a2e-b9c247b8-28dffd17";

// Realiza a consulta dos dados vindos da API.
export default async function fetchDataIdAccount(nameAccount) {
    // Realiza uma requisição GET à API, passando o nome da conta e retornando o ID da conta.
    console.log();
    const idAccount = {
        method: "GET",
        url: `https://fortnite-api.com/v2/stats/br/v2?name=${nameAccount}`,
        headers: {
            "Authorization": `${apiKeyFortniteAPI}`
        }
    };
    try {
        const response = await axios.request(idAccount);
        const responseIdAccount = response.data.data.account.id;
        return await fetchDataStatsAccount(responseIdAccount);
    } catch(error) {
        console.log(error);
        return("Usuário não encontrado!")
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
        const responseStatsAccount = response.data;
        console.log(responseStatsAccount);
        console.log("Aquiii")
        return responseStatsAccount;
    } catch(error) {
        console.log(error);
        return("Usuário não encontrado!")
    }
}

// fetchDataIdAccount("RonaldTyvy13");

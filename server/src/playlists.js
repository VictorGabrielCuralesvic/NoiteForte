// https://fortnite-api.com/v1/playlists

const axios = require('axios');

// Chave de uso das APIs.
const apiKeyFortniteAPI = "52eae22a-3148-498a-a187-150fb89d0f77";

// Realiza uma requisição GET à API, passando o nome da conta e retornando o ID da conta.
const playlistsReq = {
    method: "GET",
    url: `https://fortnite-api.com/v1/playlists`,
    params: {
        language: 'pt-BR',
    },
    headers: {
        "Authorization": `${apiKeyFortniteAPI}`
    }
};

// Realiza a consulta dos dados vindos da API.
async function fetchPlaylistsData() {
    try {
        const response = await axios.request(playlistsReq);
        console.log(response.data)
    } catch(error) {
        console.log(error);
    }
}

fetchPlaylistsData();

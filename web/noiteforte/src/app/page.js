// pages/index.js
"use client";
// pages/index.js
import Head from 'next/head';
import Header from './components/Header';
import FortniteItem from './components/FortniteItem';
import StatsDisplay from './components/StatsDysplay';
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statsData, setStatsData] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = async () => {
    if (searchTerm) {
      const apiKeyFortniteAPI = "52eae22a-3148-498a-a187-150fb89d0f77";
      const apiKeyFortniteAPIIo = "2b444249-94809a2e-b9c247b8-28dffd17";
  
      try {
        const idAccountResponse = await fetch(
          `https://fortnite-api.com/v2/stats/br/v2?name=${searchTerm}`,
          {
            headers: {
              Authorization: apiKeyFortniteAPI,
            },
          }
        );
        const idAccountData = await idAccountResponse.json();
  
        if (idAccountData.data) {
          const accountId = idAccountData.data.account.id;
  
          const statsAccountResponse = await fetch(
            `https://fortniteapi.io/v1/stats?account=${accountId}`,
            {
              headers: {
                Authorization: apiKeyFortniteAPIIo,
              },
            }
          );
          const statsAccountData = await statsAccountResponse.json();
  
          setStatsData(statsAccountData);
        } else {
          // Limpar dados se nenhum resultado for encontrado
          setStatsData(null);
        }
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        // Limpar dados em caso de erro
        setStatsData(null);
      }
    }
  };
  
  

  return (
    <div>
      <Head>
        <title>Noite Forte</title>
        <meta name="description" content="Fortnite Player Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen items-center justify-center p-24 bg-[#15171A]">
        <Header />
        <div className="w-full max-w-md text-center mt-16">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-120 h-40 mb-10"
          />

          <input
            type="text"
            placeholder="Digite seu nickname"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-fortnite-yellow text-black mb-4"
          />
          <button
            onClick={fetchData}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Pesquisar
          </button>

          <div className="w-full max-w-screen-lg ml-auto mr-auto">
            <StatsDisplay statsData={statsData} />
          </div>
          <div className="w-full max-w-screen-lg ml-auto mr-auto">
            <FortniteItem/>
          </div>
        </div>
      </main>
    </div>
  );
}

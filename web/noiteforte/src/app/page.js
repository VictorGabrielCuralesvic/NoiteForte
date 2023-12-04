// pages/index.js
"use client";
import Head from 'next/head';
import FortniteItem from './components/FortniteItem';
import FortniteStats from './components/FortniteStats';
import { useState } from 'react';

import fetchDataIdAccount from '../../../../server/src/stats'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playerStats, setPlayerStats] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const statsData = await fetchDataIdAccount(searchTerm);
      setPlayerStats(statsData);
    } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário (por exemplo, exiba uma mensagem de erro)
    }
  };

  return (
    <div>
      <Head>
        <title>Noite Forte</title>
        <meta name="description" content="Fortnite Player Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen items-center justify-center p-24 bg-fortnite-bg">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4 text-fortnite-text">Noite Forte pesquisa</h1>
          <input
            type="text"
            placeholder="Digite seu nickname"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-fortnite-yellow text-black mb-4"
          />
          <button 
            onClick={handleSearch}>Search
          </button>
          <div className="w-full max-w-screen-lg ml-auto mr-auto">
          <FortniteStats playerStats={playerStats} />
          <FortniteItem />
        </div>
        </div>
        
      </main>
    </div>
  );
}

// pages/index.js
"use client";
import Head from 'next/head';
import FortniteItem from './components/FortniteItem';
import Header from './components/Header';
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
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
            src="/logo.png" // Certifique-se de ajustar o caminho da imagem conforme necessário
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
          <div className="w-full max-w-screen-lg ml-auto mr-auto">
            <FortniteItem/>
          </div>
        </div>
        
      </main>
    </div>
  );
}

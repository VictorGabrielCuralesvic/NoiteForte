import Head from 'next/head';

export default function Home() {
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
          <div className="relative mx-auto">
            <input
              type="text"
              placeholder="digite seu nickname"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-fortnite-yellow text-black"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-5.2-5.2"></path>
                <path d="M15.5 10.5a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

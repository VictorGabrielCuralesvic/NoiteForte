import React from 'react';

const StatsDisplay = ({ statsData }) => {
  console.log('StatsData:', statsData);

  if (!statsData || !statsData.global_stats) {
    console.log('Nenhuma estatística disponível.');
    return <p className="text-red-500">Nenhuma estatística disponível.</p>;
  }

  const { solo, duo, squad } = statsData.global_stats;

  return (
    <div className="mt-8 p-4 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Estatísticas</h2>

      <div className="mb-8">
        {!solo ? (
          <p className="text-red-500">Nenhuma estatística solo disponível.</p>
        ) : (
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Solo</h3>
            <p>Vitórias: {solo.placetop1 || 'N/A'}</p>
            <p>Eliminações: {solo.kills || 'N/A'}</p>
            <p>Partidas jogadas: {solo.matchesplayed || 'N/A'}</p>
            <p>K/D Ratio: {solo.kd || 'N/A'}</p>
            <p>Top 10: {solo.placetop10 || 'N/A'}</p>
            {/* Adicione mais estatísticas conforme necessário */}
          </div>
        )}
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-2">Duo</h3>
        <p>Vitórias: {duo ? duo.placetop1 || 'N/A' : 'N/A'}</p>
        <p>Eliminações: {duo ? duo.kills || 'N/A' : 'N/A'}</p>
        <p>Partidas jogadas: {duo ? duo.matchesplayed || 'N/A' : 'N/A'}</p>
        <p>K/D Ratio: {duo ? duo.kd || 'N/A' : 'N/A'}</p>
        <p>Top 5: {duo ? duo.placetop5  || 'N/A' : 'N/A'}</p>
        {/* Adicione mais estatísticas conforme necessário */}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Squad</h3>
        <p>Vitórias: {squad ? squad.placetop1 || 'N/A' : 'N/A'}</p>
        <p>Eliminações: {squad ? squad.kills || 'N/A' : 'N/A'}</p>
        <p>Partidas jogadas: {squad ? squad.matchesplayed || 'N/A' : 'N/A'}</p>
        <p>K/D Ratio: {squad ? squad.kd || 'N/A' : 'N/A'}</p>
        <p>Top 3: {squad ? squad.placetop3 || 'N/A' : 'N/A'}</p>
        {/* Adicione mais estatísticas conforme necessário */}
      </div>
    </div>
  );
};

export default StatsDisplay;

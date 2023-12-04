import React from 'react';

const StatsDisplay = ({ statsData }) => {
  console.log('StatsData:', statsData);

  if (!statsData || !statsData.global_stats) {
    console.log('Nenhuma estatística disponível.');
    return <p>Nenhuma estatística disponível.</p>;
  }

  const { solo, duo, squad } = statsData.global_stats;

  return (
    <div>
      <h2>Estatísticas</h2>
      <div>
        {!solo ? (
          <p>Nenhuma estatística solo disponível.</p>
        ) : (
          <div>
            <h3>Solo</h3>
            <p>Vitórias: {solo.wins || 'N/A'}</p>
            <p>Eliminações: {solo.kills || 'N/A'}</p>
            {/* Adicione mais estatísticas conforme necessário */}
          </div>
        )}
      </div>
      <div>
        <h3>Duo</h3>
        <p>Vitórias: {duo ? duo.placetop1 : 'N/A'}</p>
        <p>Eliminações: {duo ? duo.kills : 'N/A'}</p>
        {/* Adicione mais estatísticas conforme necessário */}
      </div>
      <div>
        <h3>Squad</h3>
        <p>Vitórias: {squad ? squad.placetop1 : 'N/A'}</p>
        <p>Eliminações: {squad ? squad.kills : 'N/A'}</p>
        {/* Adicione mais estatísticas conforme necessário */}
      </div>
    </div>
  );
};

export default StatsDisplay;

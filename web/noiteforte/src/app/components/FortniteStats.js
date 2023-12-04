import { useEffect, useState } from 'react';
import fetchDataIdAccount from '../../../../../server/src/stats';

const FortniteStats = ({ playerStats }) => {
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (playerStats) {
          const data = await fetchDataIdAccount(playerStats);
          setStatsData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [playerStats]); // Adicione playerStats como dependência do useEffect

  return (
    <div>
      {statsData && (
        <div>
          <h1>Stats for {statsData.name}</h1>
          {/* Verifique se statsData.account está definido antes de acessar 'level' */}
          {statsData.account && (
            <p>Account Level: {statsData.account.level}</p>
          )}
          {/* Adicione mais renderizações conforme necessário */}
        </div>
      )}
    </div>
  );
};

export default FortniteStats;
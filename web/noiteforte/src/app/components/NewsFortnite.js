// components/NewsFortnite.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../../../../server/src/news';

const NewsFortnite = ({ newsType }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const data = await fetchData(newsType);

        // Verificar se a estrutura esperada está presente
        if (data && data.messages && Array.isArray(data.messages)) {
          setNewsData(data.messages);
        } else {
          setNewsData([]);
        }
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        setNewsData([]);
      }
    };

    fetchNewsData();
  }, [newsType]);

  return (
    <div>
      {newsData.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          {item.image && <img src={item.image} alt={item.title} />}
        </div>
      ))}
    </div>
  );
};

export default NewsFortnite;

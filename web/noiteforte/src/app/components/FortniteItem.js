// components/FortniteItem.js
import { useEffect, useState } from 'react';
import fetchData from '../../../../../server/src/shop.js';

const FortniteItem = ({ searchTerm }) => {
  const [items, setItems] = useState([]);
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchData();
      if (data) {
        setItems(data);
      }
    };

    fetchItems();
  }, [searchTerm]);

  const showNextPackage = () => {
    setCurrentPackageIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const showPreviousPackage = () => {
    setCurrentPackageIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold mb-2 text-fortnite-text">Shop</h1>
      {items.length > 0 && (
        <div className="border p-4 mb-4 rounded-md bg-[#08BDE6]">
          {/* Renderizar os detalhes do item */}
          {items[currentPackageIndex].bundle && items[currentPackageIndex].bundle.name && (
            <h2 className="text-xl font-bold mb-2 text-fortnite-text">
              {items[currentPackageIndex].bundle.name}
            </h2>
          )}
          {items[currentPackageIndex].bundle && items[currentPackageIndex].bundle.info && (
            <p className="text-gray-700">{items[currentPackageIndex].bundle.info}</p>
          )}
          {items[currentPackageIndex].regularPrice && (
            <p className="text-fortnite-text">
              Preço Regular: {items[currentPackageIndex].regularPrice} V-Bucks
            </p>
          )}
          {items[currentPackageIndex].finalPrice && (
            <p className="text-fortnite-text">
              Preço Final: {items[currentPackageIndex].finalPrice} V-Bucks
            </p>
          )}
          {items[currentPackageIndex].banner && items[currentPackageIndex].banner.value && (
            <p className={`text-fortnite-${items[currentPackageIndex].banner.value.toLowerCase()}`}>
              Desconto: {items[currentPackageIndex].banner.value}
            </p>
          )}
          {items[currentPackageIndex].giftable && (
            <p>Giftable: {items[currentPackageIndex].giftable ? 'Sim' : 'Não'}</p>
          )}
          {items[currentPackageIndex].refundable && (
            <p>Refundable: {items[currentPackageIndex].refundable ? 'Sim' : 'Não'}</p>
          )}

          {/* Renderizar os itens do bundle */}
          {items[currentPackageIndex].items &&
            items[currentPackageIndex].items.map((bundleItem, bundleIndex) => (
              <div key={bundleIndex} className="border p-4 mb-4 rounded-md bg-[#cecece]">
                <h3 className="text-lg font-bold mb-2 text-fortnite-text">
                  {bundleItem.name}
                </h3>
                {bundleItem.description && (
                  <p className="text-gray-700">{bundleItem.description}</p>
                )}
                {bundleItem.type && bundleItem.type.displayValue && (
                  <p className="text-fortnite-text">
                    Tipo: {bundleItem.type.displayValue}
                  </p>
                )}
                {bundleItem.rarity && bundleItem.rarity.displayValue && (
                  <p className={`text-fortnite-${bundleItem.rarity.displayValue.toLowerCase()}`}>
                    Raridade: {bundleItem.rarity.displayValue}
                  </p>
                )}
                {bundleItem.series && bundleItem.series.text && (
                  <p>Série: {bundleItem.series.text}</p>
                )}
                {bundleItem.images && bundleItem.images.icon && (
                  <img src={bundleItem.images.icon} alt="Ícone" className="my-2 mx-auto" />
                )}
              </div>
            ))}
        </div>
      )}

      {items.length > 1 && (
        <div className="flex justify-between mt-4">
        <button onClick={showPreviousPackage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Pacote Anterior
        </button>
        <button onClick={showNextPackage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Próximo Pacote
        </button>
      </div>
      )}
    </div>
  );
};

export default FortniteItem;

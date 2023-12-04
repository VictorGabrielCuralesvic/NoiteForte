// components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setHeaderVisible(isScrollingUp || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-gray-800 text-white w-full top-0 z-10 ${
        isHeaderVisible ? 'fixed' : 'hidden'
      }`}
    >
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Stats Fortnite</h1>
      </div>
    </header>
  );
};

export default Header;

'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import './carousel.css';

const products = [
  {
    brand: 'COTTON JERSEY',
    name: 'T-SHIRT',
    price: '₹4,450',
    image: 'https://m.media-amazon.com/images/I/418y201FIEL.jpg',
  },
  {
    brand: 'COTTON RIB',
    name: 'TANK',
    price: '₹3,550',
    image: 'https://m.media-amazon.com/images/I/61QTT-IViML._SX466_.jpg',
  },
  {
    brand: 'COTTON JERSEY',
    name: 'STRAIGHT LEG PANT',
    price: '₹6,350',
    image: 'https://m.media-amazon.com/images/I/51qlrWRKFjL._SX342_.jpg',
  },
  {
    brand: 'COTTON JERSEY',
    name: 'CAMI',
    price: '₹4,100',
    image: 'https://m.media-amazon.com/images/I/8172PqRe-lL._SX425_.jpg',
  },
  {
    brand: 'COTTON JERSEY',
    name: 'FOLDOVER PANT',
    price: '₹6,350',
    image: 'https://m.media-amazon.com/images/I/61tDIT6vzgL._SX466_.jpg',
  },
  {
    brand: 'SOFT LOUNGE',
    name: 'LONG SLIP DRESS',
    price: '₹7,450',
    image: 'https://m.media-amazon.com/images/I/61DROL-Jr0L._SX425_.jpg',
  },
];

const ProductCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const updateItemWidth = () => {
      if (itemRef.current) {
        const style = getComputedStyle(itemRef.current);
        const width = itemRef.current.offsetWidth;
        const marginRight = parseInt(style.marginRight || '0');
        setItemWidth(width + marginRight);
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current && itemWidth) {
      scrollRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && itemWidth) {
      scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && itemWidth) {
        const index = Math.round(scrollRef.current.scrollLeft / itemWidth) + 1;
        setCurrentIndex(index);
      }
    };

    const ref = scrollRef.current;
    ref?.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, [itemWidth]);

  return (
    <section className="px-4 sm:px-6 py-12">
      {/* Title + Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-bold uppercase">The Latest Lighting Designs</h2>
        <div className="w-full sm:w-auto flex justify-between items-center text-sm sm:justify-start gap-4">
          <ChevronLeft className="cursor-pointer" onClick={scrollLeft} />
          <span>{currentIndex} / {products.length}</span>
          <ChevronRight className="cursor-pointer" onClick={scrollRight} />
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {products.map((item, index) => (
          <div
            ref={index === 0 ? itemRef : null}
            key={index}
            className="min-w-[160px] sm:min-w-[200px] flex-shrink-0 border border-gray-200 p-4 text-left bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 sm:h-64 object-contain mb-2"
            />
            <p className="text-xs tracking-wide text-gray-500 uppercase">{item.brand}</p>
            <p className="font-bold uppercase text-sm mt-1">{item.name}</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm font-medium">{item.price}</p>
              <Heart size={18} className="cursor-pointer text-gray-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;

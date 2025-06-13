'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  name: string;
  category: string;
  image: string;
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      // Avoid duplicates
      if (prev.some((item) => item.name === product.name)) return prev;
      return [...prev, product];
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}

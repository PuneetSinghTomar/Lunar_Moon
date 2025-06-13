'use client';

import React, { useState } from 'react';
import { Slider } from '@/components/Slider';
import { Checkbox } from '@/components/Checkbox';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/Select';
import { Card, CardContent } from '@/components/Card';
import { Heart, Shuffle, Eye } from 'lucide-react';
import { Button } from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const categories = [
  { name: 'Armchairs', count: 5 },
  { name: 'Chairs', count: 6 },
  { name: 'Storage', count: 6 },
  { name: 'Sofas', count: 6 },
  { name: 'Decor', count: 8 },
  { name: 'Tables', count: 5 },
  { name: 'Beds', count: 9 },
];

const brands = [
  { name: 'Goldline', logo: 'https://sc04.alicdn.com/kf/H12ab236589ef4fd6a01278a3735b397cC.jpg' },
  { name: 'Magnolia', logo: 'https://m.media-amazon.com/images/S/abs-image-upload-na/1/AmazonStores/A21TJRUUN4KGV/b4ab731ae296a2475a6903a1f81b03d6.w1108.h622.jpg' },
  { name: 'Boltshift', logo: 'https://play-lh.googleusercontent.com/XvAfyuOh9a1VxOLxPrZFk_E_K_5DLNN2uTkKIhe0XX3BONkGrB6VN53zhqidLwIIcRM' },
  { name: 'Contrast', logo: 'https://images.squarespace-cdn.com/content/v1/5b2503eb372b969144a8457b/1551973919835-EA2IYIT8EQVUGBUHWLM8/Logos_xergy.jpg?format=1000w' },
  { name: 'Asgardia', logo: 'https://static.wixstatic.com/media/2748c0_77afa08d8df44a25a82137311076ddf5~mv2.png' },
  { name: 'Komplex', logo: 'https://m.media-amazon.com/images/S/abs-image-upload-na/9/AmazonStores/ATVPDKIKX0DER/f1cfb924f9a788d8ef172133d38c47f3.w400.h400.jpg' },
];

const bestSellers = [
  {
    name: 'Tellus Convallis',
    price: 849,
    oldPrice: 950,
    image: 'https://a.media-amazon.com/images/I/81He7NmRmGL._SX425_.jpg',
  },
  {
    name: 'Hendre Quisque',
    price: 949,
    oldPrice: 1200,
    image: 'https://m.media-amazon.com/images/I/61qdXgb+j5L._SX342_.jpg',
  },
  {
    name: 'Dolore Magna',
    price: 1000,
    oldPrice: 1500,
    image: 'https://m.media-amazon.com/images/I/61bVmanbmnL._SX385_.jpg',
  },
];

const products = [
  {
    id: 1,
    name: 'Litehom LED Net Mesh String Lights, 9.8Ft X 6.6Ft, 192 LEDs, 8 Modes Diwali Decor with Diwali Lights for Home Decoration! LED Diwali Light, LED Lights for Home Decoration (3x2 Net Warm-White)',
    price: 949,
    image: 'https://m.media-amazon.com/images/I/71UgheV+V+L._SX342_.jpg',
    category: 'Decor',
  },
  {
    id: 2,
    name: 'LITVERSE String Lights for Outside 25 FT, Outdoor Lights for Patio with 25 +1 Shatterproof LED Edison Bulbs, G40 Waterproof Connectable Hanging Lights for Backyard Bistro Party Balcony',
    price: 1898,
    image: 'https://m.media-amazon.com/images/I/810cVey3TwL._SX466_.jpg',
    category: 'Decor',
  },
  {
    id: 3,
    name: 'Lyse Decor Wall Hanging Light for Home Decoration, Wall Lights for Living Room Modern, Bedroom Lamp (Handcrafted Glass, Multi-Color, 11 Inch)',
    category: 'Tables',
    image: 'https://a.media-amazon.com/images/I/81He7NmRmGL._SX425_.jpg',
    price: 849,
  },
  {
    id: 4,
    name: 'LIGHTANGLE Wooden Surface with Fabric Mounted Wall Lamps (Beige)',
    category: 'Beds',
    image: 'https://a.media-amazon.com/images/I/81KclQFseDL._SX522_.jpg',
    price: 849,
  },
  {
    id: 5,
    name: 'Groeien 15watt LED Sconce Modern Transparent Indoor Home Acrylic Wall Lamp',
    category: 'Chairs',
    image: 'https://a.media-amazon.com/images/I/61V2HR7YiqL._SX522_.jpg',
    price: 949,
  },
  {
    id: 5,
    name: 'LEGEEN 18W Colour Changing Led Wall Light ',
    category: 'Chairs',
    image: 'https://m.media-amazon.com/images/I/51-xcJuiw1L._SX466_.jpg',
    price: 1499
,
  },
  {
    id: 5,
    name: 'Groeien 15watt LED Sconce Modern Transparent Indoor Home Acrylic Wall Lamp',
    category: 'Chairs',
    image: 'https://m.media-amazon.com/images/I/61qdXgb+j5L._SX342_.jpg',
    price: 949,
  },
  {
    id: 5,
    name: 'CITRA Crystal Design Glass Modern LED Chandelier 600 MM Ring',
    category: 'Chairs',
    image: 'https://m.media-amazon.com/images/I/61bVmanbmnL._SX385_.jpg',
    price: 24999,
  },
  {
    id: 5,
    name: 'CITRA Metal 15 Light Arc Flower Ceiling Led Chandelier Lamp - Warm White',
    category: 'Chairs',
    image: 'https://m.media-amazon.com/images/I/511mqEpQvXL._SX385_.jpg',
    price: 16999,
  },
];

export default function ShopHero() {
  const [price, setPrice] = useState<[number, number]>([40, 1300]);
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    if (!product || !product.id) {
      console.error("Invalid product object:", product);
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      {/* Banner */}
      <div className="relative h-[300px] rounded-3xl overflow-hidden">
        <Image
          src="https://content.jdmagicbox.com/comp/bhubaneshwar/c3/0674px674.x674.200130223455.v2c3/catalogue/lushh-lamps-gajapati-nagar-bhubaneshwar-fancy-light-dealers-2q7ctst0xc.jpg"
          alt="Shop Banner"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Shop</h1>
          <p className="text-sm md:text-base">
            <span className="opacity-80">HOME</span> <span className="mx-2">›</span> SHOP
          </p>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="p-6 mt-4 grid grid-cols-1 lg:grid-cols-5 gap-6 bg-linen mb-4 rounded-xl">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8 bg-linen border border-black rounded-xl p-4">
          {/* Price */}
          <div>
            <h2 className="font-semibold mb-4">Filter by price</h2>
            <Slider
              defaultValue={[40, 1300]}
              min={0}
              max={2000}
              step={10}
              onValueChange={(val: [number, number]) => setPrice(val)}
            />
            <p className="mt-2 text-sm">Price: ₹{price[0]} - ₹{price[1]}</p>
          </div>

          {/* Category */}
          <div>
            <h2 className="font-semibold mb-4">Filter by category</h2>
            <div className="space-y-3">
              {categories.map((cat) => (
                <div key={cat.name} className="flex justify-between items-center">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>{cat.name}</span>
                  </label>
                  <span className="text-sm text-gray-500">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Filter by brand</h2>
            <div className="grid grid-cols-3 gap-4">
              {brands.map((brand) => (
                <button key={brand.name} className="border rounded-md p-2 hover:shadow transition">
                  <Image src={brand.logo} alt={brand.name} width={80} height={40} className="object-contain mx-auto" />
                </button>
              ))}
            </div>
          </div>

          {/* Best Sellers */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Best selling products</h2>
            <div className="space-y-6">
              {bestSellers.map((product) => (
                <div key={product.name} className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image src={product.image} alt={product.name} fill className="rounded object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-700">
                      ₹{product.price.toFixed(2)}{' '}
                      {product.oldPrice && (
                        <span className="line-through text-gray-400 ml-1">
                          ₹{product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="lg:col-span-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">SHOWING 1–{products.length} OF {products.length} RESULTS</span>
            <Select defaultValue="default">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Default sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default sorting</SelectItem>
                <SelectItem value="priceLowHigh">Price: Low to High</SelectItem>
                <SelectItem value="priceHighLow">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="text-center p-4">
                <Link href="/Category/Product">
                  <div className="relative h-48 mb-4">
                    <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain' }} className="rounded" />
                    <div className="absolute right-2 top-2 space-y-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToWishlist(product);
                        }}
                        className="bg-white p-1 rounded-full hover:bg-gray-200"
                      >
                        <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 cursor-pointer" />
                      </button><br />
                      <button className="bg-white p-1 rounded-full hover:bg-gray-200">
                        <Shuffle className="w-5 h-5 text-gray-700 hover:text-blue-500 cursor-pointer" />
                      </button><br />
                      <button className="bg-white p-1 rounded-full hover:bg-gray-200">
                        <Eye className="w-5 h-5 text-gray-700 hover:text-green-500 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </Link>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 uppercase">{product.category}</p>
                  <div className="flex justify-between items-center border-t px-4 py-3">
                    <span className="font-semibold text-gray-800">₹{product.price.toFixed(2)}</span>
                    <Link href="/Category/Cart">
                      <Button
                        variant="ghost"
                        className="text-orange-600 hover:text-orange-800"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to cart
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

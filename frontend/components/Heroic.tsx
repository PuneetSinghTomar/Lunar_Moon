'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative isolate min-h-screen flex flex-col bg-black mt-0">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="vedeos/5834595-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-8 text-center text-linen relative z-10">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          Brighten Every Corner with Elegance.
        </h1>
        <p className="mt-6 text-lg sm:text-xl font-medium max-w-2xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/Category/Shop"
            className="rounded-full 
                       border border-linen 
                       text-linen 
                       bg-transparent 
                       font-medium 
                       transition 
                       duration-300 
                       ease-in-out 
                       hover:bg-linen 
                       hover:text-black 
                       px-8 py-3 
                       text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

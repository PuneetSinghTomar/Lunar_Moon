'use client';

import { useCart } from '@/app/Category/context/CartContext';
import { useWishlist } from '@/app/Category/context/WishlistContext';
import { useState, useEffect } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import {
  Archive,
  Armchair,
  Bed,
  LayoutPanelLeft,
  Flower2,
  MapPin,
  Phone,
  Sofa,
  Table,
  Heart
} from 'lucide-react';
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/Category/Shop' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const bgColor = 'bg-linen';
  const textColor = 'text-black';
  const iconColor = 'text-black';

  const { wishlist } = useWishlist();
  const { cartItems } = useCart();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  return (
    <>
      <Disclosure as="nav" className={classNames('fixed w-full top-0 z-50 transition-all duration-300', bgColor)}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <img className="h-12 w-auto" src="/lunar.png" alt="Logo" />
                </div>

                <div className="hidden sm:flex space-x-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className={classNames(textColor, 'text-sm font-medium hover:underline')}>
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="hidden sm:flex items-center gap-4 relative">
                  <div className={classNames('flex items-center gap-1 text-sm font-medium', textColor)}>
                    <img src="https://flagcdn.com/in.svg" alt="India" className="h-4 w-6 object-cover rounded-sm" />
                    <span>INR</span>
                  </div>

                  <MagnifyingGlassIcon className={`h-6 w-6 ${iconColor} cursor-pointer`} />
                  <UserIcon className={`h-6 w-6 ${iconColor} cursor-pointer`} />

                  <div className="relative">
                    <Link href="/Category/Wishlist">
                      <Heart className="w-6 h-6 text-gray-800" />
                      {wishlist.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                          {wishlist.length}
                        </span>
                      )}
                    </Link>
                  </div>

                  <div className="relative">
                    <Link href="/Category/Cart">
                      <ShoppingBagIcon className={`h-6 w-6 ${iconColor} cursor-pointer`} />
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                          {cartCount}
                        </span>
                      )}
                    </Link>
                  </div>
                </div>

                <div className="sm:hidden flex items-center">
                  <DisclosureButton className={`inline-flex items-center justify-center rounded-md p-2 ${textColor}`}>
                    {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-4 pt-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames('block rounded-md px-3 py-2 text-base font-medium', textColor, 'hover:bg-gray-700')}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 p-4 border-t">
                {[{ icon: LayoutPanelLeft, label: 'Living Room' }, { icon: Archive, label: 'Kitchen' }, { icon: Armchair, label: 'Chandeliers' }, { icon: Sofa, label: 'Balcony' }, { icon: Bed, label: 'Bedroom' }, { icon: Table, label: 'Office' }, { icon: Flower2, label: 'Outdoor' }]
                  .map((cat) => (
                    <div key={cat.label} className="flex items-center gap-2">
                      <cat.icon size={20} />
                      <span className="text-sm">{cat.label}</span>
                    </div>
                  ))}
              </div>

              <div className="flex flex-wrap justify-between items-center gap-6 p-4 border-t">
                <div className="flex items-center gap-2">
                  <img src="https://flagcdn.com/in.svg" alt="India" className="h-4 w-6 object-cover rounded-sm" />
                  <span>INR</span>
                </div>

                <div className="flex items-center gap-4">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                  <UserIcon className="h-6 w-6" />

                  <div className="relative">
                    <HeartIcon className="h-6 w-6" />
                    {wishlist.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                        {wishlist.length}
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <ShoppingBagIcon className="h-6 w-6" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <div className="hidden sm:flex justify-between items-center px-4 py-6 flex-wrap gap-4 text-sm text-gray-800 border-t mt-16">
        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2"><LayoutPanelLeft size={20} /><span>Living Room</span></div>
          <div className="flex items-center gap-2"><Archive size={20} /><span>Kitchen</span></div>
          <div className="flex items-center gap-2"><Armchair size={20} /><span>Chandeliers</span></div>
          <div className="flex items-center gap-2"><Sofa size={20} /><span>Balcony</span></div>
          <div className="flex items-center gap-2"><Bed size={20} /><span>Bedroom</span></div>
          <div className="flex items-center gap-2"><Table size={20} /><span>Office</span></div>
          <div className="flex items-center gap-2"><Flower2 size={20} /><span>Outdoor</span></div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="rounded-full border p-2"><MapPin size={16} /></div>
            <div>
              <p className="font-semibold text-sm">Address:</p>
              <p className="text-gray-600">Street Name, NY 38954</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full border p-2"><Phone size={16} /></div>
            <div>
              <p className="font-semibold text-sm">Phone:</p>
              <p className="text-gray-600">578-393-4937</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linen text-black dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/lunar.png"
                alt="Flowbite Logo"
                className="h-40 me-3 w-40"
                width={32}
                height={32}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Resources</h2>
              <ul className="text-black dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="https://flowbite.com/" className="hover:underline">Flowbite</Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Follow us</h2>
              <ul className="text-black dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="https://github.com/themesberg/flowbite" className="hover:underline">Github</Link>
                </li>
                <li>
                  <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Legal</h2>
              <ul className="text-black dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black sm:text-center dark:text-gray-400">
            © {currentYear} <Link href="https://flowbite.com/" className="hover:underline">LUNAR™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-6">
            <Link href="https://facebook.com" target="_blank" className="text-black hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-black hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://wa.me/1234567890" target="_blank" className="text-black hover:text-green-500">
              <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

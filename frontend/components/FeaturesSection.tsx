'use client'

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'
import { FC } from 'react'

type Feature = {
  name: string
  description: string
  icon: FC<React.SVGProps<SVGSVGElement>>
}

const features: Feature[] = [
  {
    name: 'Push to deploy',
    description: 'Morbi viverra dui mi arcu sed...',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description: 'Sit quis amet rutrum tellus...',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description: 'Quisque est vel vulputate cursus...',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description: 'Arcu egestas dolor vel iaculis...',
    icon: FingerPrintIcon,
  },
]

export default function FeaturesSection() {
  const categories = [
    {
      img: 'https://images.unsplash.com/photo-1611945380572-2b2293cb33c3?fm=jpg&q=60&w=3000',
      label: 'Bedroom',
    },
    {
      img: 'https://images.unsplash.com/photo-1568482077316-1896b28e05d2?fm=jpg&q=60&w=3000',
      label: 'Hall',
    },
    {
      img: 'https://images.unsplash.com/photo-1660324768494-9cde168d198f?fm=jpg&q=60&w=3000',
      label: 'Outdoor',
    },
  ]

  return (
    <div className=" my-10 px-6 py-10 sm:px-8 lg:px-12 rounded-3xl">
      <div className="bg-linen my-10 px-6 py-10 mx-auto max-w-7xl rounded-3xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Here are the Categories for Fancy Lights
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-center gap-8 sm:flex-row">
          {categories.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Hover Group only wraps the image */}
              <div className="group relative">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-[350px] rounded-xl shadow-lg"
                />
                {/* Button overlay on image hover */}
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="
                    px-6 py-2 
                    rounded-full 
                    border border-linen 
                    text-linen 
                    bg-transparent 
                    font-medium 
                    transition 
                    duration-300 
                    ease-in-out 
                    hover:bg-linen 
                    hover:text-black
                  ">
                    Shop Now
                  </button>
                </div>
              </div>
              {/* Label stays outside the hover group */}
              <p className="mt-2 text-xl font-semibold text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

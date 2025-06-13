'use client'

import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'

const bras = [
  {
    brand: 'FITS EVERYBODY',
    name: 'T-SHIRT BRA',
    price: '$5,050',
    image: 'https://m.media-amazon.com/images/I/51MEMUpzQ5L._SX342_.jpg',
  },
  {
    brand: 'SKIMS ULTIMATE',
    name: 'TEARDROP PUSH-UP BRA',
    price: '$5,950',
    image: 'https://m.media-amazon.com/images/I/618QGnRsq4L._SX679_.jpg',
  },
  {
    brand: 'SKIMS ULTIMATE',
    name: 'BALCONETTE PUSH-UP BRA',
    price: '$5,950',
    image: 'https://m.media-amazon.com/images/I/41cMd7w+eqL._SX522_.jpg',
  },
  {
    brand: 'FITS EVERYBODY',
    name: 'PUSH-UP BRA',
    price: '$5,400',
    image: 'https://m.media-amazon.com/images/I/71SQXvl47OL._SY450_.jpg',
  },
  {
    brand: 'FITS EVERYBODY',
    name: 'T-SHIRT BRA',
    price: '$5,050',
    image: 'https://m.media-amazon.com/images/I/51MEMUpzQ5L._SX342_.jpg',
  },
]

const SideCarasoul: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [visibleIndex, setVisibleIndex] = useState(1)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return
      const scrollLeft = scrollRef.current.scrollLeft
      const itemWidth = 200 + 24 // width + gap
      const index = Math.round(scrollLeft / itemWidth) + 1
      setVisibleIndex(index)
    }

    const current = scrollRef.current
    current?.addEventListener('scroll', handleScroll)
    return () => current?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-linen border-y border-black">
      <section className="px-4 py-2">
        <h2 className="text-2xl font-bold mb-1">BEST IN FANCY LIGHTING</h2>
        <p className="text-sm text-gray-600 mb-6">
          Everyone is switching to SKIMS bras – you’re next
        </p>

        <div className="flex items-center justify-between mb-4">
          <button onClick={scrollLeft}>
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm">
            {visibleIndex} / {bras.length}
          </span>
          <button onClick={scrollRight}>
            <ChevronRight size={20} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {bras.map((bra, index) => (
            <div
              key={index}
              className="min-w-[200px] max-w-[200px] flex-shrink-0 border rounded-xl p-3 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={bra.image}
                alt={bra.name}
                className="w-full h-48 object-cover rounded"
              />
              <p className="text-xs mt-2 text-black tracking-wide uppercase">
                {bra.brand}
              </p>
              <p className="font-semibold text-sm mt-1">{bra.name}</p>
              <div className="flex justify-between items-center mt-1 px-1">
                <p className="text-sm font-medium">{bra.price}</p>
                <Heart size={18} className="cursor-pointer text-gray-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="text-sm font-medium underline">SHOP ALL</button>
        </div>
      </section>
    </div>
  )
}

export default SideCarasoul

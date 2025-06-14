'use client'

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
    <div className="my-10 px-6 py-10 sm:px-8 lg:px-12 rounded-3xl">
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
              <div className="group relative">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-[350px] rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    className="
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
                    "
                  >
                    Shop Now
                  </button>
                </div>
              </div>
              <p className="mt-2 text-xl font-semibold text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

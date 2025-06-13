"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500">
          Your wishlist is empty. <br />
          <Link href="/Category/Shop">
            <Button className="mt-4 rounded-full bg-orange-400 hover:bg-orange-600">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="md:col-span-2 space-y-6">
          {/* Header row */}
          <div className="hidden sm:grid grid-cols-3 font-semibold border-b pb-2 text-sm">
            <div>Product</div>
            <div className="text-center">Price</div>
            <div className="text-right"></div>
          </div>

          {/* Wishlist items */}
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:grid sm:grid-cols-3 items-center border-b py-4 gap-4 sm:gap-0"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                />
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-sm text-gray-500">ID: {item.id}</p>
                </div>
              </div>

              {/* Price */}
              <div className="text-center w-full sm:w-auto text-sm">
                ₹{item.price.toFixed(2)}
              </div>

              {/* Actions */}
              <div className="flex justify-end items-center w-full sm:w-auto gap-2">
                <Link href="/Category/Shop">
                  <Button className="rounded-full px-4 py-2 text-sm bg-orange-400 hover:bg-orange-600">
                    Add to Cart
                  </Button>
                </Link>
                <Trash2
                  className="cursor-pointer text-red-500"
                  size={20}
                  onClick={() => removeFromWishlist(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

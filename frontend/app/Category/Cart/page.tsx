"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Cart Items */}
        <div className="md:col-span-2 space-y-6">
          <div className="hidden sm:grid grid-cols-3 font-semibold border-b pb-2 text-sm">
            <div>Product</div>
            <div className="text-center">Quantity</div>
            <div className="text-right">Subtotal</div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:grid sm:grid-cols-3 items-center border-b py-4 gap-4 sm:gap-0"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                />
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-sm">₹{item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex justify-center w-full sm:w-auto">
                <div className="flex items-center border rounded-full px-4 py-1 gap-4">
                  <Minus
                    size={16}
                    className="cursor-pointer"
                    onClick={() => decreaseQuantity(item.id)}
                  />
                  <span>{item.quantity}</span>
                  <Plus
                    size={16}
                    className="cursor-pointer"
                    onClick={() => increaseQuantity(item.id)}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center w-full sm:w-auto sm:justify-end gap-2">
                <p className="text-right">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <Trash2
                  className="cursor-pointer"
                  size={18}
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            </div>
          ))}

          {/* Coupon section */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <input
              type="text"
              placeholder="Coupon code"
              className="border rounded-full px-6 py-3 w-full sm:w-auto"
            />
            <Button className="rounded-full px-6 py-3 w-full sm:w-auto bg-orange-400 hover:bg-orange-600">
              Apply coupon
            </Button>
          </div>
        </div>

        {/* Right - Summary */}
        <div className="border rounded-2xl p-10 space-y-6 shadow-sm">
          <h3 className="text-lg font-semibold">Cart totals</h3>

          <div className="flex justify-between items-center border-b-[0.5px] border-gray-300 pb-2 gap-8">
            <span>Subtotal</span>
            <span className="text-right">₹{total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center font-bold gap-8">
            <span>Total</span>
            <span className="text-right">₹{total.toFixed(2)}</span>
          </div>

          {/* Free shipping logic */}
          {total >= 2000 ? (
            <p className="text-sm text-green-600 font-medium">
              Shipment is free 🎉
            </p>
          ) : (
            <>
              <p className="text-sm text-muted-foreground">
                Add ₹{(2000 - total).toFixed(2)} more to get free shipping!
              </p>
              <div className="w-full bg-gray-200 h-1 rounded-full">
                <div
                  className="h-1 bg-orange-600 rounded-full"
                  style={{ width: `${(total / 2000) * 100}%` }}
                ></div>
              </div>
            </>
          )}

          <Link
  href="/Category/Checkout"
  className="w-full"
  onClick={() => {
    localStorage.setItem("checkoutItems", JSON.stringify(cartItems));
    localStorage.setItem("checkoutTotal", JSON.stringify(total));
  }}
>
  <Button className="mt-6 w-full rounded-full text-white text-md text-center bg-orange-400 hover:bg-orange-600">
    Proceed to checkout
  </Button>
</Link>

        </div>
      </div>
    </div>
  );
};

export default Cart;

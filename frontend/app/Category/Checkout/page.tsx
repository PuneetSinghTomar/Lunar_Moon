"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { Bell } from "lucide-react";
const checkoutItems = [
  {
    id: 1,
    name: "Augue Mauris",
    price: 85,
    image: "/chair-1.png",
  },
  {
    id: 2,
    name: "Eleifend Donec",
    price: 580,
    image: "/chair-2.png",
  },
];

  const subtotal = 665;
  const total = 665;
  const freeShippingThreshold = 2000;
  const amountToFreeShipping = freeShippingThreshold - total;
  const progressWidth = (total / freeShippingThreshold) * 100;

export default function CheckoutPage() {
const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);
  const [total, setTotal] = useState(0);

  // Fetch from localStorage
  useEffect(() => {
    const storedItems = localStorage.getItem('checkoutItems');
    if (storedItems) {
      const items = JSON.parse(storedItems).map((item: any) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setCheckoutItems(items);
    }
  }, []);

  // Update total when items or quantities change
  useEffect(() => {
    const totalAmount = checkoutItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, [checkoutItems]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCheckoutItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const freeShippingThreshold = 2000;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - total);
  const progressWidth = Math.min((total / freeShippingThreshold) * 100, 100);  return (
    <div className="p-4 sm:p-8 md:p-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Billing details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-medium">First name <span className="text-red-500">*</span></label>
              <input className="w-full border rounded-full px-4 py-2" defaultValue="Puneet" />
            </div>
            <div>
              <label className="font-medium">Last name <span className="text-red-500">*</span></label>
              <input className="w-full border rounded-full px-4 py-2" defaultValue="Tomar" />
            </div>
          </div>

          <div>
            <label className="font-medium">Company name (optional)</label>
            <input className="w-full border rounded-full px-4 py-2" />
          </div>

          <div>
            <label className="font-medium">Country / Region <span className="text-red-500">*</span></label>
            <select className="w-full border rounded-full px-4 py-2">
              <option>India</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Street address <span className="text-red-500">*</span></label>
            <input className="w-full border rounded-full px-4 py-2" placeholder="House Number and Street Name" />
          </div>
          <div>
            <label className="font-medium"> <span className="text-red-500"></span></label>
            <input className="w-full border rounded-full px-4 py-2" placeholder="Apartment, suite, unit, etc. (optional)" />
          </div>
          <div>
            <label className="font-medium">Town/ City <span className="text-red-500">*</span></label>
            <input className="w-full border rounded-full px-4 py-2" placeholder="Enter The City/ Town" />
          </div>
           <div>
            <label className="font-medium">State <span className="text-red-500">*</span></label>
            <input className="w-full border rounded-full px-4 py-2" placeholder="Enter The State" />
          </div>
          <div>
            <label className="font-medium">PIN Code <span className="text-red-500">*</span></label>
            <input className="w-full border rounded-full px-4 py-2" placeholder="Enter The PIN Code" />
          </div>
          <div>
            <label className="font-medium">Phone Number <span className="text-red-500">*</span></label>
            <input className="w-full border rounded-full px-4 py-2" placeholder="Enter The Phone Number" />
          </div>
          <div>
            <label className="font-medium">Email Address <span className="text-red-500">*</span></label>
            <input className="w-full border rounded-full px-4 py-2" type="email" placeholder="Enter The Email Address" />
          </div>
          <div className="space-y-4">
      <h3 className="text-lg font-semibold">Additional information</h3>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Order notes (optional)
        </label>
        <textarea
          placeholder="Notes about your order, e.g. special notes for delivery."
          className="w-full rounded-2xl border border-gray-300 p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          rows={5}
        />
      </div>
    </div>
        </div>

        {/* Order Summary */}
        <div className="border rounded-2xl p-6 space-y-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Your order</h2>

          <div className="grid grid-cols-2 font-medium border-b pb-2">
            <span>Product</span>
            <span className="text-right">Subtotal</span>
          </div>

          {checkoutItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-2 items-center py-4 border-b last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <p>{item.name}</p>
                  <div className="flex items-center border rounded-full px-4 py-1 gap-4 mt-1">
                    <Minus
                      size={16}
                      className="cursor-pointer"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    />
                    <span>{item.quantity}</span>
                    <Plus
                      size={16}
                      className="cursor-pointer"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    />
                  </div>
                </div>
              </div>
              <p className="text-right font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="space-y-6">
            {/* Subtotal and Total */}
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span className="text-md font-semibold">Subtotal</span>
                <span className="text-md font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-md font-semibold">Total</span>
                <span className="text-md font-semibold">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Free Shipping Progress */}
            <div className="space-y-2">
              <p className="text-sm">
                Add ${amountToFreeShipping.toFixed(2)} more to get free shipping!
              </p>
              <div className="w-full bg-gray-200 h-1 rounded-full">
                <div
                  className="h-1 bg-orange-600 rounded-full"
                  style={{ width: `${progressWidth}%` }}
                ></div>
              </div>
            </div>

            {/* Payment Error Message */}
            <div className="flex items-start gap-3 bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
              <Bell className="h-5 w-5 mt-1" />
              <p>
                Sorry, it seems that there are no available payment methods. Please{' '}
                <a href="/contact" className="text-teal-800 underline">
                  contact us
                </a>{' '}
                if you require assistance or wish to make alternate arrangements.
              </p>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 leading-relaxed">
              Your personal data will be used to process your order, support your
              experience throughout this website, and for other purposes described in
              our{' '}
              <a href="/privacy-policy" className="text-orange-600 underline">
                privacy policy
              </a>
              .
            </p>

            {/* Place Order Button */}
            <button className="w-full bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 rounded-full text-md">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

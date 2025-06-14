"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Carousel from "@/components/Carousel";

const tabs = [
  { label: "Description", key: "description" },
  { label: "Additional Information", key: "additionalInformation" },
  { label: "Reviews (0)", key: "reviews" },
];

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState(0);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="text-gray-700 leading-7 space-y-4 mt-6">
            <p>Sit amet nulla facilisi morbi tempus iaculis...</p>
            <p>Porttitor lacus luctus accumsan tortor...</p>
            <p>Quis varius quam quisque id...</p>
            <p>Augue interdum velit euismod...</p>
          </div>
        );
      case "additionalInformation":
        return (
          <div className="text-gray-700 mt-6">
            <p>Here you can add extra specifications or features related to the product.</p>
          </div>
        );
      case "reviews":
        return (
          <div className="max-w-6xl mx-auto p-6 mt-10">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left side: Reviews */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
                <p className="text-gray-600">There are no reviews yet.</p>
              </div>

              {/* Right side: Leave a Review Form */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  Be the first to review <span className="italic">"Aliquam Blandit"</span>
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                </p>

                {/* Rating */}
                <div className="mb-6">
                  <span className="text-sm font-semibold text-gray-700 block mb-2">
                    YOUR RATING <span className="text-red-500">*</span>
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={24}
                        className={`cursor-pointer ${rating >= star ? "text-orange-400" : "text-gray-300"}`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Review Text */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                    placeholder="Write your review here..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-sm">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="https://a.media-amazon.com/images/I/81He7NmRmGL._SX425_.jpg"
              alt="Aliquam Blandit Table"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-sm text-gray-500 space-x-2">
            <span>Home</span> {">"} <span>Shop</span> {">"} <span>Tables</span> {">"} <span>Aliquam Blandit</span>
          </div>
          <h1 className="text-3xl font-bold">Aliquam Blandit</h1>
          <p className="text-2xl font-semibold text-gray-800">$320.00</p>
          <div className="space-y-4 text-gray-600 text-sm">
            <p>Porttitor lacus luctus accumsan tortor posuere ac ut...</p>
            <p>Facilisis gravida neque convallis a cras semper auctor...</p>
          </div>
          <div className="flex items-center gap-4 pt-6 border-t">
            <div className="flex items-center border rounded-full overflow-hidden">
              <button onClick={handleDecrease} className="p-2 px-4 text-lg hover:bg-gray-100">
                <Minus size={16} />
              </button>
              <span className="px-4 text-sm">{quantity}</span>
              <button onClick={handleIncrease} className="p-2 px-4 text-lg hover:bg-gray-100">
                <Plus size={16} />
              </button>
            </div>
            <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-sm">
              Add to cart
            </button>
          </div>

          <hr className="my-6" />
          <div className="flex items-center">
            <Image src="/goldline-logo.png" alt="Goldline Logo" width={120} height={40} className="object-contain" />
          </div>
          <hr className="my-6" />
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-700">CATEGORY:</span> Tables
          </div>
        </div>
      </div>

      <div className="w-full p-4 mt-12">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-gray-700 px-4 py-2 focus:outline-none ${
                activeTab === tab.key ? "border-b-2 border-orange-600 text-orange-700 font-semibold" : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>{renderContent()}</div>
      </div>
      <Carousel />
    </div>
  );
};

export default ProductDetails;

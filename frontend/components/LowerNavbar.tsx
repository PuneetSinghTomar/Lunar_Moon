'use client';

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
} from 'lucide-react';

export default function LowerNavbar() {
  return (
    <div className="flex justify-between bg-linen items-center px-4 py-2 flex-wrap gap-4 text-sm text-gray-800 mt-2">
      {/* Categories */}
      <div className="flex flex-wrap gap-6 items-center">
        <div className="flex items-center gap-2">
          <LayoutPanelLeft size={20} />
          <span>Living Room</span>
        </div>
        <div className="flex items-center gap-2">
          <Archive size={20} />
          <span>Kitchen</span>
        </div>
        <div className="flex items-center gap-2">
          <Armchair size={20} />
          <span>Chandeliers</span>
        </div>
        <div className="flex items-center gap-2">
          <Sofa size={20} />
          <span>Balcony</span>
        </div>
        <div className="flex items-center gap-2">
          <Bed size={20} />
          <span>Bedroom</span>
        </div>
        <div className="flex items-center gap-2">
          <Table size={20} />
          <span>Office</span>
        </div>
        <div className="flex items-center gap-2">
          <Flower2 size={20} />
          <span>Outdoor</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="rounded-full border p-2">
            <MapPin size={16} />
          </div>
          <div>
            <p className="font-semibold text-sm">Address:</p>
            <p className="text-gray-600">Street Name, NY 38954</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full border p-2">
            <Phone size={16} />
          </div>
          <div>
            <p className="font-semibold text-sm">Phone:</p>
            <p className="text-gray-600">578-393-4937</p>
          </div>
        </div>
      </div>
    </div>
  );
}

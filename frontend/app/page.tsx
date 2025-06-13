import Image from "next/image";
import Heroic from "@/components/Heroic";
import FeaturesSection from "@/components/FeaturesSection";
import Carousel from "@/components/Carousel";
import SideCarasoul from "@/components/SideCarasoul";

export default function Home() {
  return (
    <div>
      <Heroic />
      <FeaturesSection />
      {/* Responsive Flex Section */}
      <div className="flex flex-col md:flex-row w-full py-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://media.istockphoto.com/id/137806346/photo/christmas-lights.jpg?s=1024x1024&w=is&k=20&c=ZuMUfVTdNVsVF8EnkM4xfnrMyLJszcDC6FNNgvmjRJE="
            alt="Your Company"
          />
        </div>

        {/* Side Carousel Section */}
        <div className="w-full md:w-1/2">
          <SideCarasoul />
        </div>
      </div>

      <Carousel />
    </div>
  );
}

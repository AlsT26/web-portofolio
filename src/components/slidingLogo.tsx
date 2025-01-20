import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const SlidingLogo: React.FC = () => {
  return (
    <div className="mt-12 mb-6 max-h-fit">
      <Marquee gradient={false} speed={40} className="space-x-16">
        {/* HTML Logo */}
        <div className="flex items-center justify-center w-36 h-36 bg-white mx-4 p-2 transform transition-transform duration-300 hover:scale-105">
          <Image src="/html.png" alt="HTML Logo" width={150} height={70} className="object-contain" />
        </div>

        {/* JavaScript Logo */}
        <div className="flex items-center justify-center w-36 h-36 bg-white mx-4 p-2 transform transition-transform duration-300 hover:scale-105">
          <Image src="/js.png" alt="JavaScript Logo" width={150} height={70} className="object-contain" />
        </div>

        {/* React Logo */}
        <div className="flex items-center justify-center w-36 h-36 bg-white mx-4 p-2 transform transition-transform duration-300 hover:scale-105">
          <Image src="/react.png" alt="React Logo" width={150} height={70} className="object-contain" />
        </div>

        {/* TypeScript Logo */}
        <div className="flex items-center justify-center w-36 h-36 bg-white mx-4 p-2 transform transition-transform duration-300 hover:scale-105">
          <Image src="/ts.png" alt="TypeScript Logo" width={150} height={70} className="object-contain" />
        </div>

        {/* Node.js Logo */}
        <div className="flex items-center justify-center w-36 h-36 bg-white mx-4 p-2 transform transition-transform duration-300 hover:scale-105">
          <Image src="/nodejs.png" alt="Node.js Logo" width={150} height={70} className="object-contain" />
        </div>

        {/* Tailwind Logo */}
        <div className="flex items-center justify-center w-36 h-36 bg-white mx-4 p-2 transform transition-transform duration-300 hover:scale-105">
          <Image src="/Tailwind CSS.png" alt="Tailwind Logo" width={200} height={100} className="object-contain" />
        </div>

        {/* Github Logo */}
        <div className="flex items-center justify-center w-36 h-36 bg-white mx-4 p-2 transform transition-transform duration-300 hover:scale-105">
          <Image src="/github.png" alt="github Logo" width={200} height={100} className="object-contain" />
        </div>
      </Marquee>
    </div>
  );
};

export default SlidingLogo;

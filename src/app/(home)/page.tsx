"use client";

import SlidingLogo from "@/components/slidingLogo";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import RevealText from "@/components/revealText";
import Image from "next/image";

export default function Home() {
  const splitter = new GraphemeSplitter();

  return (
    <div>
      {/* first page */}
      <div className="flex flex-1 flex-row h-full w-full justify-center bg-black pt-36">
        <div className="flex flex-row items-center space-x-8">
          <div className="flex-shrink-0">
            <img src="/half_body_nobg.png" />
          </div>
          <div className="flex flex-1 flex-col justify-end">
            <TypeAnimation
              splitter={(str) => splitter.splitGraphemes(str)}
              sequence={["Hello", 1000, "Ciao", 1000, "你好", 1000, "Здравейте", 1000, "Hola", 1000, "Bonjour", 1000, "नमस्ते", 1000]}
              style={{
                fontSize: "2em",
                background: "gray",
                color: "white", // Set the text color
                textDecorationColor: "white",
                border: "2px solid #ffffff", // Add a white border
                // padding: "0.5em", // Adds some padding inside the border
                margin: "10px 0 10px 0",
                borderRadius: "8px", // Rounds the corners of the border
              }}
              repeat={Infinity}
            />
            <h2 className="flex-1 text-3xl font-sans bg-white py-2 mb-2">Hello, I am</h2>
            <h1 className="text-4xl font-bold font-heading text-white">Alvin Tolopan Armando Sibuea</h1>
            <p className="font-sans text-2xl h-11 text-white">A Web Developer</p>
            <div className="flex flex-col mt-4">
              <p className="justify-items-center mb-3 font-sans text-white">Actively searching for a chance to change the world</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/a.sibuea04/" target="_blank" rel="noopener noreferrer" className="bg-[#DD2A7B] w-24 text-center text-white rounded-lg py-2">
                  Instagram
                </a>
                <a href="https://github.com/AlsT26" target="_blank" rel="noopener noreferrer" className="bg-sky-800 w-24 text-center text-white rounded-lg py-2">
                  GitHub
                </a>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second page */}
      <div className="bg-white text-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-sm font-bold font-heading text-gray-600 mb-8">MY STRENGTHS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealText>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2 font-heading text-blue-950">Ambition</h3>
                <p className="text-sm font-sans text-blue-950">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </RevealText>

            <RevealText>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2 font-heading text-blue-950">Precision</h3>
                <p className="text-sm font-sans text-blue-950">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </RevealText>

            <RevealText>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2 font-heading text-blue-950">Assertive</h3>
                <p className="text-sm font-sans text-blue-950">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </RevealText>
          </div>

          <div>
            {/* for marquee */}
            <SlidingLogo />
          </div>
        </div>
      </div>

      {/* third page */}
      <div className="bg-black text-white py-16 justify-center">
        {/* Title at the Top Center */}
        <h1 className="text-center text-4xl font-bold mb-12">Who Am I?</h1>

        {/* Three-Column Layout */}
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto items-center justify-center space-y-8 md:space-y-0 md:space-x-12 relative z-0">
          {/* Left Section: Journey Description */}
          <RevealText>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-center md:text-left max-w-xs">
              <h2 className="text-2xl font-semibold mb-4 z-0">My Journey</h2>
              <p className="text-lg z-0">
                I&apos;ve been passionate about web development since high school. Over the years, I&apos;ve worked on various projects, learned numerous technologies, and continuously improved my skills to become a better developer.{" "}
              </p>
            </motion.div>
          </RevealText>

          {/* Center Section: Avatar with Hover Zoom */}
          <div className="relative rounded-full overflow-hidden w-60 h-60 md:w-72 md:h-72 shadow-lg border-4 border-white">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="rounded-full overflow-hidden w-60 h-60 md:w-72 md:h-72 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image src="/faceImage.jpg" alt="Your Avatar" width={300} height={300} className="object-cover w-full h-full" />
            </motion.div>
          </div>

          {/* Right Section: Contact Info */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-center md:text-left max-w-xs">
            <RevealText>
              <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
              <p className="text-lg mb-2">Email: a26sibuea@gmail.com</p>
              <p className="text-lg mb-2">Phone: +628-2215-2550-39</p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white rounded-full px-4 py-2">
                  LinkedIn
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white rounded-full px-4 py-2">
                  Twitter
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white rounded-full px-4 py-2">
                  GitHub
                </a>
              </div>
            </RevealText>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

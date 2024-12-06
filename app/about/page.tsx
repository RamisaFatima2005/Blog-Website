import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-zinc-300 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-fuchsia-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
        Welcome to our blog, where we dive deep into the world of programming languages! Our focus is on helping you understand the key concepts, tags, and features of popular web development tools like HTML, Tailwind CSS, TypeScript, and Next.js.Whether you're here to learn, explore, or connect, 
          we aim to create content that adds value to your day. Stay a while, and feel 
          free to reach out with your thoughts or feedback. Happy reading!
        </p>
        <div className="mt-8 flex justify-center">
          <Image 
            src="/about.jpg" 
            alt="About Us" 
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-80 h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

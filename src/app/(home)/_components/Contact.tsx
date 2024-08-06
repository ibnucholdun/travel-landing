import { Mail, Navigation } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="lg:mt-36 mt-16">
      <div className="bg-[#DFD7F9] w-full lg:py-24 bg-opacity-20 lg:px-36 lg:rounded-tl-[150px] lg:rounded-b-3xl relative py-6 px-2 rounded-tl-xl rounded-b-xl">
        <Navigation
          fill="white"
          color="white"
          className="bg-gradient-to-b from-[#747DEF] to-[#5E3BE1] lg:w-16 lg:h-16 rounded-full absolute lg:-top-5 lg:-right-5 lg:p-2 p-1 w-8 h-8 -top-2 -right-2"
        />
        <Image
          src="/images/circle.svg"
          alt="circle"
          width={200}
          height={200}
          className="absolute top-0 right-0 -z-10 opacity-20 lg:w-48 lg:h-48 w-24 h-24"
        />
        <Image
          src="/images/circle.svg"
          alt="circle"
          width={200}
          height={200}
          className="absolute bottom-0 left-0 -z-10 opacity-20 rotate-90 lg:w-48 lg:h-48 w-24 h-24"
        />
        <h1 className="font-bold lg:text-3xl text-base text-center">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>
        <div className="w-full flex justify-center lg:mt-16 mt-6 gap-x-8 items-center">
          <div className="relative lg:w-3/5 w-full">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full bg-white rounded-full lg:pl-12 lg:pr-4 lg:py-4 pl-10 pr-2 py-2 focus:outline-none text-sm lg:text-base"
            />
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 lg:w-6 lg:h-6" />
          </div>
          <button className="bg-orange lg:p-4 p-2 text-sm text-white rounded-xl lg:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

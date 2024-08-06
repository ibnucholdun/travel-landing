import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Company",
      items: ["About", "Careers", "Mobile"],
    },
    {
      title: "Contact",
      items: ["Help/FAQ", "Press", "Affiliates"],
    },
    {
      title: "More",
      items: ["Airline Fees", "Airline", "Low Fare Tips"],
    },
  ];

  return (
    <footer className="lg:mt-36 mt-16">
      <div className="flex justify-evenly gap-x-8 lg:flex-row flex-col">
        <div className="flex flex-col lg:gap-y-8 gap-y-2 lg:w-1/4 mb-5">
          <h1 className="font-bold lg:text-5xl text-2xl tracking-widest text-[#181E4B]">
            Jadoo.
          </h1>
          <p className="font-medium text-sm">
            Book your trip in minutes, get full <br /> control for much longer.
          </p>
        </div>
        {footerSections.map(({ title, items }) => (
          <div
            key={title}
            className="flex flex-col lg:gap-y-8 gap-y-2 lg:w-1/4 mb-5"
          >
            <h4 className="font-bold lg:text-xl text-lg">{title}</h4>
            <ul className="flex flex-col gap-y-2">
              {items.map((item) => (
                <li key={item} className="font-medium lg:text-lg text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col lg:gap-y-6 gap-y-2 lg:w-1/4 mb-5">
          <div className="flex gap-x-2">
            <Facebook
              fill="black"
              color=""
              className="bg-white border lg:w-12 lg:h-12 w-8 h-8 border-slate-200 rounded-full lg:p-2 p-1 shadow-lg"
            />
            <Instagram
              color="white"
              className="bg-gradient-to-b from-[hsl(295,79%,70%)] to-[#db2a92] border lg:w-12 lg:h-12 w-8 h-8 border-slate-200 rounded-full lg:p-2 p-1 shadow-lg"
            />
            <Twitter
              fill="black"
              color=""
              className="bg-white border lg:w-12 lg:h-12 w-8 h-8 border-slate-200 rounded-full lg:p-2 p-1 shadow-lg"
            />
          </div>
          <p className="font-medium lg:text-xl text-base">Discover our app</p>
          <div className="flex gap-x-2">
            <Image
              src="/images/playstore.png"
              alt="Play Store"
              width={100}
              height={100}
            />
            <Image
              src="/images/apple.png"
              alt="App Store"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <p className="text-center mt-12 font-medium text-sm">
        All Rights Reserved @jadoo.co
      </p>
    </footer>
  );
};

export default Footer;

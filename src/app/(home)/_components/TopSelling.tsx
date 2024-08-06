import Image from "next/image";
import React from "react";
import { Volkhov } from "next/font/google";
import CardDestination from "@/components/CardDestination";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const destinations = [
  {
    imageSrc: "/images/rome.jpg",
    imageAlt: "Rome",
    price: "$5.42k",
    location: "Rome, Italy",
    duration: "10 Days Trip",
  },
  {
    imageSrc: "/images/london.jpg",
    imageAlt: "London",
    price: "$4.2k",
    location: "London, UK",
    duration: "12 Days Trip",
  },
  {
    imageSrc: "/images/europa.jpg",
    imageAlt: "Europa",
    price: "$15k",
    location: "Full Europe",
    duration: "28 Days Trip",
  },
];

const TopSelling: React.FC = () => {
  return (
    <section className="lg:mt-36 mt-16">
      <h2 className="lg:mb-8  font-bold uppercase text-center">Top Selling</h2>
      <h1
        className={`mt-2 lg:mb-16 mb-8 text-center lg:text-[50px] text-3xl font-bold text-navy ${volkhov.className}`}
      >
        Top Destinations
      </h1>
      <div className="relative lg:flex items-center justify-evenly">
        <Image
          src="/images/spring.svg"
          alt="spring"
          width={100}
          height={100}
          className="hidden lg:absolute lg:-z-10 lg:bottom-4 lg:right-2 lg:block"
        />
        {destinations.map((destination, index) => (
          <CardDestination
            key={index}
            imageSrc={destination.imageSrc}
            imageAlt={destination.imageAlt}
            price={destination.price}
            location={destination.location}
            duration={destination.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default TopSelling;

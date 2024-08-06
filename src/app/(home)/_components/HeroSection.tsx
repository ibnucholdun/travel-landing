import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Volkhov } from "next/font/google";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HeroSection: React.FC = () => {
  return (
    <section className="lg:grid grid-cols-12 items-center justify-center">
      <div className="col-span-6 mt-10">
        <h2 className="lg:text-xl text-base font-bold uppercase text-orange">
          Best Destinations around the world
        </h2>
        <h1
          className={`lg:text-[84px] text-5xl my-4 font-bold leading-none text-navy ${volkhov.className}`}
        >
          Travel,
          <span className="relative">
            enjoy{" "}
            <Image
              src="/images/text-decore.png"
              alt="decor"
              width={300}
              height={200}
              className="absolute bottom-4 right-0 -z-10"
            />
          </span>
          and live a new and full life
        </h1>
        <p className="mb-8 lg:w-3/4 lg:text-base text-sm">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center gap-x-6">
          <Button variant="yellow" className="drop-shadow-sm-yellow">
            Find out more
          </Button>
          <Button variant="ghost" className="flex gap-3">
            <Image
              src="/icons/play.svg"
              alt="play"
              width={40}
              height={40}
              className="rounded-full bg-orange p-2 drop-shadow-sm-orange"
            />
            Play Demo
          </Button>
        </div>
      </div>
      <div className="col-span-6">
        <Image
          src="/images/hero-image.png"
          alt="hero"
          width={600}
          height={600}
          className="lg:w-full mt-12 w-4/5 mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;

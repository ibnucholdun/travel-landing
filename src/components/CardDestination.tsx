import { Navigation } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  imageSrc: string;
  imageAlt: string;
  price: string;
  location: string;
  duration: string;
};

const CardDestination = ({
  imageSrc,
  imageAlt,
  price,
  location,
  duration,
}: Props) => {
  return (
    <div className="lg:w-[350px] lg:h-[450px] w-3/4 border border-slate-300 rounded-3xl shadow-2xl mx-auto my-7">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1000}
        height={1000}
        className="w-full lg:h-[330px] h-[250px] rounded-t-3xl object-cover"
      />
      <div className="flex flex-col lg:gap-4 gap-2 p-3 bg-white rounded-b-3xl">
        <p className="flex justify-between lg:text-lg text-sm font-medium">
          {location} <span>{price}</span>
        </p>
        <p className="mb-2 flex gap-2 lg:text-base text-sm font-medium">
          <Navigation fill="#686D77" className="w-4 h-4 lg:w-5 lg:h-5" />
          {duration}
        </p>
      </div>
    </div>
  );
};

export default CardDestination;

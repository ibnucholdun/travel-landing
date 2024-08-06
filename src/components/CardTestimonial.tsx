import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  location: string;
  feedback: string;
  imageSrc: string;
  zIndex: number;
  position: "top-0 left-0" | "top-16 left-16";
};

const CardTestimonial = ({
  name,
  location,
  feedback,
  imageSrc,
  zIndex,
  position,
}: Props) => {
  return (
    <div
      className={`absolute ${position} bg-white rounded-lg shadow-lg p-6 w-3/4 z-${zIndex} mx-10`}
    >
      <div className="relative">
        <Image
          src={imageSrc}
          alt="profile"
          width={50}
          height={50}
          className="absolute -top-12 -left-12 rounded-full"
        />
        <p className="mb-4 lg:text-base font-medium text-sm">{feedback}</p>
        <h3 className="lg:text-lg font-bold text-sm">{name}</h3>
        <p className="text-sm font-medium">{location}</p>
      </div>
    </div>
  );
};

export default CardTestimonial;

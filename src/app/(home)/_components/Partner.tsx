import Image from "next/image";
import React from "react";

const partners = [
  { src: "/images/axon.png", alt: "Axon", width: 130, height: 130 },
  { src: "/images/jetstar.png", alt: "Jetstar", width: 130, height: 130 },
  { src: "/images/expedia.png", alt: "Expedia", width: 130, height: 130 },
  { src: "/images/qantas.png", alt: "Qantas", width: 130, height: 130 },
  { src: "/images/alitalia.png", alt: "Alitalia", width: 130, height: 130 },
];

const Partner: React.FC = () => {
  return (
    <section className="lg:mt-[250px] mt-96 flex justify-evenly items-center flex-wrap gap-5">
      {partners.map((partner, index) => (
        <Image
          key={index}
          src={partner.src}
          alt={partner.alt}
          width={partner.width}
          height={partner.height}
          className="object-cover"
        />
      ))}
    </section>
  );
};

export default Partner;

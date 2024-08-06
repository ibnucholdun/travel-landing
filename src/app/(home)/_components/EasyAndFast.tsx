import Image from "next/image";
import React from "react";
import { Volkhov } from "next/font/google";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const steps = [
  {
    iconSrc: "/images/desctination.svg",
    iconAlt: "destination",
    bgColor: "bg-yellow",
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    iconSrc: "/images/swim.svg",
    iconAlt: "swim",
    bgColor: "bg-orange",
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    iconSrc: "/images/taxi.svg",
    iconAlt: "taxi",
    bgColor: "bg-green",
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

const EasyAndFast: React.FC = () => {
  return (
    <section className="lg:mt-36 mt-16">
      <h2 className="lg:mb-8 text-lg font-semibold">Easy and Fast</h2>
      <div className="lg:flex justify-between">
        <div className="lg:w-1/2">
          <h1
            className={`mt-2 lg:mb-16 mb-8 lg:text-[50px] text-3xl font-bold leading-none text-navy ${volkhov.className}`}
          >
            Book your next trip <br />
            in 3 easy steps
          </h1>
          <div className="flex flex-col gap-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-x-4">
                <div className="relative w-[40px] h-[40px]">
                  <Image
                    src={step.iconSrc}
                    alt={step.iconAlt}
                    width={40}
                    height={40}
                    className={`${step.bgColor} p-2 rounded-xl`}
                  />
                </div>
                <div className="lg:w-3/4">
                  <h4 className="lg:text-base font-bold">{step.title}</h4>
                  <p className="lg:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:w-1/2 mt-10">
          <Image
            src="/images/trip-image.png"
            alt="trip-image"
            width={1200}
            height={1000}
            className="w-full h-full"
          />
          <div className="absolute top-0 left-1/2 w-[300px] h-[300px] transform -translate-x-1/2 rounded-full bg-[#59B1E6] opacity-50 blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default EasyAndFast;

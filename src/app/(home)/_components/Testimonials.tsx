import React from "react";
import { Volkhov } from "next/font/google";
import CardTestimonial from "@/components/CardTestimonial";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const testimonials = [
  {
    id: 1,
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    feedback:
      "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    imageSrc: "/images/profile.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    location: "New York, USA",
    feedback:
      "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    imageSrc: "/images/profile.png",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="lg:flex justify-between mt-16">
      <div className="lg:w-1/3">
        <h2 className="lg:mb-8 lg:text-lg font-semibold uppercase">
          Testimonials
        </h2>
        <h1
          className={`mt-2 lg:mb-16 mb-8 lg:text-[50px] text-3xl font-bold leading-tight text-navy ${volkhov.className}`}
        >
          What people say about Us.
        </h1>
      </div>
      <div className="relative lg:w-1/2 mt-16">
        {testimonials.map((testimonial, index) => (
          <CardTestimonial
            key={testimonial.id}
            name={testimonial.name}
            location={testimonial.location}
            feedback={testimonial.feedback}
            imageSrc={testimonial.imageSrc}
            zIndex={10 - index}
            position={index === 0 ? "top-0 left-0" : "top-16 left-16"}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

import CardCategory from "@/components/CardCategory";
import { Volkhov } from "next/font/google";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const categories = [
  {
    iconSrc: "/icons/satellite.png",
    iconAlt: "satellite",
    iconWidth: 65,
    iconHeight: 70,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    iconSrc: "/icons/plane.png",
    iconAlt: "plane",
    iconWidth: 130,
    iconHeight: 70,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    iconSrc: "/icons/mic.png",
    iconAlt: "mic",
    iconWidth: 65,
    iconHeight: 70,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    iconSrc: "/icons/gear.png",
    iconAlt: "gear",
    iconWidth: 65,
    iconHeight: 70,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
  },
];

const Category: React.FC = () => {
  return (
    <section className="relative lg:mt-36 mt-16">
      <h2 className="lg:mb-8 font-bold uppercase text-center">Category</h2>
      <h1
        className={`mt-2 lg:mb-16 mb-8 text-center lg:text-[50px] text-3xl font-bold text-navy ${volkhov.className}`}
      >
        We Offer Best Services
      </h1>
      <div className="md:flex md:flex-wrap items-end justify-between gap-5">
        {categories.map((category, index) => (
          <CardCategory
            key={index}
            iconSrc={category.iconSrc}
            iconAlt={category.iconAlt}
            iconWidth={category.iconWidth}
            iconHeight={category.iconHeight}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;

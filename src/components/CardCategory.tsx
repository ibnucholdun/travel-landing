import Image from "next/image";
import React from "react";

type Props = {
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
};

const CardCategory = ({
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  title,
  description,
}: Props) => {
  return (
    <div className="relative flex w-[250px] flex-col items-center gap-y-2 lg:gap-y-4 p-5 bg-white rounded-3xl group/item hover:shadow-lg mx-auto my-3">
      <div className="flex h-[100px] items-center justify-center">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      </div>
      <h3 className="lg:text-xl font-bold text-center">{title}</h3>
      <p className="text-center lg:text-base font-medium text-sm">
        {description}
      </p>
      <div className="group/edit invisible absolute -left-10 -bottom-10 w-28 h-28 rounded-t-3xl rounded-br-lg bg-orange group-hover/item:visible -z-10"></div>
    </div>
  );
};

export default CardCategory;

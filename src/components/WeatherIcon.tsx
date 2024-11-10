import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

type Props = {
  iconName: string;
} & React.HTMLProps<HTMLDivElement>;

function WeatherIcon({ iconName, ...restProps }: Props) {
  return (
    <div className={`relative h-20 w-20`} {...restProps}>
      <Image
        src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
        alt="Weather Icon"
        width={100}
        height={100}
        className="absolute h-full w-full"
        priority // Adding the priority prop
      />
    </div>
  );
}

export default WeatherIcon;

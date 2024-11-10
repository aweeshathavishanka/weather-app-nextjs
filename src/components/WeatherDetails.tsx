import React from "react";
import { LuEye } from "react-icons/lu";
import { FaDroplet } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import { SlSpeedometer } from "react-icons/sl";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
type Props = {};
export interface WeatherDetailsProps {
  visibility: string;
  humiditiy: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function WeatherDetails(props: WeatherDetailsProps) {
  return (
    <>
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Visibility"
        value={props.visibility}
      />
      <SingleWeatherDetail
        icon={<FaDroplet />}
        information="Humiditiy"
        value={props.humiditiy}
      />
      <SingleWeatherDetail
        icon={<FiWind />}
        information="WindSpeed"
        value={props.windSpeed}
      />
      <SingleWeatherDetail
        icon={<SlSpeedometer />}
        information="AirPressure"
        value={props.airPressure}
      />
      <SingleWeatherDetail
        icon={<FiSunrise />}
        information="Sunrise"
        value={props.sunrise}
      />
      <SingleWeatherDetail
        icon={<FiSunset />}
        information="Sunset"
        value={props.sunset}
      />
    </>
  );
}

export interface SingleWeatherDetailsProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailsProps) {
  return (
    <div className=" flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black">
      <p className=" whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}

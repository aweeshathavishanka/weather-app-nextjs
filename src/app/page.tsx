"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import WeatherDetails from "@/components/WeatherDetails";

import { kelvinToCelsius } from "@/utils/convertKelvintoCelcius";
import { metersToKilometers } from "@/utils/metertokilometer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format, fromUnixTime, parseISO } from "date-fns";
import Image from "next/image";

type WeatherForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: Forecast[];
  city: City;
};

type Forecast = {
  dt: number;
  main: MainInfo;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
};

type MainInfo = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Clouds = {
  all: number;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

type Sys = {
  pod: string;
};

type City = {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type Coordinates = {
  lat: number;
  lon: number;
};

// API call to fetch weather data
export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherForecastResponse>({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await axios.get<WeatherForecastResponse>(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            q: "colombo",
            appid: process.env.NEXT_PUBLIC_WEATHER_KEY,
          },
        }
      );
      return response.data;
    },
  });

  const firstData = data?.list[0];

  if (isLoading)
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Loading data...</p>
      </div>
    );
  if (error) return <div>Error loading data.</div>;

  return (
    <div className="flex flex-col bg-gray-100 gap-4 min-h-screen">
      <NavBar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* Today Data */}
        <section>
          <div>
            <span className="flex gap-4 text-2xl items-center">
              <h2 className=" font-semibold">
                {format(parseISO(firstData?.dt_txt ?? ""), "EEEE")}
              </h2>
              <p className=" ">( {firstData?.dt_txt} )</p>
            </span>
            <span className=" py-1 flex justify-center max-w-sm -mt-3 bg-yellow-200" />
            <div>
              <div className=" rounded-lg my-5 bg-white  py-10 gap-10 px-6 items-center">
                <div className=" flex items-center gap-x-10">
                  <div className=" flex flex-col gap-y-2 px-4">
                    <span className=" text-5xl font-semibold">
                      {kelvinToCelsius(firstData?.main.temp ?? 0)}°C
                    </span>
                    <span className=" text-sm space-x-1 whitespace-nowrap">
                      <p>
                        Feels like{" "}
                        {kelvinToCelsius(firstData?.main.feels_like ?? 0)}°C
                      </p>
                    </span>
                    <span className=" text-sm space-x-2 flex items-center">
                      <p>
                        {kelvinToCelsius(firstData?.main.temp_max ?? 0)}°C
                        &#8593;
                      </p>
                      <p>
                        {kelvinToCelsius(firstData?.main.temp_min ?? 0)}°C
                        &#8595;
                      </p>
                    </span>
                  </div>

                  {/* Time and Weather Icon */}
                  <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
                    {data?.list.map((d, i) => (
                      <div
                        key={i}
                        className="flex flex-col justify-between gap-2 items-center text-xs font-semibold py-1">
                        <p className="whitespace-nowrap">
                          {format(parseISO(d?.dt_txt ?? ""), "h:mm a")}
                        </p>
                        <Image
                          src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@4x.png`}
                          alt="Weather Icon"
                          width={100}
                          height={100}
                          className=" h-full w-full"
                          priority // Adding the priority prop
                        />
                        <p>{kelvinToCelsius(d?.main.temp ?? 0)}°C</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-4">
            {/* Left Side */}
            <div className="  border rounded-xl  py-4 shadow-sm w-fit justify-center flex flex-col px-4 items-center bg-white">
              <p className=" capitalize text-xl font-medium text-center">
                {firstData?.weather[0].description}
              </p>
              <Image
                src={`https://openweathermap.org/img/wn/${firstData?.weather[0].icon}@4x.png`}
                alt="Weather Icon"
                width={100}
                height={100}
                className="h-full w-full"
              />
            </div>
            {/* Right Side */}
            <div className=" bg-yellow-200 px-6 gap-4 w-full justify-between overflow-x-auto  border rounded-xl  py-4 shadow-sm  flex">
              <WeatherDetails
                airPressure={`${firstData?.main.pressure} hPa`}
                visibility={metersToKilometers(firstData?.visibility ?? 10000)}
                humiditiy={`${firstData?.main.humidity}%`}
                windSpeed={`${firstData?.wind.speed} m/s`}
                sunrise={format(
                  fromUnixTime(data?.city.sunrise ?? 0),
                  "h:mm a"
                )}
                sunset={format(fromUnixTime(data?.city.sunset ?? 0), "h:mm a")}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

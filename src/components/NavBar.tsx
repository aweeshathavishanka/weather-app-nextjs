import React, { useState } from "react";
import { BiMapPin } from "react-icons/bi";
import { MdSunny } from "react-icons/md";
import SearchBox from "./SearchBox";
import axios from "axios";

type Props = {};

function NavBar({}: Props) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  async function handleInputChange(value: string) {
    setCity(value);
    if (value.length > 3) {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${value}`
        );
        // Assuming response.data is an array of city objects, extract the names
        setSuggestions(
          response.data.map((item: { name: string }) => item.name)
        );
        setShowSuggestions(true);
      } catch (error) {
        setError("Failed to fetch suggestions");
      }
    } else {
      setShowSuggestions(false); // Hide suggestions if input is too short
    }
  }

  // Handle form submission here
  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (city) {
      console.log("City submitted:", city);
      // Fetch or handle the weather data for the city
      setShowSuggestions(false); // Hide suggestions after submission
    } else {
      setError("Please enter a valid city.");
    }
  };

  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <span className="flex items-center justify-center gap-2">
          <h2 className="font-bold text-3xl text-black">Weather</h2>
          <MdSunny className="text-3xl text-yellow-300" />
        </span>
        <section className="flex gap-2 items-center">
          <BiMapPin className="text-2xl text-black cursor-pointer hover:text-yellow-300" />
          <p className="text-2xl font-semibold bg-yellow-200 px-2 py-1 rounded-lg">
            Sri Lanka
          </p>
          <div className="relative">
            <SearchBox
              value={city}
              onChange={(e) => handleInputChange(e.target.value)}
              onSubmitSearch={handleSubmitSearch}
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-10">
                <ul className="text-sm">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        setCity(suggestion); // Set city on suggestion click
                        setShowSuggestions(false); // Hide suggestions
                      }}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </section>
      </div>
    </nav>
  );
}

export default NavBar;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CardCountry from "./components/CardCountry";
import data from "./data.json";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all"); // Estado para la región seleccionada
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filtrar los países por el nombre y la región
    const filteredCountries = data.filter(
      (country) =>
        country.name.toLowerCase().includes(term.toLowerCase()) &&
        (selectedRegion === "all" || country.region === selectedRegion)
    );

    setFilteredData(filteredCountries);
  };

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);

    // Filtrar los países por la región seleccionada
    const filteredCountries = data.filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (region === "all" || country.region === region)
    );

    setFilteredData(filteredCountries);
  };

  return (
    <>
      <Navbar />
      <form className="bg-[#f8f8f8]  sm:h-max  sm:grid  sm:grid-cols-4  sm:grid-flow-row  sm:auto-rows-max p-16">
        {/* Input de búsqueda */}
        <div className="relative mt-10 ml-20">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border shadow-lg border-gray-300 rounded-lg bg-gray-50"
            placeholder="Search countries..."
            value={searchTerm}
            onChange={handleSearch}
            required
          />
        </div>

        {/* Select para la selección de región */}
        <div className=" mt-10 ml-[1055px] ">
          <select
            value={selectedRegion}
            onChange={handleRegionChange}
            className="p-4 text-sm text-gray-900 border shadow-lg border-gray-300 rounded-lg bg-gray-50"
          >
            <option value="all">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>

      <div className="bg-[#f8f8f8] ">
        <div className="bg-[#f8f8f8] -mt-24 ml-20 h-max  sm:grid  sm:grid-cols-4 sm:grid-flow-row  sm:auto-rows-max p-16">
          {/* Mostrar las tarjetas filtradas */}
          {filteredData.map((country) => (
            <CardCountry
              key={country.name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

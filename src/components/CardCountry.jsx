import React from "react";

const CardCountry = ({ name, population, region, capital, flag }) => {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-2xl mb-16 mt-6">
        <img src={flag} alt={`${name} flag`} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            <strong>Population:</strong> {population}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Region:</strong> {region}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardCountry;

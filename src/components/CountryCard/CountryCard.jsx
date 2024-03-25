import React from "react";
import { Link } from "react-router-dom";
const CountryCard = ({image,countryName,population,capital,region}) => {
   
  return (

    <Link to={`/country/:${countryName}`}>
    <div className="flex flex-col h-full w-72 rounded-md border border-black dark:border-white bg-white dark:bg-slate-900 shadow-lg transform transition hover:scale-110 self-baseline shadow-lg max-[850px]:w-[300px] max-[450px]:w-[320px] ">
  <img src={image} alt={`Flag of ${countryName}`} className="w-full h-52 object-fill flex-grow"/>
  <div className="p-2 text-left flex flex-col justify-between">
    <p className="text-black dark:text-white text-3xl font-semibold my-3">{countryName}</p>
    <p className="text-black dark:text-white text-xl font-semibold my-3">Population : {population}</p>
    <p className="text-black dark:text-white text-xl font-semibold my-3">Capital : {capital}</p>
    <p className="text-black dark:text-white text-xl font-semibold my-3">Region : {region}</p>
  </div>
</div>
    </Link>
  );
};

export default CountryCard;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryname } = useParams();
  const country = countryname.slice(1);
 
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    getCountryDetails()
  }, []);

  const getCountryDetails = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      const result = await response.json();
     
      setDetails(result);
     
    } catch {
      console.error();
    }
  };
  
  if(details.length === 0 ){
    return(<h1 className="text-black dark:text-white text-4xl">Loading....</h1>)
  }else{
   
  return (
    <div className="w-full min-h-[100vh]  pt-20 bg-white dark:bg-slate-900 -z-10">
      <div className="max-w-[1300px] px-1 py-1 m-auto max-[700px]:w-full p-3">
        <button className=" py-4 px-10 shadow-black border-black border-2 rounded font-bold bg-white text-black  shadow-md dark:bg-slate-900 dark:border-white dark:shadow-white dark:text-white hover:bg-black hover:text-white duration-100  dark:hover:bg-white dark:hover:text-slate-900" onClick= {()=>navigate(-1)}>Back</button>



        <div className="flex justify-between w-full gap-2 flex-wrap mt-8 max-[700px]:flex-col">

          <img className="  py-3 w-1/2 object-fill h-96 max-[700px]:w-full" src={details[0].flags.png} alt={details[0].flags.alt}></img>

          <div className=" text-left w-5/12 max-[700px]: w-full">
            <h1 className=" text-black dark:text-white text-4xl font-bold py-3">{details[0].name.official}</h1>
            <div className="flex justify-between max-[700px]:flex-col">

            <h2 className=" text-2xl font-semibold text-black dark:text-white py-2">Native Name : {details[0].common}</h2>

            <h2 className=" text-2xl font-semibold text-black dark:text-white py-2">Top Level Domain : {details[0].tld[0]}</h2>

            </div>
            <div className="flex justify-between max-[700px]:flex-col">
              <h2 className=" text-2xl font-semibold text-black dark:text-white py-2">Population : {details[0].population}</h2>
              <h2 className=" text-2xl font-semibold text-black dark:text-white py-2">Languages : {details[0].languages.eng}</h2>
            </div>

            <h2 className=" text-2xl font-semibold text-black dark:text-white py-2">Region : {details[0].region}</h2>

            <h2 className=" text-2xl font-semibold text-black dark:text-white py-2">Sub Region : {details[0].subregion}</h2>

            <h2 className=" text-2xl font-semibold text-black dark:text-white py-2">Capital : {details[0].capital[0]}</h2>

            <h2 className=" text-2xl font-semibold text-black dark:text-white py-2">Border Countries : {console.log(details[0].borders)}</h2>


          </div>

        </div>
      </div>
    </div>
  );
};
}
export default CountryDetails;

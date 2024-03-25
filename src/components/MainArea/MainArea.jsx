import React, { useEffect, useState } from 'react'

import CountryCard from '../CountryCard/CountryCard.jsx';


const MainArea = () => {

    const[countries,setCountries] = useState([]);
    const [search,setSearch] = useState('');
    const[filter,setFilter] = useState('')
    console.log(countries);
    useEffect(()=>{
       getCountries();
    },[])

    useEffect(()=>{
        
            handleSearch();
        
    },[search])

    useEffect(() => {
        handelFilter();
    },[filter])

    const getCountries = async() =>{
        try{
            const response = await fetch('https://restcountries.com/v3.1/all')
            const result = await response.json()
            setCountries(result);
        }catch{
            console.error();
        }
}

    const handelFilter = async() =>{

        if(filter === '' ) return;

        try{
            const response = await fetch(`https://restcountries.com/v3.1/region/${filter}`)
            const result = await response.json()
            setCountries(result);
        }catch{
            console.error();
        }

    }

    console.log(countries);

    const handleSearch = async()  => {
        if(search.length > 3){
        try{
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}`)
            const result = await response.json()
            if(result.length > 0){
                // console.alert('in valid input')
                setCountries(result);
            }
        }catch{
            console.error();
        }
    }
        if(search === ''){
            getCountries();
        }
   
    }
    return(
        <div role="main" className='w-full  pt-20 bg-white dark:bg-slate-900 -z-10 min-h-screen lg:min-h-[100vh]'>
        <div className='max-w-[1300px] md:px-1 py-1 px-2 m-auto'>
  
          <div className='w-full flex flex-col md:flex-row justify-between items-center flex-wrap gap-4'>
  
            <div className='flex items-center border-2 border-black dark:border-none dark:bg-slate-600 py-4 px-5 rounded-md w-full md:w-3/5 mt-4 md:mt-0 gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" className=" fill-black dark:fill-white bi bi-search" viewBox="0 0 16 16">
                <path  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
              <input aria-label="Search Country" onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search Country' className='w-full bg-transparent outline-none text-xl font-medium placeholder-black dark:placeholder-white'/>
            </div>
  
            <select aria-label="Filter by region" onChange={(e)=> setFilter(e.target.value)} className='w-full md:w-auto border-2 border-black dark:border-none outline-none py-5 px-5 mt-4 md:mt-0 rounded-md text-xl text-black font-medium dark:text-white bg-white dark:bg-slate-600 '>
              <option >Filter by region</option>
              <option value='africa' className='text-xl py-2 rounded-sm'>Africa</option>
              <option value='oceania' className='text-xl py-2 rounded-sm'>Oceania</option>
              <option value='europe' className='text-xl py-2 rounded-sm'>Europe</option>
              <option value='asia' className='text-xl py-2 rounded-sm'>Asia</option>
              <option value='america' className='text-xl py-2 rounded-sm'>America</option>
            </select>
  
          </div>
  
          <div className='flex flex-wrap justify-between gap-7 mt-9 max-w-screen-lg m-auto w-full' >
  
            {countries.map((country)=>(
                <CountryCard  
                  key={country.name.common} 
                  image ={country.flags.png} 
                  countryName ={country.name.official} 
                  population={country.population} 
                  capital={country.capital} 
                  region={country.region}/>
              ))}
          </div>
  
        </div>
      </div>
    
    );
}

export default MainArea;


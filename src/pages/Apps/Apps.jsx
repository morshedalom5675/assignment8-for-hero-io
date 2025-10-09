import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Apps = () => {
  const allData = useLoaderData();
  const [search,setSearch] = useState("")
  const [searchData,setSearchData] = useState("")

  const [loading,setLoading] = useState(false)

   useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = allData.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchData(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, allData]);


  // useEffect(()=>{
  //   setLoading(true)
  //   const timer = setTimeout(()=>{
  //     const filtered = allData.filter(app=>app.title.toLowerCase().includes(search.toLowerCase()))
  //     setSearch(filtered)
  //     setLoading(false)
  //   },300)
  // return() => clearTimeout(timer)},[search,allData])

  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-4xl text-center font-bold">Our All Applications</h1>
      <p className="text-gray-500 text-center pt-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="text-center space-y-4 md:flex justify-between items-center mt-20">
        <p className="text-2xl font-bold">({allData.length}) Apps Found</p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="px-4 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 my-16">
        {loading?(<div className="col-span-full ">
          <LoadingSpinner></LoadingSpinner>

        </div>)
        :searchData.length === 0 ?<div className="col-span-full text-center text-5xl font-bold text-[#00D390] py-20">
          <h1>No Apps Found</h1>
        </div> :(searchData.map((app) => (
          <App key={app.id} app={app}></App>
        )))}
      </div>
    </div>
  );
};

export default Apps;

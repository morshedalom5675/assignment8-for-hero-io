import React from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";

const Apps = () => {
  const allData = useLoaderData();
  // console.log(allData);
  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-4xl text-center font-bold">Our All Applications</h1>
      <p className="text-gray-500 text-center pt-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-16">
        {allData.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default Apps;

import React from "react";
import { NavLink, useLoaderData } from "react-router";

import Card from "../Card/Card";

const AllCards = () => {
  const data = useLoaderData();

  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-4xl text-center font-bold">Trending Apps</h1>
      <p className="text-gray-500 text-center pt-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-16">
        {data.map((app) =>
          <Card key={app.id} app={app}></Card>
        )}

      </div>
      <div className=" flex justify-center mt-10">
        <NavLink to="/apps" className="btn bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-white text-center">Show All</NavLink>
      </div>
    </div>
  );
};

export default AllCards;

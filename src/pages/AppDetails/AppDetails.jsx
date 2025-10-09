import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import likeImg from "../../assets/icon-review.png";
import { useLoaderData, useParams } from "react-router";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
//   console.log(data);
  const singleData = data.find((app) => app.id === appId);
//   console.log(singleData);

  const handleInstallation = () =>{
    const existingList = JSON.parse(localStorage.getItem('install'))
    // console.log(JSON.parse(existingList))
    let updated = []
    if(existingList){
        const isDuplicate = existingList.some(a=>a.id === singleData.id)
        if(isDuplicate)return alert('sorry')
        updated = [...existingList,singleData]
    }
    else{
        updated.push(singleData)
    }
    localStorage.setItem('install',JSON.stringify(updated))
  }

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex gap-8 container mx-auto py-20 ">
          <div>
            <img
              className="rounded-xl h-80 w-80"
              src={singleData.image}
              alt=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold pb-2">{singleData.title}</h1>
            <p className="border-b border-gray-300 pb-4">
              Developed by <span className="text-[#632EE3]">productive.io</span>
            </p>
            <div
              className="flex
                gap-14 pt-4"
            >
              <div>
                <img src={downloadImg} alt="img" />
                <p className="text-gray-500 py-3">Downloads</p>
                <h1 className="text-3xl font-bold">{singleData.downloads}M</h1>
              </div>
              <div>
                <img src={ratingImg} alt="img" />
                <p className="text-gray-500 py-3">Average Rating</p>
                <h1 className="text-3xl font-bold">{singleData.ratingAvg}</h1>
              </div>
              <div>
                <img src={likeImg} alt="img" />
                <p className="text-gray-500 py-3">Total Reviews</p>
                <h1 className="text-3xl font-bold">{singleData.reviews}K</h1>
              </div>
            </div>
            <button onClick={handleInstallation} className="btn my-4 text-xl bg-green-400 text-white">Install ( {singleData.size}MB )</button>
          </div>
        </div>

        {/* chart */}
        <div className="space-y-4 container mx-auto">
          <h1>App ratings summary</h1>
          <div className="border rounded-xl h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={singleData.ratings}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Bar
                  dataKey="count"
                  fill="#8884d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                /> */}
                <Bar
                  dataKey="count"
                  fill="#82ca9d"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="container mx-auto py-20 space-y-6">
            <h1 className="text-2xl font-semibold">Description</h1>
            <p className="text-gray-500">{singleData.description}</p>
        </div>
      </div>
    </>
  );
};

export default AppDetails;

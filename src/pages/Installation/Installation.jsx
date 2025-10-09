import React, { useEffect, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import rattingImg from "../../assets/icon-ratings.png";
import Swal from "sweetalert2";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const installApp = JSON.parse(localStorage.getItem("install"));
    if (installApp) setInstalled(installApp);
  }, []);

  const handleSort = () => {
    if (sortOrder === "size-desc") {
      return [...installed].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-ase") {
      return [...installed].sort((a, b) => b.size - a.size);
    } else {
      return installed;
    }
  };

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updateRemove = existingList.filter((p) => p.id !== id);

    Swal.fire({
      title: "App Uninstalled",
      icon: "success",
      draggable: true,
    });
    setInstalled(updateRemove);
    localStorage.setItem("install", JSON.stringify(updateRemove));
  };

  return (
    <div className="container mx-auto">
      <div className="text-center space-y-6 mt-10">
        <h1 className="text-4xl">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between">
        <p className="text-xl font-bold">
          <span className="text-3xl">Install</span> ({installed.length} Apps)
        </p>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sorted by value</option>
            <option value="size-desc">Low-&gt;High</option>
            <option value="size-ase">High-&gt;Low</option>
          </select>
        </label>
      </div>
      {handleSort().map((appSave) => (
        <div className="my-10 shadow-xl bg-gray-200 rounded-2xl">
          <div className="card card-side ">
            <figure>
              <img
                className="h-30 w-30 p-2 rounded-xl"
                src={appSave.image}
                alt="App"
              />
            </figure>
            <div className="card-body">
              <div>
                <h2 className="card-title">{appSave.title}</h2>
                <div className="flex gap-3 pt-3">
                  <div className="flex gap-1 text-green-700">
                    <img className="h-5 w-5" src={downloadImg} alt="" />
                    <p className="">{appSave.downloads}M</p>
                  </div>
                  <div className="flex gap-1 text-amber-600">
                    <img className="h-5 w-5" src={rattingImg} alt="" />
                    <p className="">{appSave.ratingAvg}</p>
                  </div>
                  <p>{appSave.size}MB</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleRemove(appSave.id)}
                  className="btn btn-primary"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;

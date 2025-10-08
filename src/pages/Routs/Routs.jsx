import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Apps from "../Apps/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        path:"/",
        loader:()=>fetch("/appData.json"),
        Component:Home
      },
      {
        path:"apps",
        loader:()=>fetch("./AllAppData.json"),
        Component:Apps
      }
    ]
  },
])
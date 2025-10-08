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
        Component:Home
      },
      {
        path:"apps",
        Component:Apps
      }
    ]
  },
])
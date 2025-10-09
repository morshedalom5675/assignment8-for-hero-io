import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Apps from "../Apps/Apps";
import AppDetails from "../AppDetails/AppDetails";
import Installation from "../Installation/Installation";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    hydrateFallbackElement:<LoadingSpinner></LoadingSpinner>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:"/",
        loader:()=>fetch("/appData.json"),
        Component:Home
      },
      {
        path:"apps",
        loader:()=>fetch("/AllAppData.json"),
        Component:Apps
      },
      {
        path:"/appDetails/:id",
        loader:()=>fetch("/AllAppData.json"),
        Component:AppDetails
      },
      {
        path:"installation",
        Component:Installation
      }
    ]
  },
])
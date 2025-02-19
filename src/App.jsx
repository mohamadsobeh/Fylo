import React, { useEffect } from "react";
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css"; 
import Header from "./components/Header";
import Home from "./pages/Home";
import Layout from "./components/Layout";


import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 150,
      offset: 100,
    });

    
    AOS.refresh();
  }, []);

  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

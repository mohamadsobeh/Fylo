import React, { useEffect } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css"; // تأكد من استيراد ملف CSS لتأثيرات Tailwind و AOS
import Header from "./components/Header";
import Home from "./pages/Home";
import Layout from "./components/Layout";

// استيراد مكتبة AOS
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بمكتبة AOS

function App() {
  useEffect(() => {
    // تهيئة AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 150,
      offset: 100,
    });

    // تحديث AOS بعد أي تغييرات
    AOS.refresh();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
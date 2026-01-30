import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import LayoutOne from "./layouts/LayoutOne";
import Home from "./pages/Home";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
        </Route>
      </Route>,
    ),
  );
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation will happen only one time
    });
  }, []);
  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
};

export default App;

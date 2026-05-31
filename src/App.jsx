import React from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

const App = () => {
  const mainPath = useLocation().pathname.includes("main");

  return <div>{!mainPath && <Navbar />}</div>;
};

export default App;

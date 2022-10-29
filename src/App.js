import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import axios from "axios";
import { baseURL } from "./helpers/apiCall";

import Navbar from "./components/Navbar";
import Input from "./components/Input";

import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(() => {
    axios
      .get(
        `${baseURL}latitude=34.08&longitude=-118.15&hourly=temperature_2m&daily=weathercode,sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles`
      )
      .then((res) => console.log("res: ", res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Input />
      <Footer />
    </div>
  );
}

export default App;

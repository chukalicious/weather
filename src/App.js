import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import axios from "axios";
import { baseURL } from "./helpers/apiCall";

import Navbar from "./components/Navbar";
import Input from "./components/InputComponent/Input";
import WeatherContainer from "./components/WeatherComponent";

import Footer from "./components/Footer";

import MapContainer from "./components/MapComponent";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(() => {
    axios
      .get(
        `${baseURL}latitude=51.5002&longitude=-0.1262&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles`
      )
      .then((res) => console.log("res: ", res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Input />
      <MapContainer />
      <WeatherContainer />
      <Footer />
    </div>
  );
}

export default App;

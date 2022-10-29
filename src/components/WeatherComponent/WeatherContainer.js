import WeatherCard from "./WeatherCard";

const WeatherContainer = () => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <WeatherCard />
      </div>
    </div>
  );
};

export default WeatherContainer;

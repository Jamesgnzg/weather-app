import { useContext } from "react";
import { locationForecastContext } from "../../../../context/LocationForecast";

const UvIndex = () => {
  const [forecastData, isLoading] = useContext(locationForecastContext);
  return (
    <>
      <div
        className={`card ${
          isLoading ? `skeleton` : ``
        } bg-main-50 md:min-h-40 w-full`}
      >
        {forecastData && (
          <div className="card-body">
            <h2 className="card-title">UV Index</h2>
            <p className="text-main-400">Today UV index</p>
            <p className="text-xl font-bold">{forecastData?.elevation}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default UvIndex;

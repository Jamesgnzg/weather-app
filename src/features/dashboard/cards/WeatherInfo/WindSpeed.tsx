import { useContext } from "react";
import { locationForecastContext } from "../../../../context/LocationForecast";

const WindSpeed = () => {
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
            <h2 className="card-title">Wind Speed</h2>
            <p className="text-main-400">Total Wind Speed</p>
            <p className="text-xl font-bold">
              {`${forecastData.current.wind_speed_10m} ${forecastData.current_units.wind_speed_10m}`}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default WindSpeed;

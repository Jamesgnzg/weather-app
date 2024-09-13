import { useContext } from "react";
import { locationForecastContext } from "../../../../context/LocationForecast";

const Pressure = () => {
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
            <h2 className="card-title">Pressure</h2>
            <p className="text-main-400">Today Pressure</p>
            <p className="text-xl font-bold">{`${forecastData?.current?.surface_pressure} ${forecastData?.current_units?.surface_pressure}`}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Pressure;

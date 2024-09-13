import { useContext } from "react";
import { locationForecastContext } from "../../../../context/LocationForecast";

const RainChance = (): React.ReactElement => {
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
            <h2 className="card-title">Rain</h2>
            <p className="text-main-400">Total rain</p>
            <p className="text-xl font-bold">{`${forecastData?.current?.rain} ${forecastData?.current_units?.rain}`}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default RainChance;

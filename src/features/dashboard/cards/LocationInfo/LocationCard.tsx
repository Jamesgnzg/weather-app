import { useContext } from "react";
import { locationForecastContext } from "../../../../context/LocationForecast";
import { CiLocationOn } from "react-icons/ci";
import { GiHotSurface } from "react-icons/gi";
import { IoRainyOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { formatDate } from "../../../../utils/date";

const LocationCard = (): React.ReactElement => {
  const [forecastData, isLoading] = useContext(locationForecastContext);
  const subtitleStyling = "font-bold text-sm text-main-100 inline-flex gap-2";
  return (
    <>
      <div
        className={`card ${
          isLoading ? `skeleton` : ``
        } min-h-52 content-center`}
      >
        <div className="card-body">
          <div className="flex justify-between w-full">
            <h5 className="text-main-200 text-xl font-extrabold">
              {forecastData && (
                <span className="inline-flex gap-1">
                  <CiLocationOn className="text-2xl" /> Marikina
                </span>
              )}
            </h5>
            <h5 className="text-main-100 text-xl font-bold">
              {forecastData &&
                formatDate(new Date(forecastData?.current?.time))}
            </h5>
          </div>
          <div className="flex justify-center w-full min-h-[150px] place-items-center">
            <div className="text-main-200 text-6xl font-extrabold">
              <p>
                {forecastData &&
                  `${forecastData?.current?.temperature_2m} ${forecastData?.current_units?.temperature_2m}`}
              </p>
            </div>
          </div>
          <div className="card-actions justify-between mt-5">
            <div>
              {forecastData && (
                <p className={subtitleStyling}>
                  <GiHotSurface className="text-2xl -mt-1" />
                  {forecastData?.current?.surface_pressure}{" "}
                  {forecastData?.current_units?.surface_pressure}
                </p>
              )}
            </div>
            <div>
              {forecastData && (
                <p className={subtitleStyling}>
                  <IoRainyOutline className="text-2xl -mt-1" />
                  {forecastData?.current?.rain}{" "}
                  {forecastData?.current_units?.rain}
                </p>
              )}
            </div>
            <div>
              {forecastData && (
                <p className={subtitleStyling}>
                  <FaWind className="text-2xl -mt-1" />
                  {forecastData?.current?.wind_speed_10m}{" "}
                  {forecastData?.current_units?.wind_speed_10m}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationCard;

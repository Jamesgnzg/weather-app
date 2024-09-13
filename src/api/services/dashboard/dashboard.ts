import { weatherAPI } from "../../configs/config";
import { ForecastParams } from "../../../interface/Forecast";

export const getLocationForecast = async (requestParams: ForecastParams) => {
  const { latitude, longitude, current, hourly, timezone, forecast_days } =
    requestParams;

  const response = await weatherAPI.request({
    url: "/forecast",
    method: "GET",
    params: {
      latitude: latitude,
      longitude: longitude,
      current: current,
      hourly: hourly,
      timezone: timezone,
      forecast_days: forecast_days,
    },
  });

  return Promise.resolve(response.data);
};

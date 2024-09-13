export interface ForecastData {
  current: {
    interval: number;
    rain: number;
    surface_pressure: number;
    temperature_2m: number;
    time: string;
    wind_speed_10m: number;
  };
  current_units: {
    interval: string;
    rain: string;
    surface_pressure: string;
    temperature_2m: string;
    time: string;
    wind_speed_10m: string;
  };
  hourly: {
    rain: number[];
    surface_pressure: number[];
    temperature_2m: number[];
    time: string;
    wind_speed_10m: string;
  };
  elevation: number;
}

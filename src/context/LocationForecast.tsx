import { createContext } from "react";
import { ForecastData } from "../interface/ForecastData";
import { useLocationForecast } from "../hooks/useLocationForecast";

type TlocationForecastProviderProps = {
  children: React.ReactNode;
};

export const locationForecastContext = createContext<
  [ForecastData | null, boolean]
>([null, true]);

export const LocationForecastProvider = ({
  children,
}: TlocationForecastProviderProps) => {
  const { locationForecast, isLoading } = useLocationForecast();
  return (
    <locationForecastContext.Provider value={[locationForecast, isLoading]}>
      {children}
    </locationForecastContext.Provider>
  );
};

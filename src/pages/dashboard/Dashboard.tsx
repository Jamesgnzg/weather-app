import { LocationForecastProvider } from "../../context/LocationForecast";
import LocationInfoCard from "../../features/dashboard/cards/LocationInfoCard";
import WeatherInfoCards from "../../features/dashboard/cards/WeatherInfoCards";
import WeeklyForecast from "../../features/dashboard/rightBar/WeeklyForecast";
import LocationSearchBar from "../../features/dashboard/SearchBar";

const Dashboard = () => {
  return (
    <LocationForecastProvider>
      <div className="grid grid-cols-12 gap-4 auto-cols-auto auto-rows-auto">
        <div className="md:col-span-9 pt-4 pb-5">
          <LocationSearchBar />
          <LocationInfoCard />
          <WeatherInfoCards />
        </div>
        <div className="md:col-span-3">
          <WeeklyForecast />
        </div>
      </div>
    </LocationForecastProvider>
  );
};

export default Dashboard;

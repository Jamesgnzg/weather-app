import LocationCard from "./LocationInfo/LocationCard";
import TemperatureCard from "./LocationInfo/TemperatureCard";

const LocationInfoCard = (): React.ReactElement => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:p-4 md:gap-2 mt-4 rounded-xl bg-main">
        <LocationCard />
        <TemperatureCard />
      </div>
    </>
  );
};

export default LocationInfoCard;

import WindSpeed from "./WeatherInfo/WindSpeed";
import RainChance from "./WeatherInfo/RainChance";
import Pressure from "./WeatherInfo/Pressure";
import UvIndex from "./WeatherInfo/UvIndex";

const WeatherInfoCards = (): React.ReactElement => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-5 md:pt-5 rounded-lg">
        <WindSpeed />
        <RainChance />
        <Pressure />
        <UvIndex />
      </div>
    </>
  );
};

export default WeatherInfoCards;

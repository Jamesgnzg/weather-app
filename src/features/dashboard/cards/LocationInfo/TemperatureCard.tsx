import { useContext } from "react";
import { locationForecastContext } from "../../../../context/LocationForecast";
import Chart from "react-apexcharts";

const TemperatureCard = (): React.ReactElement => {
  const [forecastData, isLoading] = useContext(locationForecastContext);
  const subtitleStyling = "font-bold text-sm text-main-100 inline-flex gap-5";
  const chartConfig = {
    type: "line",
    height: 150,
    series: [
      {
        name: "Temperature",
        data: [0],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#3970a6"],
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: ["Morning", "Noon", "Evening", "Night"],
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: false,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        enabled: false,
        theme: "light",
      },
    },
  };

  if (forecastData) {
    const hourly = forecastData.hourly;
    chartConfig.series[0].data = [
      hourly?.temperature_2m[5],
      hourly?.temperature_2m[12],
      hourly?.temperature_2m[18],
      hourly?.temperature_2m[22],
    ];
  }

  return (
    <>
      <div className={`card ${isLoading ? `skeleton` : `bg-background-200`}`}>
        <div className="card-body">
          {forecastData && (
            <h2 className="card-title text-main-200">Temperature</h2>
          )}
          {
            // @ts-ignore
            <Chart {...chartConfig} /> // Apex charts has an error with React v18
          }
          <div className="card-actions justify-between mt-1">
            {forecastData && (
              <div className="flex flex-col">
                <p className={subtitleStyling}>Morning</p>
                <p
                  className={`${subtitleStyling} ml-2`}
                >{`${forecastData?.hourly?.temperature_2m[5]}°`}</p>
              </div>
            )}
            {forecastData && (
              <div className="flex flex-col">
                <p className={subtitleStyling}>Noon</p>
                <p
                  className={`${subtitleStyling} ml-2`}
                >{`${forecastData?.hourly?.temperature_2m[12]}°`}</p>
              </div>
            )}
            {forecastData && (
              <div className="flex flex-col">
                <p className={subtitleStyling}>Evening</p>
                <p
                  className={`${subtitleStyling} ml-2`}
                >{`${forecastData?.hourly?.temperature_2m[18]}°`}</p>
              </div>
            )}
            {forecastData && (
              <div className="flex flex-col">
                <p className={subtitleStyling}>Night</p>
                <p
                  className={`${subtitleStyling} ml-1`}
                >{`${forecastData?.hourly?.temperature_2m[22]}°`}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TemperatureCard;

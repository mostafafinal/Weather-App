import weatherState from "../weatherState.js";

function handleDetailsData(data) {
  try {
    if (!data) {
      throw new Error("Error From The API Happens In Details Functionality");
    }

    const getHumidity = () => data.current.humidity;
    const getWindKph = () => data.current.wind_kph;
    const getWindMph = () => data.current.wind_mph;
    const getWindDirection = () => data.current.wind_dir;
    const getCloudCoverage = () => data.current.cloud;
    const getUvIndex = () => data.current.uv;
    const getRainAmountIn = () => data.current.precip_in;
    const getRainAmountmm = () => data.current.precip_mm;

    return {
      getHumidity,
      getWindKph,
      getWindMph,
      getWindDirection,
      getCloudCoverage,
      getUvIndex,
      getRainAmountIn,
      getRainAmountmm,
    };
  } catch (err) {
    alert(err);
  }
}

weatherState.subscribe(handleDetailsData);

export { handleDetailsData };

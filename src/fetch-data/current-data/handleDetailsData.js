import fetchAllData from "./fetchAllData.js";

const data = await fetchAllData();

function handleDetailsData() {
  try {
    if (!data) {
      throw new Error("Error From The API Happens In Details Functionality");
    }

    const humidity = () => data.current.humidity;
    const windKph = () => data.current.wind_kph;
    const windMph = () => data.current.wind_mph;
    const windDirection = () => data.current.wind_dir;
    const cloudCoverage = () => data.current.cloud;
    const uvIndex = () => data.current.uv;
    const rainAmountIn = () => data.current.precip_in;
    const rainAmountmm = () => data.current.precip_mm;

    return {
      humidity,
      windKph,
      windMph,
      windDirection,
      cloudCoverage,
      uvIndex,
      rainAmountIn,
      rainAmountmm,
    };
  } catch (err) {
    alert(err);
  }
}

export { handleDetailsData };

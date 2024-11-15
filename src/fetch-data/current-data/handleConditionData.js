import fetchAllData from "../fetchAllData.js";

const data = await fetchAllData();

function handleConditionData() {
  try {
    if (!data) {
      throw new Error("Error From The API Happens In Condition Functionality");
    }

    const tempC = () => data.current.temp_c;
    const tempF = () => data.current.temp_f;
    const conditionText = () => data.current.condition.text;
    const conditionIconCode = () =>
      data.current.condition.icon.match(/(\d+\.png)/)[0];

    return {
      tempC,
      tempF,
      conditionText,
      conditionIconCode,
    };
  } catch (err) {
    alert(err);
  }
}

export { handleConditionData };

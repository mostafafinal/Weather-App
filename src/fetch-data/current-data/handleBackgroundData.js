const handleConditionText = (conditionText) => {
  if (conditionText.split(" ").length === 1) {
    return conditionText;
  }

  if (conditionText.includes("fog") || conditionText.includes("mist")) {
    return "mist";
  } else if (conditionText.includes("rain")) {
    return "rainy";
  } else if (conditionText.includes("thunder")) {
    return "thundery";
  } else if (conditionText.includes("snow")) {
    return "snowy";
  }

  return conditionText.split(" ").join("_");
};

const handleBackgroundData = (data) => {
  const condition = data.current.condition.text.toLowerCase();
  const dayMode = data.current.condition.icon.match(/\/([^/]+)\/[^/]+$/)[1];

  const getBgImage = () => `${dayMode}_${handleConditionText(condition)}`;
  const getBgMode = () => dayMode;

  return { getBgImage, getBgMode };
};

export { handleBackgroundData };

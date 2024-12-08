function getCurrentDayNextHours(data) {
  const currentHour = new Date(data.current.last_updated).getHours();
  const currentDayHours = data.forecast.forecastday[0].hour;

  const nextHours = currentDayHours.filter(
    (hour) => new Date(hour.time).getHours() > currentHour
  );

  const nextHoursWithDayTitle = nextHours.map((hour) => {
    return { text: "Today", ...hour };
  });

  return nextHoursWithDayTitle;
}

function getRestOfNextHours(data) {
  const currentHour = new Date(data.current.last_updated).getHours();
  const nextDayHours = data.forecast.forecastday[1].hour;

  const nextHours = nextDayHours.filter(
    (hour) => new Date(hour.time).getHours() < currentHour
  );

  const nextHoursWithDayTitle = nextHours.map((hour) => {
    return { text: "Tomorrow", ...hour };
  });

  return nextHoursWithDayTitle;
}

function getNextHours(data) {
  const nextHours = [getCurrentDayNextHours(data), getRestOfNextHours(data)];

  return nextHours.flat();
}

export { getNextHours };

import fetch from "node-fetch";

export async function handler(event, context) {
  const location = event.queryStringParameters.location || "cairo";
  const API_KEY = process.env.WEATHER_API_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "API key is not set" }),
    };
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=3&key=${API_KEY}`,
      { mode: "cors" }
    );

    if (response.status !== 200) {
      return {
        statusCode: response.status,
        body: JSON.stringify({
          message: "Error fetching weather data",
          error: await response.json(),
        }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to fetch weather data",
        error: error.message,
      }),
    };
  }
}

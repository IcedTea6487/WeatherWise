const apiKey = "b0f5a1294eed005c8f54a4e37d6c84d2"; 
const city = "Cagayan de Oro";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      document.getElementById("temp").innerText = "❌ City not found or API error.";
      return;
    }

    const temp = data.main.temp;
    const weather = data.weather[0].main;
    const description = data.weather[0].description;

    document.getElementById("temp").innerText = `🌡️ Temperature: ${temp}°C`;
    document.getElementById("condition").innerText = `☁️ Condition: ${weather} (${description})`;

    let message = "";
    if (weather.includes("Rain")) message = "🌧️ Ulan sa CDO — magpayong ka!";
    else if (weather.includes("Clear")) message = "☀️ Mainit sa CDO — magdala ng tubig at cap!";
    else if (weather.includes("Cloud")) message = "☁️ Medyo maulap — okay lang lumabas!";
    else if (weather.includes("Thunderstorm")) message = "⛈️ Malakas ang ulan — manatili sa loob!";
    else message = "🌈 Maging handa sa kahit anong panahon!";

    document.getElementById("message").innerText = message;
  } catch (err) {
    console.error(err);
    document.getElementById("temp").innerText = "⚠️ Unable to fetch weather data.";
  }
}

getWeather();

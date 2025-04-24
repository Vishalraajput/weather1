async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "9781cb6d069cd0e0393533099fd33f31"; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  if (!city) {
    document.getElementById("result").innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
    } else {
      document.getElementById("result").innerHTML = `<p>City not found. Please check the name.</p>`;
    }
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>Error fetching weather data.</p>`;
  }
}

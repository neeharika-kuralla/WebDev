const API_KEY = '8eb8f149fe0f08b19536cabcae9a2bd5';

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const error = document.getElementById('error');
  const weatherCard = document.getElementById('weatherCard');

  error.classList.add('hidden');
  weatherCard.classList.add('hidden');

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) throw new Error('City not found');

    const data = await response.json();

    // Extract data
    document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('description').textContent = data.weather[0].main;
    document.getElementById('temperature').textContent = `🌡 Temp: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;

    // Show card
    weatherCard.classList.remove('hidden');
  } catch (err) {
    error.textContent = err.message;
    error.classList.remove('hidden');
  }
}
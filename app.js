const API_KEY = `c1a6ffad2146daa691b3b9bbf099b3bb`;
const searchTemperature = () => {
  const city = document.getElementById('city-name').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  // console.log(url);

  fetch(url)
  .then(res => res.json())
  .then(data => displayTemperature(data))
}

const displayTemperature = temperature => {
  console.log(temperature);
}
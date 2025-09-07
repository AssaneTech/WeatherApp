async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "9ba89d5c97f44b83948214741250709"; // ta clé
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erreur lors de la requête");

    const data = await response.json();
    console.log(data);

    document.getElementById("result").innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>Température : ${data.current.temp_c}°C</p>
      <p>Condition : ${data.current.condition.text}</p>
      <img src="https:${data.current.condition.icon}" alt="icon météo">
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = "City not found or API Error.";
    console.error(error);
  }
}

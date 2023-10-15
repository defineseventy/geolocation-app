function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "2da1e54d97209acb6696623d0a65fa9e";

  location.innerHTML = "Locating...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    //get exact coordinates
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      //set to metric
      "&units=metric";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let temp = data.main.temp;
        //get temperature in celsius
        temperature.innerHTML = temp + "° C";
        //get location by latitude & longitude
        location.innerHTML =
          data.name + " (" + latitude + "°, " + longitude + "°)";
        //put description
        description.innerHTML = data.weather[0].main;
      });
  }
//place an error message
  function error() {
    location.innerHTML = "Error when retrieving your location";
  }
}
//call the function 
getWeather();

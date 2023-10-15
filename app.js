function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");
  let api = "https://api.openweathermap.org/data/2.5/weather";
  //input own API key here (get from Open Weather Map
  let apiKey = "2da1e54d97209acb6696623d0a65fa9e";

  location.innerHTML = "Locating...";
  /*built in web APi that allows us to request for the user's location, if permission is granted, 
  then the current position as well as the temperature will be displayed*/
  navigator.geolocation.getCurrentPosition(success, error);
  function success(position){
    //get latitude & longitude by usinf the coordinates
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  
    //get the url
    let url = 
      api + 
      "?lat=" +
      latitude + 
      "?lon=" +
      longitude + 
      "&appid=" +
      apiKey = 
      //I put it as metric as a test
      "&units=metric";
    //use that info to get all the needed stuff
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let temp = data.main.temp;
        temperature.innerHTML = temp + "° C";
        location.innerHTML = 
        data.name + " (" + latitude + "°, " + longitude + "°)";
        description.innerHTML = data.weather[0].main;
    });
}
//have an error message pop up
function error(){
  location.innerHTML = "Error encountered when trying to retrieve your location";
}
//call the function getWeather
getWeather();

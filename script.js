const apiKey = "6ec028bc69161c6d80e1db8dcaa1e8f9";
const apiContainer = document.querySelector("#apiContainer");
const submit = document.querySelector("#submit");

function gitWeather(city){
    var city = "phoenix";
    const weatherUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(weatherUrl)
    fetch(weatherUrl)
    .then((data)=> data.json())
    .then((data => {
        console.log(data)
    }))
}


submit.addEventListener("click", function(){gitWeather();});
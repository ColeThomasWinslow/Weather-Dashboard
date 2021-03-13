const apiKey = "6ec028bc69161c6d80e1db8dcaa1e8f9";
const apiContainer = document.querySelector("#apiContainer");
const submit = document.querySelector("#submit");
var searchBar = document.querySelector("#searchBar")

function getWeather(city){
    const weatherUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    console.log(weatherUrl)
    fetch(weatherUrl)
    .then((data)=> data.json())
    .then((data => {
        console.log(data)
        console.log(data.main.feels_like);
        apiContainer.innerHTML="";
        const cloudsEl =document.createElement("p");
        cloudsEl.textContent= "weather:" + " " + (data.weather[0].description);
        apiContainer.append(cloudsEl);

        const tempEl = document.createElement("p");
        tempEl.textContent= "temp:" + " " + (data.main.feels_like) + " " + "degrees";
        apiContainer.append(tempEl);

        
    }))
}
function handleSubmit(){
    const input = searchBar.value;
    getWeather(input)
  
    console.log(input)
  }

submit.addEventListener("click", handleSubmit);
const url = `https://api.openweathermap.org/data/2.5/`;
const key = `a6d9dfad6727edabe55b972aaf42773a`;

const setQuery = (e) => {
    if (e.keyCode == `13`)
        getResult(searchBar.value);
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query).then(weather => {
        return weather.json();
    }).then(displayResult)
}

const displayResult = (result) => {
    console.log(result);

    let city = document.querySelector(".city")
    let temp = document.querySelector(".temp")
    let desc = document.querySelector(".desc")
    let minmax = document.querySelector(".minmax")

    city.innerHTML = `${result.name}, ${result.sys.country}`
    temp.innerHTML = `${Math.round(result.main.temp)} °C`;
    desc.innerHTML = `Tahmini hava durumu;  ${result.weather[0].description}`
    minmax.innerHTML = `En yüksek ve En düşük tahmin; ${Math.round(result.main.temp_min)} °C - ${Math.round(result.main.temp_max)} °C`
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
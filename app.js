const API_KTY = `01fc593938de8f3c3c67a8793d7590da`;

const loadTemeratur = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KTY}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    // const temperature = document.getElementById('temperature')
    // temperature.innerText = data.main.temp;
    setinnerTextById('temperature', data.main.temp)
    setinnerTextById('clouds', data.weather[0].main)
  console.log(data.weather[0].main);
}

const setinnerTextById = (id, text) =>{
    const temperatureText = document.getElementById(id);
    temperatureText.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field')
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemeratur(city);
})

loadTemeratur('dhaka')
 
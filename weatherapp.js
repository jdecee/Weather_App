var inputButton = document.querySelector('.button')
var inputField = document.querySelector('.inputValue')
var highTemp = document.querySelector('.high')
var lowTemp = document.querySelector('.low')
var forecastDescription = document.querySelector('.forecast')
var humidityTemp = document.querySelector('.humidity')

inputButton.addEventListener('click',function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputField.value+'&appid=9f650b5d97cf4d3a36db857b0a2b6d22')
    .then(response => response.json())
    .then(data =>{ console.log(data)
        document.querySelector('.city').innerHTML = data['name']
        var highTempValue = data['main']['temp_max']
        highTemp.innerHTML = temperatureConverter(highTempValue) + "°"
        var lowTempValue = data['main']['temp_min']
        lowTemp.innerHTML = temperatureConverter(lowTempValue) + "°"
        var forecastDescript = data['weather'][0]['description']
        forecastDescription.innerHTML = forecastDescript
        var humidityTempValue = data['main']['humidity']
        humidityTemp.innerHTML = humidityTempValue + "%"
    })
})

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    return Math.floor(((valNum-273.15)*1.8)+32);
  }  
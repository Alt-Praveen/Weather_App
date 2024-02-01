import './App.css'
import { useState } from 'react'

let API_key = "7d01813c7c5fbf30ca37aa4728eb096a";

function App() {
  const [temp, setTemp] = useState("")
  const [weatherName, setWeatherName] = useState("")
  const [city, setCity] = useState("")
  const [humidity, setHumidity] = useState("")
  const [wind, setWind] = useState("")

  async function search() {
    const cityName = document.getElementById("search").value
    console.log(cityName);

    if (!cityName) {
      alert("Enter City Name")
    }

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_key}`)
    let data = await response.json()
    console.log(data);

    // const temp = document.getElementById("temp")
    // const weatherName = document.getElementById("weatherName")
    // const city = document.getElementById("city")
    // const humidity = document.getElementById("humidity")
    // const wind = document.getElementById("wind")

    // temp.innerHTML = data.main.temp;
    // weatherName.innerHTML = data.weather[0].main
    // city.innerHTML = data.name
    // humidity.innerHTML = data.main.humidity
    // wind.innerHTML = data.wind.speed

    setTemp(data.main.temp)
    setWeatherName(data.weather[0].main)
    setCity(data.name)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
  }

  return (
    <>
      <div className='weather-card'>
        <div className="max-w-sm min-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          {/* Search */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
              <button type="button" onClick={() => search()} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
              </button>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <img className="rounded-t-lg" style={{ maxWidth: 224, maxHeight: 224 }} src={`./src/icons/weather-icons/${weatherName}.png`} alt="" />
          </div>

          <div className="p-5">
            <h5 id='temp' className="mb-2 text-5xl tracking-tight text-gray-900 dark:text-white">
              {`${temp}`} °C
            </h5>
            <p id='weatherName' className="dark:text-gray-400">
              {`${weatherName}`}
            </p>
            <p id='city' className="font-bold tracking-tight text-gray-900 dark:text-white">
              {`${city}`}
            </p>
            <div>
              <p id='humidity' className="dark:text-gray-400">
                Humidity: {`${humidity}`}%
              </p>
              <p id='wind' className="dark:text-gray-400">
                Wind: {`${wind}`} km/h
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

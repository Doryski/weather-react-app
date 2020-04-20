import React, { createContext, useState } from 'react'
import apikey from '../APIKey'

// You are required to display proper attribution when using AccuWeather APIs.
// Please include the AccuWeather logo, linked to our website (http://www.accuweather.com)
// in clear view on your app or product. AccuWeather logo with linking must appear on all pages/screens
// where AccuWeather content appears, as stated in the Terms of Use.

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
	const [cityList, setCityList] = useState([])
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState([])
	const [sunData, setSunData] = useState([])

	const getCityData = async () => {
		const response = await fetch(
			`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${city}&details=true`
		)

		let data = await response.json()

		setCityList(data)
		return Promise.all(data)
	}

	const getWeatherData = async cityKey => {
		const response = await fetch(
			`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apikey}&details=true`
		)

		let weatherData = await response.json()
		setWeather(weatherData)
		return Promise.all(weatherData)
	}
	const getSunData = async cityKey => {
		const response = await fetch(
			`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apikey}&details=true`
		)

		let sunData = await response.json()
		setSunData(sunData)
		return sunData
	}

	const handleSubmit = async e => {
		e.preventDefault()
		await getCityData()
	}

	const [cityChosen, setCityChosen] = useState({})
	const handleCityClick = async city => {
		setCityChosen(city)
		await getWeatherData(city.Key)
		await getSunData(city.Key)
	}

	return (
		<GlobalContext.Provider
			value={{
				handleCityClick,
				handleSubmit,
				cityList,
				setCityList,
				city,
				setCity,
				cityChosen,
				weather,
				sunData,
				getSunData,
				getWeatherData,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalContextProvider

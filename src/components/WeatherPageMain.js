import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import {
	MainSection,
	Location,
	Temperature,
} from './StyledComponents/WeatherPageMain'
const WeatherPageMain = () => {
	const { cityChosen, weather } = useContext(GlobalContext)
	const cityName = cityChosen.EnglishName
	const administrativeArea =
		cityChosen.AdministrativeArea.EnglishName
	const country = cityChosen.Country.EnglishName
	const temperatureValue = weather[0].Temperature.Metric.Value
	const temperatureUnit = `°${weather[0].Temperature.Metric.Unit}`

	return (
		<MainSection>
			<Location>
				<h3>{cityName} </h3>
				<small>
					{administrativeArea}, {country}
				</small>
			</Location>
			<Temperature>
				{temperatureValue}
				<span>{temperatureUnit}</span>
			</Temperature>
		</MainSection>
	)
}

export default WeatherPageMain

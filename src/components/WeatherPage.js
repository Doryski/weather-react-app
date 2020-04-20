import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalContext'
import {
	WiHorizon,
	WiUmbrella,
	WiDirectionDown,
	WiStrongWind,
} from 'weather-icons-react'
import moment from 'moment'

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 80% 20%;
	height: 100%;
`

const List = styled.ul`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-size: 1.2em;
`

const Location = styled.section`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0.3em;
	left: 0.3em;
`

const Temperature = styled.h1`
	font-size: 5em;

	& span {
		font-size: 0.5em;
		vertical-align: top;
	}
`

const MainSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`

const Sun = styled.li`
	display: flex;
	position: relative;

	& span {
		margin-left: 0.5em;
		display: flex;
		flex-direction: column;
	}
`

const ListItem = styled.li`
	display: flex;
	flex-direction: column;
	& svg {
		margin: auto;
	}
`

const WeatherPage = () => {
	const { cityChosen, weather, sunData, setCityList } = useContext(
		GlobalContext
	)

	useEffect(() => {
		setCityList([])
	}, [])

	const cityName = cityChosen.EnglishName
	const administrativeArea =
		cityChosen.AdministrativeArea.EnglishName
	const country = cityChosen.Country.EnglishName
	const temperatureValue = weather[0].Temperature.Metric.Value
	const temperatureUnit = `°${weather[0].Temperature.Metric.Unit}`
	const rainValue = weather[0].Precip1hr.Metric.Value
	const rainUnit = weather[0].Precip1hr.Metric.Unit
	const windSpeedValue = weather[0].Wind.Speed.Metric.Value
	const windSpeedUnit = weather[0].Wind.Speed.Metric.Unit
	const sunRise = moment(sunData.DailyForecasts[0].Sun.Rise).format(
		'HH:mm'
	)
	const sunSet = moment(sunData.DailyForecasts[0].Sun.Set).format(
		'HH:mm'
	)
	const size = '32'

	return (
		<Wrapper>
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
			<List>
				<ListItem>
					<WiUmbrella size={size} />
					{rainValue} {rainUnit}
				</ListItem>
				<ListItem>
					<WiStrongWind size={size} />
					{windSpeedValue} {windSpeedUnit}
				</ListItem>
				<Sun>
					<span>
						<WiDirectionDown
							size={size}
							style={{
								transform: 'rotate(180deg)',
								margin: 'auto',
							}}
						/>
						{sunRise}
					</span>
					<WiHorizon
						size={+size + 6}
						style={{
							position: 'absolute',
							top: '-.3em',
							left: '2.3em',
						}}
					/>
					<span>
						<WiDirectionDown
							size={size}
							style={{ margin: 'auto' }}
						/>
						{sunSet}
					</span>
				</Sun>
			</List>
		</Wrapper>
	)
}

export default WeatherPage

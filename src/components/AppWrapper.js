import React, { useContext } from 'react'
import Search from './Search'
import CitiesListPage from './CitiesListPage'
import WeatherPage from './WeatherPage'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import map from '../functions/map'
import { GlobalContext } from '../context/GlobalContext'

const rgba = temperature => {
	const red = temperature < -5 ? '0' : '255'
	const green =
		temperature > -5 && temperature < 5
			? '255'
			: temperature > 5
			? map(temperature, 5, 40, 255, 128)
			: '0'
	const blue = temperature > 5 ? '0' : '255'
	const alpha = '.3'
	return `rgba(${red},${green},${blue},${alpha})`
}

const Wrapper = styled.div`
	height: 80vh;
	display: grid;
	grid-template-rows: 10vh 69vh;
	padding-bottom: 0.3em;
	min-width: 300px;
	width: 80vw;
	max-width: 500px;
	border: 2px solid orange;
	border-radius: 0.5em;
	background: ${props => rgba(props.temperature)};
`

const AppWrapper = () => {
	const { temperatureValue, homePath } = useContext(GlobalContext)

	return (
		<Wrapper temperature={temperatureValue}>
			<Search />
			<Switch>
				<Route
					path={`${homePath}/cities`}
					exact
					component={CitiesListPage}
				/>
				<Route
					path={`${homePath}/weather/:city`}
					component={WeatherPage}
				/>
			</Switch>
		</Wrapper>
	)
}

export default AppWrapper

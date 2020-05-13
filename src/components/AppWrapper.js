import React, { useContext } from 'react'
import Search from './Search'
import CitiesListPage from './CitiesListPage'
import WeatherPage from './WeatherPage'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import map from '../functions/map'
import { GlobalContext } from '../context/GlobalContext'

const rgba = temperature => {
	const breakpoint = 5
	const red = temperature < -breakpoint ? '0' : '255'
	const green =
		temperature > -breakpoint && temperature < breakpoint
			? '255'
			: temperature > breakpoint
			? map(temperature, breakpoint, 40, 255, 128)
			: '0'
	const blue = temperature > breakpoint ? '0' : '255'
	const alpha = '.3'
	return `rgba(${red},${green},${blue},${alpha})`
}

const Wrapper = styled.div`
	height: 80vh;
	display: grid;
	grid-template-rows: 10vh 69vh;
	padding-bottom: ${props => props.theme.padding.small};
	min-width: 300px;
	width: 80vw;
	max-width: 500px;
	border: 2px solid ${props => props.theme.colors.orange};
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

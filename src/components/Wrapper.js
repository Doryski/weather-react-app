import React, { useContext } from 'react'
import Search from './Search'
import CityListPage from './CityListPage'
import WeatherPage from './WeatherPage'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import map from '../functions/map'
import { GlobalContext } from '../context/GlobalContext'

const StyledWrapper = styled.div`
	height: 80vh;
	display: grid;
	grid-template-rows: 10vh 69vh;
	padding-bottom: 0.3em;
	min-width: 300px;
	width: 80vw;
	max-width: 500px;
	border: 2px solid orange;
	border-radius: 0.5em;
	background: ${props => `rgba(${
		props.temperature < -5 ? '0' : '255'
	},
		${
			props.temperature > -5 && props.temperature < 5
				? '255'
				: props.temperature > 5
				? map(props.temperature, 5, 40, 255, 128)
				: '0'
		},
		${props.temperature > 5 ? '0' : '255'}, .3)`};
`

const Wrapper = () => {
	const { temperatureValue, homePath } = useContext(GlobalContext)

	return (
		<StyledWrapper temperature={temperatureValue}>
			<Search />
			<Switch>
				<Route
					path={`${homePath}/cities`}
					exact
					component={CityListPage}
				/>
				<Route
					path={`${homePath}/weather/:city`}
					component={WeatherPage}
				/>
			</Switch>
		</StyledWrapper>
	)
}

export default Wrapper

import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import styled from 'styled-components'
import WeatherPageFooter from './WeatherPageFooter'
import WeatherPageMain from './WeatherPageMain'

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 80% 20%;
	height: 100%;
`

const WeatherPage = () => {
	const { setCityList } = useContext(GlobalContext)
	useEffect(() => {
		setCityList([])
	}, [])

	return (
		<Wrapper>
			<WeatherPageMain />
			<WeatherPageFooter />
		</Wrapper>
	)
}

export default WeatherPage

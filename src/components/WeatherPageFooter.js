import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import {
	WiHorizon,
	WiUmbrella,
	WiDirectionDown,
	WiStrongWind,
} from 'weather-icons-react'
import moment from 'moment'
import {
	List,
	ListItem,
	Sun,
} from './StyledComponents/WeatherPageFooter'

const WeatherPageFooter = () => {
	const { weather, sunData } = useContext(GlobalContext)
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
	// icons
	const iconSize = '32'
	const sunRiseIconStyle = {
		transform: 'rotate(180deg)',
		margin: 'auto',
	}
	const horizonIconStyle = {
		position: 'absolute',
		top: '-.3em',
		left: '2.3em',
	}
	const sunSetIconStyle = { margin: 'auto' }
	return (
		<List>
			<ListItem>
				<WiUmbrella size={iconSize} />
				{rainValue} {rainUnit}
			</ListItem>
			<ListItem>
				<WiStrongWind size={iconSize} />
				{windSpeedValue} {windSpeedUnit}
			</ListItem>
			<Sun>
				<span>
					<WiDirectionDown
						size={iconSize}
						style={sunRiseIconStyle}
					/>
					{sunRise}
				</span>
				<WiHorizon
					size={+iconSize + 6}
					style={horizonIconStyle}
				/>
				<span>
					<WiDirectionDown
						size={iconSize}
						style={sunSetIconStyle}
					/>
					{sunSet}
				</span>
			</Sun>
		</List>
	)
}

export default WeatherPageFooter

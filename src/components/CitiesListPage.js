import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useHistory } from 'react-router-dom'
import {
	ListItem,
	Link,
} from './StyledComponents/CitiesListPage'

const CitiesListPage = () => {
	const { handleCityClick, cityList, homePath } = useContext(
		GlobalContext
	)
	const history = useHistory()
	const handleLinkClick = async city => {
		await handleCityClick(city)
		await history.push(`${homePath}/weather/${city.EnglishName}`)
	}

	return (
		<ul>
			{cityList.map(city => (
				<ListItem key={city.Key}>
					<Link onClick={() => handleLinkClick(city)}>
						<span>{city.EnglishName}</span>
						<span>
							{city.AdministrativeArea.EnglishName},{' '}
							{city.Country.EnglishName},{' '}
							{city.Region.EnglishName}
						</span>
					</Link>
				</ListItem>
			))}
		</ul>
	)
}

export default CitiesListPage

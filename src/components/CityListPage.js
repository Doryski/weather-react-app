import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const ListItem = styled.li`
	position: relative;
	display: block;
	background: #e6eefc;
	margin-top: 0.1em;
	border: 1px solid rgba(0, 0, 0, 0.125);
	&:hover {
		background: #ffc965;
	}
`
const Link = styled.a`
	padding: 0.75rem 1.25rem;
	display: flex;
	justify-content: space-between;
`

const CityListPage = () => {
	const { handleCityClick, cityList, homePath } = useContext(GlobalContext)
	let history = useHistory()
	return (
		<ul>
			{cityList.map(city => (
				<ListItem key={city.Key}>
					<Link
						onClick={async () => {
							await handleCityClick(city)
							await history.push(
								`${homePath}/weather/${city.EnglishName}`
							)
						}}
					>
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

export default CityListPage

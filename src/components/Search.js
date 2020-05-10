import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useHistory } from 'react-router-dom'
import {
	Button,
	Input,
} from './StyledComponents/Search'

const Search = () => {
	const { homePath, handleSubmit, setCity, city } = useContext(
		GlobalContext
	)
	const history = useHistory()

	return (
		<form
			onSubmit={e => {
				handleSubmit(e)
				history.push(`${homePath}/cities`)
				setCity('')
			}}
		>
			<Input
				placeholder='Search for city'
				type='text'
				value={city}
				onChange={e => setCity(e.target.value)}
			/>
			<Button>Search</Button>
		</form>
	)
}

export default Search

import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Button = styled.button`
	background: orange;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1.2em;
	border-radius: 0.25rem;
	&:hover {
		background: #ff7d4d;
	}
`

const Input = styled.input`
	padding: 0.375rem 0.75rem;
	margin-right: 0.3em;
	font-size: 1em;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	background: #f2f2f2;
`

const Search = () => {
	const { handleSubmit, setCity, city } = useContext(GlobalContext)
	let history = useHistory()
	
	return (
		<form
			onSubmit={e => {
				handleSubmit(e)
				history.push('/cities')
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

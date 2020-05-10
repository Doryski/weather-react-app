import styled from 'styled-components'

export const List = styled.ul`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-size: 1.2em;
`

export const Sun = styled.li`
	display: flex;
	position: relative;

	& span {
		margin-left: 0.5em;
		display: flex;
		flex-direction: column;
	}
`

export const ListItem = styled.li`
	display: flex;
	flex-direction: column;
	& svg {
		margin: auto;
	}
`

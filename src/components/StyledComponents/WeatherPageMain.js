import styled from 'styled-components'

export const Location = styled.section`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0.3em;
	left: 0.3em;
`

export const Temperature = styled.h1`
	font-size: 5em;

	& span {
		font-size: 0.5em;
		vertical-align: top;
	}
`

export const MainSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`

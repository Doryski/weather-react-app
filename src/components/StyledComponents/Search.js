import styled from 'styled-components'

export const Button = styled.button`
	background: ${props => props.theme.colors.orange};
	border: 1px solid transparent;
	font-size: 1.1em;
	border-radius: 0.25rem;
	&:hover {
		background: ${props => props.theme.colors.redish};
	}
`

export const Input = styled.input`
	padding: ${props => props.theme.padding.smallB}
		${props => props.theme.padding.medium};
	margin-right: ${props => props.theme.padding.small};
	font-size: 1em;
	border: 1px solid ${props => props.theme.colors.light};
	border-radius: 0.25rem;
	background: ${props => props.theme.colors.white};
`

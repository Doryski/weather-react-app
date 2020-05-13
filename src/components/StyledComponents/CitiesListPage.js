import styled from 'styled-components'

export const ListItem = styled.li`
	position: relative;
	display: block;
	background: ${props => props.theme.colors.lightblue};
	margin-top: ${props => props.theme.padding.xs};
	border: 1px solid ${props => props.theme.colors.light};
	&:hover {
		background: ${props => props.theme.colors.lightorange};
	}
	@media only screen and (max-width: ${props =>
			props.theme.breakpoints.tablet}) {
		font-size: 80%;
	}
	@media only screen and (max-width: ${props =>
			props.theme.breakpoints.mobile}) {
		font-size: 60%;
	}
`
export const Link = styled.a`
	padding: ${props => props.theme.padding.medium}
		${props => props.theme.padding.large};
	display: flex;
	justify-content: space-between;
`

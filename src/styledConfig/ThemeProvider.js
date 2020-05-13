import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
    }

    #app {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
        padding: ${props => props.theme.padding.small};
        overflow-y: auto;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: ${props => props.theme.colors.dark};
    }

    button {
        cursor: pointer;
        text-align: center;
        
    }

    form {
        display: grid;
        grid-template-columns: 70% 30%;
        padding: ${props => props.theme.padding.small};
    }
    @media only screen and (max-width: ${props =>
		props.theme.breakpoints.tablet}) {
        form {
            font-size: 80%;
        }
    }
    @media only screen and (max-width: ${props =>
		props.theme.breakpoints.mobile}) {
        form {
            font-size: 70%;
        }
    }
`

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			{children}
		</>
	</ThemeProvider>
)

export default Layout

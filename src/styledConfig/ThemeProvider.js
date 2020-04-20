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
        padding: .3em;
        overflow-y: auto;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: black;
    }

    button {
        cursor: pointer;
        text-align: center;
        
    }

    form {
        display: grid;
        grid-template-columns: 70% 30%;
        padding: .3em;
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

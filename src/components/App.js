import React from 'react'
import Layout from '../styledConfig/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import GlobalContextProvider from '../context/GlobalContext'
import AppWrapper from './AppWrapper'

const App = () => {
	return (
		<GlobalContextProvider>
			<Layout>
				<BrowserRouter>
					<AppWrapper />
				</BrowserRouter>
			</Layout>
		</GlobalContextProvider>
	)
}

export default App

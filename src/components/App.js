import React from 'react'
import Layout from '../styledConfig/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import GlobalContextProvider from '../context/GlobalContext'
import Wrapper from './Wrapper'

const App = () => {
	return (
		<GlobalContextProvider>
			<Layout>
				<BrowserRouter>
					<Wrapper />
				</BrowserRouter>
			</Layout>
		</GlobalContextProvider>
	)
}

export default App

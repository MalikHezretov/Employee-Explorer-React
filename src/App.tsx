import React from 'react'
import './App.css'
import Home from '../src/components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Overview from './components/Overview'

export const App = (): JSX.Element => {
	return (
		<Router>
			<Switch>
				<Route path='/overview/:employeeName'>
					<Overview />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default App

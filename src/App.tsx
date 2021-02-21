import React from 'react'
import './App.css'
import Home from '../src/components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Overview from './components/Overview'

export const App = (): JSX.Element => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/overview/:employeeName'>
					<Overview />
				</Route>
			</Switch>
		</Router>
	)
}

export default App

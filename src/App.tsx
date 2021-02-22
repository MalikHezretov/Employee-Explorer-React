import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import Overview from './screens/Overview'

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

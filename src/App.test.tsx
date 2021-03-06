import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

test('rendering a component that uses useLocation', () => {
	const history = createMemoryHistory()
	const route = '/'
	history.push(route)
	render(
		<Router history={history}>
			<App />
		</Router>
	)

	const linkElement = screen.getByText(/Search of an employee/i)

	expect(linkElement).toBeInTheDocument()
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test('renders hidden label Search of an employee', () => {
	const history = createMemoryHistory()
	render(
		<Router history={history}>
			<Home />
		</Router>
	)
	const linkElement = screen.getByText(/Search of an employee/i)
	expect(linkElement).toBeInTheDocument()
})

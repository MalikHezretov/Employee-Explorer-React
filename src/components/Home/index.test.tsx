import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
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

test('change input value', () => {
	const history = createMemoryHistory()
	render(
		<Router history={history}>
			<Home />
		</Router>
	)
	const input = screen.getByTestId('search-box')
	fireEvent.change(input, 'Samad Pitt')
	expect(input).toBe('Samad Pitt')
})

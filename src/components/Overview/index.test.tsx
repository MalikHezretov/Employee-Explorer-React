import React from 'react'
import { render, screen } from '@testing-library/react'
import Overview from '.'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

test('rendering a component that uses useLocation', () => {
	const history = createMemoryHistory()
	const route = '/overview/:employeeName'
	history.push(route)
	const title = 'Employee Overview'
	render(
		<Router history={history}>
			<Overview />
		</Router>
	)

	expect(screen.getByTestId('overview-container')).toHaveTextContent(title)
})

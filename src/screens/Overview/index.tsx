import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findAllSubordinates } from './getAllSubordinates'
import './styles.css'

const Overview = (): JSX.Element => {
	const [listOfSubordinates, setListOfSubordinates] = useState<
		Array<string> | undefined
	>(undefined)

	const { employeeName }: { employeeName: string } = useParams()

	useEffect(() => {
		findAllSubordinates(employeeName as string).then((result: Array<string>) =>
			setListOfSubordinates(result)
		)
		// eslint-disable-next-line
	}, [])

	const subordinateEmployees = listOfSubordinates?.map((subordinates) => (
		<p key={subordinates}>{subordinates}</p>
	))
	return (
		<div className='overview-container' data-testid='overview-container'>
			<div className='header-title'>
				<h3>Employee Overview</h3>
			</div>
			<ul className='listStyle'>
				<h3>Subordinates of employee {employeeName}:</h3>
				{subordinateEmployees}
			</ul>
		</div>
	)
}

export default Overview

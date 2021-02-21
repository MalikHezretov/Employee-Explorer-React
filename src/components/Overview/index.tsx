import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { employeesUrl } from '../../utils'
import './styles.css'

const findAllSubordinates = async (person?: string) => {
	let queue: Array<string | undefined> = [person]
	let subordinates: Array<string> = []
	let temp: Array<string> = []

	while (queue.length > 0) {
		const person = queue.shift()
		let searchedPerson: any = await fetch(`${employeesUrl}${person}`)
		searchedPerson = await searchedPerson.json()
		temp = searchedPerson[1] ? searchedPerson[1]['direct-subordinates'] : []
		subordinates = subordinates.concat(temp)
		queue = queue.concat(temp)
	}
	return subordinates
}

const Overview = (): JSX.Element => {
	const [listOfSubordinates, setListOfSubordinates] = useState<
		Array<string> | undefined
	>(undefined)

	const { employeeName }: { employeeName: string } = useParams()

	useEffect(() => {
		findAllSubordinates(employeeName as string).then((result: Array<string>) =>
			setListOfSubordinates(result)
		)

		return () => {
			setListOfSubordinates(undefined)
		}
	}, [])

	const subordinateEmployees = listOfSubordinates?.map(
		(subordinates, index) => <p key={index}>{subordinates}</p>
	)
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

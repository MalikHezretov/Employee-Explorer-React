import { employeesUrl } from '../../services/api'

export const findAllSubordinates = async (person?: string) => {
	let queue: Array<string | undefined> = [person]
	let subordinates: Array<string> = []
	let temp: Array<string> = []

	while (queue.length > 0) {
		const person = queue.shift()
		// eslint-disable-next-line
		let searchedPerson: any = await fetch(`${employeesUrl}${person}`)
		searchedPerson = await searchedPerson.json()
		temp = searchedPerson[1] ? searchedPerson[1]['direct-subordinates'] : []
		subordinates = subordinates.concat(temp)
		queue = queue.concat(temp)
	}
	return Array.from(new Set(subordinates))
}

import React from 'react'
import { useState } from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'
import { employeesUrl } from '../../utils'

function Home() {
	const [searchQuery, setSearchQuery] = useState<string>('')
	const history = useHistory()
	const searchForAnEmployeeName = () => {
		fetch(employeesUrl)
			.then((res) => res.json())
			.then(
				(result: Array<string>) => {
					if (result?.includes(searchQuery)) {
						history.push('/overview', searchQuery)
						return
					}
					alert('Unable to find given employee name')
				},
				(err) => {
					alert(err)
				}
			)
	}

	return (
		<div className='container'>
			<form className='form' id='addItemForm'>
				<label htmlFor='employee-explorer'>
					<span className='visually-hidden'>Search of an employee</span>
				</label>
				<input
					type='text'
					className='search-box'
					id='addInput'
					placeholder='Search of an employee'
					value={searchQuery}
					onInput={(e: any) => setSearchQuery(e.target.value)}
				/>
				<button
					className='search-button'
					onClick={(e) => {
						e.preventDefault()
						searchForAnEmployeeName()
					}}
					disabled={!searchQuery}
				>
					SEARCH
				</button>
			</form>
		</div>
	)
}

export default Home

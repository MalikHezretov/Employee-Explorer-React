import React from 'react'
import { useState } from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'
import { employeesUrl } from '../../utils'

function Home() {
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [disableButton, setDisableButton] = useState<boolean>(false)
	const history = useHistory()

	const searchForAnEmployeeName = () => {
		setDisableButton(true)
		fetch(employeesUrl)
			.then((res) => res.json())
			.then(
				(result: Array<string>) => {
					if (result?.includes(searchQuery)) {
						history.push(`/overview/${searchQuery}`, searchQuery)
						return
					}
					alert('Unable to find given employee')
					setDisableButton(false)
				},
				(err) => {
					setDisableButton(false)
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
					data-testid='search-box'
					placeholder='Search of an employee'
					value={searchQuery}
					// eslint-disable-next-line
					onInput={(e: any) => setSearchQuery(e.target.value)}
				/>
				<button
					data-testid='btn-search'
					className='search-button'
					onClick={(e) => {
						e.preventDefault()
						searchForAnEmployeeName()
					}}
					disabled={!searchQuery || disableButton}
				>
					SEARCH
				</button>
			</form>
		</div>
	)
}

export default Home

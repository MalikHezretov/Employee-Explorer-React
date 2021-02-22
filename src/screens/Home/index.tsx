import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

function Home() {
	const [searchQuery, setSearchQuery] = useState<string>('')
	const history = useHistory()

	return (
		<div className='container'>
			<form className='form' id='addItemForm'>
				<h1>Employee Overview</h1>
				<label htmlFor='employee-explorer'>
					<span className='visually-hidden'>Search of an employee</span>
				</label>
				<input
					type='text'
					className='search-box'
					data-testid='search-box'
					placeholder='Search of an employee'
					value={searchQuery}
					onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
						setSearchQuery(event.target.value)
					}
				/>
				<button
					data-testid='btn-search'
					className='search-button'
					onClick={(e) => {
						e.preventDefault()
						history.push(`/overview/${searchQuery}`)
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

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
						history.push(`/overview/${searchQuery}`, searchQuery)
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

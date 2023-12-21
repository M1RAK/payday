import React from 'react'

import './Featured.scss'

function Featured() {
	return (
		<div className='featured'>
			<div className='container'>
				<div className='left'>
					<h1>
						Find the perfect <i>freelance</i> service for your
						business.
					</h1>
					<div className='search'>
						<div className='searchInput'>
							<img src='/img/search.png' alt='search-icon' />
							<input
								type='text'
								placeholder='Try searching "Ebook Writer"'
							/>
						</div>
						<button>Search</button>
					</div>
					<div className='popular'>
						<span>popular:</span>
						<button>Web design</button>
						<button>Ebook Writing</button>
						<button>Logo Design</button>
						<button>3D Animation</button>
					</div>
				</div>
				<div className='right'>
					<img
						src='/img/gift.png'
						height={500}
						width={500}
						alt='Hero'
					/>
				</div>
			</div>
		</div>
	)
}

export default Featured

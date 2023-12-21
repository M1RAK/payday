import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Navbar.scss'

function Navbar() {
	const [active, setActive] = useState(false)
	const [open, setOpen] = useState(false)
	const { pathname } = useLocation()

	const isActive = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', isActive)
	}, [])

	const currentUser = {
		id: 1,
		username: 'Al-Amin Nura',
		isSeller: true
	}

	return (
		<div
			className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
			<div className='container'>
				<Link to='/'>
					<div className='logo'>
						<span className='text'>Payday</span>
						<span className='dot'>.</span>
					</div>
				</Link>
				<div className='links'>
					<Link to='/payday-business'>Payday business</Link>
					<Link to='/explore'>Explore</Link>
					<Link to='/english'>English</Link>
					{!currentUser && <Link to='/sign-in'>Sign in</Link>}
					{!currentUser.isSeller && (
						<Link to='seller-onboarding/'>Become a seller</Link>
					)}
					{!currentUser.isSeller && (
						<Link to='/join'>
							<button className='join'>Join</button>
						</Link>
					)}
					{currentUser.isSeller && (
						<div className='user' onClick={() => setOpen(!open)}>
							<img
								className='avatar'
								src='/img/man.png'
								alt='avatar'
							/>
							<span>{currentUser?.username}</span>
							{open && (
								<div className='options'>
									{currentUser.isSeller && (
										<>
											<Link to='/gigs'>Gigs</Link>
											<Link to='/add-new-gig'>
												Add New Gig
											</Link>
										</>
									)}
									<Link to='/orders'>Orders</Link>
									<Link to='/messages'>Messages</Link>
									<Link to='/logout'>Logout</Link>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			{(active || pathname !== '/') && (
				<>
					<hr />
					<div className='menu'>
						<Link to='/'>Graphics & Design</Link>
						<Link to='/'>Video & Animation</Link>
						<Link to='/'>Writing & Translation</Link>
						<Link to='/'>AI services</Link>
						<Link to='/'>Digital Marketing</Link>
						<Link to='/'>Music & Audio</Link>
						<Link to='/'>Programming & Tech</Link>
					</div>
				</>
			)}
		</div>
	)
}

export default Navbar

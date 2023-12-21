import React from 'react'

import Featured from '../../components/Featured/Featured'
import TrustedBy from '../../components/TrustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import CatCard from '../../components/CatCard/CatCard'
import { cards, projects } from '../../data'
import './Home.scss'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

function Home() {
	return (
		<div className='home'>
			<Featured />
			<TrustedBy />
			<Slide slidesToShow={5} arrowsScroll={5}>
				{cards.map((card) => (
					<CatCard key={card.id} item={card} />
				))}
			</Slide>

			<div className='features'>
				<div className='container'>
					<div className='item'>
						<h1>A whole world of freelance at your fingertips.</h1>
						<div className='list-item'>
							<div className='title'>
								<img src='/img/check.png' alt='' />
								The best for every budget.
							</div>
							<p>
								Find high-quality services at every price point.
								No hourly rates, Just project-based pricing.
							</p>
						</div>
						<div className='list-item'>
							<div className='title'>
								<img src='/img/check.png' alt='' />
								Quality work done quickly
							</div>
							<p>
								Find the right freelancer to begin working on
								your project within minutes.
							</p>
						</div>
						<div className='list-item'>
							<div className='title'>
								<img src='/img/check.png' alt='' />
								Protected payments, every time
							</div>
							<p>
								Always know what you'll pay upfront. Your
								payment isn't released until you approve the
								work.
							</p>
						</div>
						<div className='list-item'>
							<div className='title'>
								<img src='/img/check.png' alt='' />
								24/7 support
							</div>
							<p>
								High-quality customer support service always
								ready to help you.
							</p>
						</div>
					</div>
					<div className='item'>
						<video
							src='/Launching Your Product.mp4'
							width={720}
							controls></video>
					</div>
				</div>
			</div>

			<div className='features dark'>
				<div className='container'>
					<div className='item'>
						<h1>
							Payday <i>business</i>
						</h1>
						<h1>
							A business solution designed for <i>teams</i>
						</h1>
						<p>
							Upgrade to a curated experience packed with tools
							and benefits, dedicated to businesses
						</p>
						<div className='title'>
							<img src='./img/check.png' alt='' />
							Connect to freelancers with proven business
							experience
						</div>

						<div className='title'>
							<img src='./img/check.png' alt='' />
							Get matched with the perfect talent by a customer
							success manager
						</div>

						<div className='title'>
							<img src='./img/check.png' alt='' />
							Manage teamwork and boost productivity with one
							powerful workspace
						</div>
						<button>Explore Payday</button>
					</div>
					<div className='item'>
						<img
							className='chat-img'
							src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png'
							alt=''
						/>
					</div>
				</div>
			</div>

			<Slide slidesToShow={5} arrowsScroll={5}>
				{projects.map((card) => (
					<ProjectCard key={card.id} {...card} />
				))}
			</Slide>
		</div>
	)
}

export default Home

import React from 'react'
import computer from '../../assets/computer-icon.png'

export const BlogHeader = () => {
	return(
		<header className="home__header">
			<div className="home__header-top">
				<span>The Loop</span>
			</div>

			<div className="home__header-section">
				
				<img 
					src={computer} 
					alt="computer img"
				/>

				<h1>
					The Loop
				</h1>

				<div className="home__header-by">
					<span>mendoza000</span>
					<span>Developer</span>
				</div>	
			</div>
		</header>
	)
}
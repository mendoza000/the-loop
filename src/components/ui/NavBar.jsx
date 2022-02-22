import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

	const handleClick = () => {
		window.scroll(0,0)
	}

	return(
		<nav className="ui__nav">
			<div className="ui__nav-list">
				<NavLink 
					end
					onClick={handleClick}
					to="/categorias"
					className={ 
						({ isActive }) => `ui__nav-item ui__nav-item-mobile ${
							(isActive)
							? "ui__nav-item-active"
							: ""
						}`
					}
				>
					<box-icon type='solid' name='category'></box-icon>
				</NavLink>

				<NavLink 
					end
					onClick={handleClick}
					to="/"
					className={ 
						({ isActive }) => `ui__nav-item ui__nav-item-mobile ${
							(isActive)
							? "ui__nav-item-active"
							: ""
						}`
					}
				>
					<box-icon type='solid' name='home'></box-icon>
				</NavLink>

				<NavLink 
					end
					onClick={handleClick}
					to="/contactos"
					className={ 
						({ isActive }) => `ui__nav-item ui__nav-item-mobile ${
							(isActive)
							? "ui__nav-item-active"
							: ""
						}`
					}
				>
					<box-icon type='solid' name='conversation'></box-icon>
				</NavLink>
			</div>
		</nav>
	)
}
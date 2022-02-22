import React from 'react'
import { Routes, Route } from 'react-router-dom';
// Components
import { BlogHome } from '../blogHome/BlogHome';


export const BlogRouter = () => {
	return(
		<Routes>
			<Route
				exact
				path={"/"}
				element={ <BlogHome /> }
			/>
		</Routes>
	)
}
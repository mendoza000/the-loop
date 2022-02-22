import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Routers
import { BlogRouter } from './BlogRouter';
// components
import { NavBar } from '../ui/NavBar';

export const RootRouter = () => {
	return(
		<BrowserRouter>
			<NavBar />

			<Routes>

				<Route
					path={"/"}
					element={ <BlogRouter /> }
				/>

			</Routes>
		</BrowserRouter>
	)
}

import React from 'react'
import { BlogHeader } from './BlogHeader';
import { BlogArticles } from './BlogArticles'

export const BlogHome = () => {
	return(
		<div className="animate__animated animate__fadeIn animate__faster">
			<BlogHeader />
			<BlogArticles />
		</div>
	)
}
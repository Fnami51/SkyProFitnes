import React from 'react' // нужно для тестов
import { render } from '@testing-library/react'
import CourseCard from './CourseCard'

test('CourseCard matches snapshot', () => {
	const { asFragment } = render(
		<CourseCard
			name='React Basics'
			day={10}
			time='30'
			url_img='https://example.com/image.jpg'
			level={3}
		/>
	)
	expect(asFragment()).toMatchSnapshot()
})

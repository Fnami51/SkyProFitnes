import React from 'react' // нужно для тестов
import { render } from '@testing-library/react'
import MyCourseCard from './MyCourseCard'

test('MyCourseCard matches snapshot', () => {
	const { asFragment } = render(
		<MyCourseCard
			name='JavaScript Basics'
			day={15}
			time='30'
			url_img='https://example.com/image.jpg'
			progress={70}
			level={3}
		/>
	)
	expect(asFragment()).toMatchSnapshot()
})

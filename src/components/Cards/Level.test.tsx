import React from 'react' // нужно для тестов
import { render } from '@testing-library/react'
import Level from './Level'

test('Level matches snapshot', () => {
	const { asFragment } = render(<Level value={3} />)
	expect(asFragment()).toMatchSnapshot()
})

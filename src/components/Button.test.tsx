import React from 'react' // нужно для тестов
import { render } from '@testing-library/react'
import Button from './Button'

test('Button matches snapshot', () => {
	const { asFragment } = render(
		<Button variant='primary' onClick={() => {}}>
			Click me
		</Button>
	)
	expect(asFragment()).toMatchSnapshot()
})

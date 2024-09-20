import React from 'react' // нужно для тестов

function Level({ value }: { value: number }) {
	const heights = [3, 6, 9, 11, 14]

	return (
		<div className='flex gap-[0.75px] items-end h-[18px] w-[18px] p-[2px]'>
			{heights.map((height, i) => (
				<div
					key={i}
					className={`w-[2.25px] rounded-[50px] ${
						i < value ? 'bg-[#00C1FF]' : 'bg-[#D9D9D9]'
					}`}
					style={{ height: `${height}px` }}
				/>
			))}
		</div>
	)
}

export default Level

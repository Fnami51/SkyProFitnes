import CoursePage from './components/CoursePage/CoursePage'
import Header from './components/Header'

function App() {

  return (
		<div className='bg-background min-h-screen flex flex-col px-[16px] mobil:px-[16px] desktop:px-[70px] mediumDesktop:px-[140px] pb-page-padding overflow-x-hidden'>
			<Header />
			<CoursePage />
		</div>
	)
}

export default App

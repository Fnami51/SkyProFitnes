import CoursePage from './components/CoursePage/CoursePage'
import Header from './components/Header'

function App() {

  return (
		<div className='bg-background min-h-screen flex flex-col mediumDesktop:px-[140px] desktop:px-[70px] mobil:px-[16px] pb-page-padding overflow-x-hidden w-screen'>
			<Header />
			<CoursePage />
		</div>
	)
}

export default App

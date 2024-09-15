import { useState, useCallback } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import CoursePage from './pages/CoursePage/CoursePage'
import MainPage from './pages/MainPage/MainPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { Route, Routes } from 'react-router-dom';
import ExampleModal from './components/Example/ExampleModal';
import TrainingPage from './pages/TrainingPage/TrainingPage';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'register' | 'resetPassword' | 'newPassword'>('login');

  const handleSwitchModalType = useCallback((newType: 'login' | 'register' | 'resetPassword' | 'newPassword') => {
    setModalType(newType);
  }, []);

  const handleLoginClick = useCallback(() => {
    setModalType('login');
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className='bg-background min-h-screen flex flex-col px-[16px] mobil:px-[16px] desktop:px-[70px] mediumDesktop:px-[140px] pb-page-padding overflow-x-hidden'>
      <Header onLoginClick={handleLoginClick} />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/user' element={<ProfilePage />}/>
        <Route path='/course' element={<CoursePage />}/>
        <Route path='/traning/:id' element={<TrainingPage id={1} />}/>

        <Route path='/example_modal' element={<ExampleModal />}/> {/* Это временное решение для просмотра примера. Эту строчку, а также модуль Example, потом можно будет удалить (или не удалять, в проекте он мешать не будет)  */}
      </Routes>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={modalType}
        onSwitchType={handleSwitchModalType}
      />
    </div>
  );
}

export default App

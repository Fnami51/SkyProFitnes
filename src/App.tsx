import { useState, useCallback } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import CoursePage from './pages/CoursePage/CoursePage'
import MainPage from './pages/MainPage/MainPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { useAuth } from './hooks/useAuth';

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

  const { user } = useAuth();


  return (
    <div className='bg-background min-h-screen flex flex-col px-[16px] mobil:px-[16px] desktop:px-[70px] mediumDesktop:px-[140px] pb-page-padding overflow-x-hidden'>
      <Header onLoginClick={handleLoginClick} />
      {user ? <ProfilePage /> : <MainPage />}
      <CoursePage />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} type={modalType} onSwitchType={handleSwitchModalType} />
    </div>
  );
}

export default App

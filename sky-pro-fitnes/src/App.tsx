import { useState } from 'react';
import Header from './components/common/Header';
import Modal from './components/common/Modal';
import CoursePage from './components/CoursePage/CoursePage'
import MainPage from './components/MainPage/MainPage'
import ProfilePage from './components/ProfilePage/ProfilePage'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'register' | 'resetPassword' | 'newPassword'>('login');

  const handleSwitchModalType = (newType: 'login' | 'register' | 'resetPassword' | 'newPassword') => {
    setModalType(newType);
  };

  const handleLoginClick = () => {
    setModalType('login');
    setIsModalOpen(true);

  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-background min-h-screen flex flex-col px-[16px] mobil:px-[16px] desktop:px-[70px] mediumDesktop:px-[140px] pb-page-padding overflow-x-hidden'>
      <Header onLoginClick={handleLoginClick} />

      <ProfilePage />

      <MainPage />

      <CoursePage />

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

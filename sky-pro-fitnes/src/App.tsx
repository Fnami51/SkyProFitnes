import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import CoursePage from './components/CoursePage/CoursePage'
import ExampleModal from './components/Example/ExampleModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'register' | 'resetPassword' | 'newPassword'>('login');

  const handleSwitchModalType = (newType: 'login' | 'register') => {
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
      <CoursePage />
      <ExampleModal />  {/* Это временное решение для просмотра примера. Эту строчку, а также модуль Example, потом можно будет удалить (или не удалять, в проекте он мешать не будет)  */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={modalType}
        onSwitchType={handleSwitchModalType}
      />
    </div>
  );
}

export default App;
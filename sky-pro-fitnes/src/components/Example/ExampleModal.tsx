import { useState } from 'react';
import Modal from '../Modal';
import Button from '../Button';


function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'register' | 'resetPassword' | 'newPassword'>('login');

  const openModal = (type: 'login' | 'register' | 'resetPassword' | 'newPassword') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleSwitchModalType = (newType: 'login' | 'register') => {
    setModalType(newType);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-background min-h-screen flex flex-col px-[16px] mobil:px-[16px] desktop:px-[70px] mediumDesktop:px-[140px] pb-page-padding overflow-x-hidden'>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Примеры модальных окон</h1>
        <div className="flex flex-col items-center mt-8 gap-4">
          <Button onClick={() => openModal('login')}>Окно входа</Button>
          <Button onClick={() => openModal('register')} variant="secondary">Окно регистрации</Button>
          <Button onClick={() => openModal('resetPassword')}>Окно сброса пароля</Button>
          <Button onClick={() => openModal('newPassword')}>Окно нового пароля</Button>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Примеры кнопок:</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Обычная кнопка</Button>
            <Button variant="secondary">Вторичная кнопка</Button>
            <Button variant="inactive">Неактивная кнопка</Button>
            <Button variant="primary" className="w-[513px]"> Обычная кнопка c шириной в 513px </Button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={modalType}
        onSwitchType={handleSwitchModalType}
      />
    </div>
  );
}

export default Example;
import { useState, useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Modal from './components/Modal';
import CoursePage from './pages/CoursePage/CoursePage';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import TrainingPage from './pages/TrainingPage/TrainingPage';
import { CoursesProvider } from './context/CoursesContext';
import { useAuth } from './hooks/useAuth';

function App() {
  const [isModalSigninOpen, setIsModalSigninOpen] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'register' | 'resetPassword' | 'newPassword'>('login');
  const { logout } = useAuth();

  const handleSwitchModalType = useCallback((newType: 'login' | 'register' | 'resetPassword' | 'newPassword') => {
    setModalType(newType);
  }, []);

  const handleLoginClick = useCallback(() => {
    setModalType('login');
    setIsModalSigninOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalSigninOpen(false);
  }, []);

  useEffect(() => {
    const checkInactivity = () => {
      const lastActivity = localStorage.getItem('lastActivity');
      if (lastActivity) {
        const inactiveTime = Date.now() - parseInt(lastActivity);
        if (inactiveTime > 3 * 60 * 1000) { // 3 минуты
          logout();
        }
      }
    };

    // Проверяем неактивность при загрузке приложения
    checkInactivity();

    // Устанавливаем интервал для регулярной проверки
    const intervalId = setInterval(checkInactivity, 60000); // Проверка каждую минуту

    return () => clearInterval(intervalId);
  }, [logout]);

  return (
    <CoursesProvider>
      <div className='bg-background min-h-screen flex flex-col px-[16px] mobil:px-[16px] desktop:px-[70px] mediumDesktop:px-[140px] pb-page-padding overflow-x-hidden'>
        <Header onLoginClick={handleLoginClick} />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/user' element={<ProfilePage />} />
          <Route path='/course/:id' element={<CoursePage />} />
          <Route path='/course' element={<CoursePage />} />
          <Route path='/training/' element={<TrainingPage />} />
          <Route path='/training/:id' element={<TrainingPage />} />
        </Routes>
        <Modal
          isOpen={isModalSigninOpen}
          onClose={handleCloseModal}
          type={modalType}
          onSwitchType={handleSwitchModalType}
        />
      </div>
    </CoursesProvider>
  );
}

export default App;
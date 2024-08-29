import { useState, useEffect, useCallback } from 'react';
import Button from './Button';

interface ModalProps {
     isOpen: boolean;
     onClose: () => void;
     type: 'login' | 'register' | 'resetPassword' | 'newPassword';
     onSwitchType: (newType: 'login' | 'register') => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type, onSwitchType }) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [error, setError] = useState('');
     const [success, setSuccess] = useState('');
     const [isLoading, setIsLoading] = useState(false);

     const resetForm = useCallback(() => {
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setError('');
          setSuccess('');
          setIsLoading(false);
     }, []);

     const handleClose = useCallback((e?: React.MouseEvent<HTMLDivElement>) => {
          if (e && e.target !== e.currentTarget) return;
          resetForm();
          onClose();
     }, [onClose, resetForm]);

     const handleEscape = useCallback((e: KeyboardEvent) => {
          if (e.key === 'Escape') {
               handleClose();
          }
     }, [handleClose]);

     useEffect(() => {
          if (isOpen) {
               document.addEventListener('keydown', handleEscape);
               return () => {
                    document.removeEventListener('keydown', handleEscape);
               };
          }
     }, [isOpen, handleEscape]);

     useEffect(() => {
          if (isOpen) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = 'unset';
          }
     }, [isOpen]);

     useEffect(() => {
          if (!isOpen) {
               resetForm();
          }
     }, [isOpen, resetForm]);

     const validateEmail = (email: string): boolean => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.(ru|com)$/i;
          return emailRegex.test(email);
     };

     const validatePassword = (password: string): boolean => {
          const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{5,}$/i;
          return passwordRegex.test(password);
     };

     const validateForm = () => {
          if (!email) {
               setError('Пожалуйста, введите Логин');
               return false;
          }
          if (!validateEmail(email)) {
               setError('Пожалуйста, введите корректный email с доменом .ru или .com');
               return false;
          }
          if (type !== 'resetPassword') {
               if (!password) {
                    setError('Пожалуйста, введите пароль');
                    return false;
               }
               if (!validatePassword(password)) {
                    setError('Пароль должен содержать не менее 5 символов, хотя бы одну цифру');
                    return false;
               }
          }
          if (type === 'register' && password !== confirmPassword) {
               setError('Пароли не совпадают');
               return false;
          }
          return true;
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setError('');
          setSuccess('');
          if (validateForm()) {
               setIsLoading(true);
               try {
                    // Здесь должен быть реальный запрос к API
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса

                    switch (type) {
                         case 'login':
                              // Имитация ошибки входа
                              if (email === 'test@test.com' && password === 'wrong') {
                                   throw new Error('Неверный email или пароль');
                              }
                              setSuccess('Вход выполнен успешно');
                              break;
                         case 'register':
                              setSuccess('Регистрация прошла успешно');
                              break;
                         case 'resetPassword':
                              setSuccess('Инструкции по сбросу пароля отправлены на ваш email');
                              break;
                         case 'newPassword':
                              setSuccess('Пароль успешно изменен');
                              break;
                    }
                    // Закрыть модальное окно после успешного действия
                    setTimeout(() => {
                         handleClose();
                    }, 2000);
               } catch (err) {
                    setError(err instanceof Error ? err.message : 'Произошла ошибка');
               } finally {
                    setIsLoading(false);
               }
          }
     };

     const handleSwitchType = () => {
          onSwitchType(type === 'login' ? 'register' : 'login');
          resetForm();
     };

     if (!isOpen) return null;

     return (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleClose}>
               <div className="bg-white shadow-lg rounded-[30px] p-10 w-full max-w-[360px]" onClick={e => e.stopPropagation()}>
                    <div className="flex justify-center mb-12">
                         <img src="/logo.png" alt="SkyFitnessPro" className="w-[220px] h-[35px]" />
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-[34px]">
                         <div className="flex flex-col gap-2.5">
                              {type !== 'newPassword' && (
                                   <input
                                        type="email"
                                        placeholder="Логин"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-[52px] pt-4 pr-[18px] pb-4 pl-[18px] border border-[#D0CECE] rounded-lg text-[18px] leading-[19.8px] text-black placeholder-[#D0CECE]"
                                        required
                                   />
                              )}
                              {type !== 'resetPassword' && (
                                   <input
                                        type="password"
                                        placeholder={type === 'newPassword' ? "Новый пароль" : "Пароль"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full h-[52px] pt-4 pr-[18px] pb-4 pl-[18px] border border-[#D0CECE] rounded-lg text-[18px] leading-[19.8px] text-black placeholder-[#D0CECE]"
                                        required
                                   />
                              )}
                              {(type === 'register' || type === 'newPassword') && (
                                   <input
                                        type="password"
                                        placeholder="Повторите пароль"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full h-[52px] pt-4 pr-[18px] pb-4 pl-[18px] border border-[#D0CECE] rounded-lg text-[18px] leading-[19.8px] text-black placeholder-[#D0CECE]"
                                        required
                                   />
                              )}
                              {error && (
                                   <p className="w-[280px] h-[30px] font-roboto text-[14px] leading-[110%] text-center text-[#DB0030] flex-none order-2 flex-grow-0">
                                        {error}
                                   </p>
                              )}
                              {success && (
                                   <p className="w-[280px] h-[30px] font-roboto text-[14px] leading-[110%] text-center text-green-500 flex-none order-2 flex-grow-0">
                                        {success}
                                   </p>
                              )}
                         </div>
                         <div className="flex flex-col gap-2.5">
                              <Button type="submit" variant="primary" className="w-full h-[52px]" disabled={isLoading}>
                                   {isLoading ? 'Загрузка...' : type === 'login' ? 'Войти' : type === 'register' ? 'Зарегистрироваться' : type === 'resetPassword' ? 'Сбросить пароль' : 'Подтвердить'}
                              </Button>
                              {type === 'login' && (
                                   <Button variant="secondary" className="w-full h-[52px]" onClick={handleSwitchType} disabled={isLoading}>
                                        Зарегистрироваться
                                   </Button>
                              )}
                              {type === 'register' && (
                                   <Button variant="secondary" className="w-full h-[52px]" onClick={handleSwitchType} disabled={isLoading}>
                                        Войти
                                   </Button>
                              )}
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Modal;
import React, { useState } from 'react';
const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled2, setIsButtonDisabled2] = useState(false);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    // Удаление всех полей со страницы
    var fields = document.querySelectorAll("input");
    fields.forEach(function(field) {
      field.remove();
    });

    // Вывод сообщения
    var message = document.createElement("p");
    message.innerText = "Вы уже вошли в ваш аккаунт";
    message.style.position = "fixed";
    message.style.fontSize = "46px";
    message.style.right = "200px";
    message.style.top = "400px";
    document.body.appendChild(message);

    setIsButtonDisabled2(true); // Установка кнопки в неактивное состояние
setTimeout(() => {
    message.remove(); // Удаление элемента после 10 секунд
  }, 10000);
};
  return (
    <div style={{ marginTop: '65px', display: 'flex', justifyContent: 'space-between' }}>
<div style={{ opacity: 0.6, padding: '15px', marginLeft: '272px', width: '429px', height: '508px', borderRadius: '10px', background: '#569E71', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
<h5 style={{ margin: '40px', marginTop: '65px', color: '#FFF', textAlign: 'center', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal' }}>Введите свой логин или почту. Введите свой пароль. Щелкните на кнопку "Войти". Если вы ввели правильный логин и пароль, вы будете успешно авторизованы и перенаправлены на главную страницу сайта. Если вы забыли пароль, воспользуйтесь ссылкой для восстановления пароля.</h5> </div>
      <div
        style={{display: 'flex', justifyContent: 'center', borderRadius: '10px', background: '#569E71', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', width: '816px', height: '548px', marginRight: '160px' }}>
        <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', 
          }}>
          <h2 style={{ marginBottom: '40px', color: '#FFFFFF', marginTop: '55px', fontSize: '38px'  }}>Войти</h2>
          <input style={{ width: '589px', height: '92px', background: '#FFFFFF', marginBottom: '25px', fontSize: '30px'  }} type="text" value={username} onChange={handleUsernameChange} placeholder="Логин или почта" />
          <input style={{ width: '589px', height: '92px', background: '#FFFFFF', marginBottom: '50px', marginTop: '35px',fontSize: '30px'  }} type="password" value={password} onChange={handlePasswordChange} placeholder="Пароль" />
         <button
        style={{ fontSize: '30px' }}
        onClick={handleLogin}
        disabled={isButtonDisabled2} // Связывание состояния с состоянием кнопки
      >
        Войти
      </button>
    </div> </div> </div>
  );
};

export default AuthForm;

import React, { useState } from 'react';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

    setIsButtonDisabled(true); // Установка кнопки в неактивное состояние
setTimeout(() => {
    message.remove(); // Удаление элемента после 10 секунд
  }, 10000);
};
  return (
    <div style={{ marginTop: '65px', display: 'flex', justifyContent: 'space-between' }}>
<div style={{ opacity: 0.6, padding: '5px', marginLeft: '122px', width: '742px', height: '558px', borderRadius: '10px', background: '#569E71', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
<h5 style={{ margin: '40px', marginTop: '65px', color: '#FFF', textAlign: 'center', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal' }}>Если у вас нет аккаунта на сайте и вы хотите зарегистрироваться, откройте страницу регистрации. Введите желаемый логин или электронную почту. Введите желаемый пароль. Пароль должен быть надежным и содержать как минимум 8 символов, включая буквы верхнего и нижнего регистра, цифры и специальные символы. Введите пароль еще раз, чтобы предотвратить опечатки. Нажмите на кнопку "Зарегистрироваться" для создания аккаунта. Если все данные введены верно и логин не занят, вы будете успешно зарегистрированы и перенаправлены на страницу авторизации, чтобы войти в свой новый аккаунт.</h5> </div>
      <div
        style={{display: 'flex', justifyContent: 'center', borderRadius: '10px', background: '#569E71', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', width: '816px', height: '568px', marginRight: '140px' }}>
        <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', 
          }}>
          <h2 style={{ marginBottom: '25px', color: '#FFFFFF', marginTop: '35px', fontSize: '38px'  }}>Зарегистрироваться</h2>
          <input style={{ width: '589px', height: '92px', background: '#FFFFFF', marginBottom: '15px', fontSize: '30px'  }} type="text" value={username} onChange={handleUsernameChange} placeholder="Логин или почта" />
          <input style={{ width: '589px', height: '92px', background: '#FFFFFF', marginBottom: '15px', marginTop: '15px',fontSize: '30px'  }} type="password" value={password} onChange={handlePasswordChange} placeholder="Пароль" />
          <input style={{ width: '589px', height: '92px', background: '#FFFFFF', marginBottom: '30px', marginTop: '15px',fontSize: '30px'  }} type="password" value={password} onChange={handlePasswordChange} placeholder="Подтвердите пароль" />
          <button
        style={{ fontSize: '30px' }}
        onClick={handleLogin}
        disabled={isButtonDisabled} // Связывание состояния с состоянием кнопки
      >
        Зарегистрироваться
      </button>
    </div> </div> </div>
  );
};

export default AuthForm;

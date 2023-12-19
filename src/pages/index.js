import React, { useState } from 'react';
const MainMenu = () => {
 const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalContent(true);
  };
 const [showAdditionalContent2, setShowAdditionalContent2] = useState(false);

  const handleButtonClick2 = () => {
    setShowAdditionalContent2(true);
  };
const [showAdditionalContent3, setShowAdditionalContent3] = useState(false);

  const handleButtonClick3 = () => {
    setShowAdditionalContent3(true);
  };


  const [activeOption, setActiveOption] = useState(null);

  
  const handleOptionClick = (option) => {

  };
    const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

    const [sensitivity, setSensitivity] = useState(5);
  

  const handleSensitivityChange = (e) => {
    setSensitivity(e.target.value);
  };

const [useModelV1, setUseModelV1] = useState(false);
  const [useModelV2, setUseModelV2] = useState(false);
  const [useModelV3, setUseModelV3] = useState(false);
  const [sendFeedback, setSendFeedback] = useState(false);
  const [useBasicParameters, setUseBasicParameters] = useState(false);

  // Create event handlers for each checkbox
  const handleUseModelV1Toggle = () => {
    setUseModelV1(!useModelV1);
  };

  const handleUseModelV2Toggle = () => {
    setUseModelV2(!useModelV2);
  };

  const handleUseModelV3Toggle = () => {
    setUseModelV3(!useModelV3);
  };

  const handleSendFeedbackToggle = () => {
    setSendFeedback(!sendFeedback);
  };

  const handleUseBasicParametersToggle = () => {
    setUseBasicParameters(!useBasicParameters);
  };
  
  const videoTitle = "Example Video";
  const videoDuration = "10:30";
  const videoSize = "100 MB";
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedback = () => {
    // Logic for handling feedback
    console.log(feedback);};
const [showImage, setShowImage] = useState(false);

const handleShow = () => {
    setShowImage(true);
    setTimeout(() => {
      setShowImage(false);
    }, 10000);
  };
  
const [isButtonDisabled, setIsButtonDisabled] = useState(false);
const handleFeed = () => {
    // Удаление всех полей со страницы
    var fields = document.querySelectorAll("textarea");
    fields.forEach(function(field) {
      field.remove();
    });

    // Вывод сообщения
    var message = document.createElement("p");
    message.innerText = "Спасибо за отзыв!";
    message.style.position = "fixed";
    message.style.fontSize = "46px";
    message.style.right = "800px";
    message.style.top = "600px";
    document.body.appendChild(message);

    setIsButtonDisabled(true); // Установка кнопки в неактивное состояние
setTimeout(() => {
    message.remove(); // Удаление элемента после 10 секунд
  }, 10000);
  
  setShowAdditionalContent3(true);
};

 return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',

          margin: '30px',

          width: '100%',}}>
  
<div style={{ width: '1676px', height: '172px', borderRadius: '10px', background: '#569E71', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}> 
 <h1 style={{ marginTop: '60px', color: 'white', width: '1526px', height: '96px', textAlign: 'center', fontFamily: 'Inter', fontSize: '38px', fontStyle: 'normal' }}>Главная страница системы распознавания "Deep Fake" видео</h1>
        </div>
      </div>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
<div style={{ opacity: 0.6, padding: '15px', marginLeft: '212px', width: '715px', height: '376px', borderRadius: '10px', background: '#569E71', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
<h5 style={{ marginTop: '65px', width: '700px', height: '46px', color: '#FFF', textAlign: 'center', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal' }}>Вы можете загрузить видео двумя способами: Выберите файл видео из вашего компьютера, нажав на кнопку "Выберите файл" и выбрав соответствующий видеофайл в диалоговом окне. Если видео уже хранится в интернете, вставьте ссылку на видео в поле "Ссылка на видео". Нажмите кнопку "Загрузить видео", чтобы начать процесс загрузки видео.</h5> </div>
      <div
        style={{
          padding: '15px',
          marginRight: '132px',
	    
    flexDirection: 'column', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', 
        }}
      >

<div style={{ width: '715px', height: '386px', borderRadius: '10px', background: '#569E71', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
<h2 style={{ width: '700px', height: '46px', color: '#FFF', textAlign: 'center', fontFamily: 'Inter', fontSize: '36px', fontStyle: 'normal' }}>Загрузка видео для анализа</h2>
<div style={{ display: 'flex', flexDirection: 'column' }}>
<input style={{ marginBottom: '40px', color: '#4E4E4E', textAlign: 'center', fontFamily: 'Inter', fontSize: '30px' }} type="file" onChange={handleFileChange} accept="video/*" />
<input style={{ marginBottom: '40px', marginLeft: '125px', background: '#FFF', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', width: '435px', height: '62px', fontSize: '30px'}} type="text" value={videoUrl} onChange={handleUrlChange} placeholder="Ссылка на видео" />
</div>
    <button style={{ width: '232px', height: '61px', borderRadius: '10px', background: '#A9B0AC', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', fontSize: '30px' }} onClick={handleButtonClick} >Анализировать</button>     
        </div>
      </div>
   </div>
   
   
   
   
   
   {showAdditionalContent && (
<div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1807px', height: '917px', justifyContent: 'center', flexDirection: 'column', display: 'flex' }}>
          <div style={{ opacity: 0.6, marginTop: '90px', width: '1157px', height: '287px', borderRadius: '10px', background: '#569E71', justifyContent: 'center', flexDirection: 'column', display: 'flex', }}>
          <h7 style = {{padding: '15px', color: '#FFF', textAlign: 'center', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal'}}>Вы можете настроить алгоритмы и параметры распознавания. Используйте ползунок для регулировки чувствительности алгоритмов. Выберите опции отображения результатов, в соответствии с вашими предпочтениями.</h7>
          </div>
          
          
  <div style={{ marginTop: '40px', width: '1157px', height: '337px', borderRadius: '10px', background: '#569E71', justifyContent: 'center', flexDirection: 'column', display: 'flex', }}>
            <h2 style={{ color: '#fff', alignItems: 'center',
            textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Настройка алгоритмов и параметров распознавания:</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ color: '#fff',  display: 'flex', flexDirection: 'column', marginLeft: '100px', }}>
              <label>
          <input
            type="checkbox"
            checked={useModelV1}
            onChange={handleUseModelV1Toggle}
          />
          Использовать модель распознавания v1.0
        </label>
        <label>
          <input
            type="checkbox"
            checked={useModelV2}
            onChange={handleUseModelV2Toggle}
          />
          Использовать модель распознования v2.0
        </label>
        <label>
          <input
            type="checkbox"
            checked={useModelV3}
            onChange={handleUseModelV3Toggle}
          />
          Использовать модель распознования v3.0
        </label>
      </div>
      <div style={{ color: '#fff',  display: 'flex', flexDirection: 'column', marginRight: '100px', }}>
        <label>
          <input
            type="checkbox"
            checked={sendFeedback}
            onChange={handleSendFeedbackToggle}
          />
          Разрешить отправку фидбека разработчикам
        </label>
        <label>
          <input
            type="checkbox"
            checked={useBasicParameters}
            onChange={handleUseBasicParametersToggle}
          />
          Использовать базовые параметры распознавания
        </label>
            </div>
      </div>
          <div style = {{ marginTop: '30px', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',  }}>
            <h3>Регулировка чувствительности алгоритмов:</h3>
            <input style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
              type="range"
              min="1"
              max="10"
              value={sensitivity}
              onChange={handleSensitivityChange}
            />
            <p>{sensitivity}</p>
          </div>
           </div>
               <button style={{ marginTop: '30px', width: '372px', height: '41px', borderRadius: '10px', background: '#A9B0AC', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', fontSize: '30px' }} onClick={handleButtonClick2} >Перейти к результатам</button>  
        </div>
              )}
       <div>
       
       
       
       
       
       {showAdditionalContent2 && (
      <div style={{  color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1807px', height: '1117px', justifyContent: 'center', flexDirection: 'column', display: 'flex' }}>
          <div style={{ opacity: 0.6, marginTop: '90px', width: '1157px', height: '147px', borderRadius: '10px', background: '#569E71', justifyContent: 'center', flexDirection: 'column', display: 'flex', }}>
          <h7 style = {{padding: '15px', color: '#FFF', textAlign: 'center', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal'}}>Вы можете увидеть статус распознавания - подлинность или подозрение на подделку. Если видео было распознано как подделка, будут показаны признаки подделки в видео.</h7>
          </div>
          
          
  <div style={{  marginTop: '40px', width: '1157px', height: '737px', borderRadius: '10px', background: '#569E71', display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
          <div>
          <h3 style = {{fontSize: '18px',}}>Видео №1: пример_дипфейка.mp3</h3>

            <h3 style = {{fontSize: '18px',}}>Длительность: 3:06</h3>
<h3  style = {{fontSize: '18px',}}>Статус распознавания: Есть подозрение на подделку.</h3>
<h3 style = {{fontSize: '18px',}}>Признаки подделки в видео:</h3>

<div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<button
  style={{ margin: '15px', width: '232px', height: '41px', borderRadius: '10px', background: '#A9B0AC', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', fontSize: '30px' }}
  onClick={handleShow}
>
  Показать
</button>

{showImage && (
  <img src="/image.png" alt="image" style={{ margin: '15px', width: '600px', height: '276px' }} />
)}


    <textarea style={{ width: '832px', color: '#4E4E4E', textAlign: 'center', fontFamily: 'Inter', fontSize: '30px' }} 
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Оставьте нам фидбек"
    />
    <button style={{ margin: '15px', width: '232px', height: '41px', borderRadius: '10px', background: '#A9B0AC', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', fontSize: '30px' }} onClick={handleFeed} disabled={isButtonDisabled}>Отправить</button>
      </div>
</div>

  

 </div> </div>

        </div>
        
        
       )} <div>
        </div>







{showAdditionalContent3 && (
      <div style={{  color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1807px', height: '917px', justifyContent: 'center', flexDirection: 'column', display: 'flex' }}>
          <div style={{ opacity: 0.6, marginTop: '90px', width: '1557px', height: '147px', borderRadius: '10px', background: '#569E71', justifyContent: 'center', flexDirection: 'column', display: 'flex', }}>
          <h7 style = {{padding: '15px', color: '#FFF', textAlign: 'center', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal'}}>Вы можете увидеть список всех видео, которые были проанализированы системой. Каждое видео сопровождается информацией о нем, чтобы вы могли быстро найти нужное видео в списке.</h7>
          </div>
          
          
<div style={{ background: '#000703', marginTop: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ background: '#569E71', margin: '10px' }}>
    <h3 style={{ fontSize: '18px' }}>Видео №1: пример_дипфейка.mp3</h3>
    <h3 style={{ fontSize: '18px' }}>Длительность: 3:06</h3>
    <h3 style={{ fontSize: '18px' }}>Статус распознавания: Есть подозрение на подделку.</h3>
  </div>
      
  <div style={{ background: '#569E71', margin: '10px' }}>
    <h3 style={{ fontSize: '18px' }}>Видео №2: пример_дипфейка2.mp3</h3>
    <h3 style={{ fontSize: '18px' }}>Длительность: 3:01</h3>
    <h3 style={{ fontSize: '18px' }}>Статус распознавания: Есть подозрение на подделку.</h3>
  </div>
</div>

<div style={{background: '#000703', marginTop: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ background: '#569E71', margin: '10px' }}>
    <h3 style={{ fontSize: '18px' }}>Видео №3: пример_дипфейка3.mp3</h3>
    <h3 style={{ fontSize: '18px' }}>Длительность: 1:13</h3>
    <h3 style={{ fontSize: '18px' }}>Статус распознавания: Есть подозрение на подделку.</h3>
  </div>
      
  <div style={{ background: '#569E71', margin: '10px' }}>
    <h3 style={{ fontSize: '18px' }}>Видео №4: пример_дипфейка4.mp3</h3>
    <h3 style={{ fontSize: '18px' }}>Длительность: 2:34</h3>
    <h3 style={{ fontSize: '18px' }}>Статус распознавания: Нет подозрений на подделку.</h3>
  </div>
</div>

 </div>  
       )} <div>
        </div>
        
       </div>
    </div>
  );
};

export default MainMenu;

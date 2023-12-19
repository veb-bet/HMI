import React, { useState } from 'react';

const ResultPage = () => {
  const videoTitle = "Example Video";
  const videoDuration = "10:30";
  const videoSize = "100 MB";
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedback = () => {
    // Logic for handling feedback
    console.log(feedback);
  };

  return (
    <div>
     
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '50px',
          margin: '40px',
          height: '75vh',
        }}
      >
        <div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            background:
              'url("https://design-parket.spb.ru/assets/images/products/4035/th-forest-green.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            color: 'white',
          }}
        >
          <h2>Form of recognition results</h2>
          <div>
            <h3>Video Information:</h3>
<p>Title: {videoTitle}</p>
<p>Duration: {videoDuration}</p>
<p>Size: {videoSize}</p>
</div>
<div>
<h3>Recognition status:</h3>
<p>Suspicion of forgery</p>
</div>
<div>
<h3>Signs of forgery in the video:</h3>
<p>Sign 1</p>
<p>Sign 2</p>
<p>Sign 3</p>
</div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', 
          background: 'url("https://spb.elhall.ru/upload/iblock/2ec/pivt517jhrdijs57nwylbbvhbkrfxpz6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%'}}>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Feedback"
          />
          <button onClick={handleFeedback}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

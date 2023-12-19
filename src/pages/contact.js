import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import analisis from './analisis';
import { useNavigate } from "react-router-dom";
const VideoUploadForm = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };
  const handleUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };
  const handleVideoAnalysis = () => {
    // Логика для анализа видео
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
    <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', 
          background: 'url("https://spb.elhall.ru/upload/iblock/2ec/pivt517jhrdijs57nwylbbvhbkrfxpz6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          marginRight: '90px' }}>
      <h2 style={{ color: 'black', marginBottom: '85px', marginTop: '80px' }}>Video Upload form</h2>
      <input style={{ marginBottom: '95px', marginLeft: '60px' }} type="file" onChange={handleFileChange} accept="video/*" />
      <input style={{ marginBottom: '95px' }} type="text" value={videoUrl} onChange={handleUrlChange} placeholder="Link to the video" />

      <button onClick={() => navigate("/analisis")}>Start video analysis</button>
        </div>
      </div>
    </div>
  );
};
export default VideoUploadForm;



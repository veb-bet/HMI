import React, { useState } from 'react';

const SettingsPage = () => {
  const [sensitivity, setSensitivity] = useState(5);
  const [displayHistory, setDisplayHistory] = useState(true);

  const handleSensitivityChange = (e) => {
    setSensitivity(e.target.value);
  };

  const handleDisplayHistoryToggle = () => {
    setDisplayHistory(!displayHistory);
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
          <h2>Configuring recognition algorithms and parameters</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '50%',
              margin: '0 auto',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '80px' }}>
              <label>
                <input
                  type="checkbox"
                  checked={displayHistory}
                  onChange={handleDisplayHistoryToggle}
                />
                Use the v1.0 recognition model
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={false}
                />
                Use the v2.0 recognition model
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={false}
                />
                Use the v3.0 recognition model
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px' }}>
              <label>
                <input
                  type="checkbox"
                  checked={displayHistory}
                  onChange={handleDisplayHistoryToggle}
                />
                Allow sending feedback to developers
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={displayHistory}
                  onChange={handleDisplayHistoryToggle}
                />
                Use basic recognition parameters
              </label>
            </div>
          </div>
          <div>
            <h3>Adjusting the sensitivity of algorithms</h3>
            <input
              type="range"
              min="1"
              max="10"
              value={sensitivity}
              onChange={handleSensitivityChange}
            />
            <p>{sensitivity}</p>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', 
          background: 'url("https://spb.elhall.ru/upload/iblock/2ec/pivt517jhrdijs57nwylbbvhbkrfxpz6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%'}}>
          <button style={{ marginTop: '25px' }}>Show history</button>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

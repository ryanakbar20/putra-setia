import React, { useState, useEffect } from 'react';

function Text({ theme }) {
  return (
    <div
      style={{
        color: theme.color,
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: theme.backgroundColor,
      }}
    >
      Ini Adalah Text
    </div>
  );
}

function App() {
  const theme1 = {
    color: '#F4CE',
    backgroundColor: '#000',
  };

  const theme2 = {
    color: '#FFFF',
    backgroundColor: '#CACA',
  };

  const [Theme, setTheme] = useState('dark');

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) {
      setTheme(localStorageTheme);
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const handleClick = (e) => {
    e.preventDefault();
    Theme === 'dark' ? setMode('light') : setMode('dark');
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Tombol</button>
      <Text theme={Theme === 'dark' ? theme1 : theme2} />
    </div>
  );
}

export default App;

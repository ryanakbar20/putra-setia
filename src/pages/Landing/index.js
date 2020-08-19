import React, { useEffect, useState } from 'react';
import { Navbar, Hero, LargeCard, Organization } from '../../components';
import data from '../../assets/data.json';

export default function Landing() {
  const [Theme, setTheme] = useState('dark');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    } else {
      setMode('dark');
    }
  }, []);

  const setMode = (mode) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
  };

  const handleTheme = () => {
    Theme === 'dark' ? setMode('light') : setMode('dark');
  };

  return (
    <div>
      <Navbar onClick={handleTheme} theme={Theme} />
      <Hero data={data.carousel} />
      <LargeCard theme={Theme} />
      <Organization data={data.organization} />
    </div>
  );
}

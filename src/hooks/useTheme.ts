import { useState, useEffect } from 'react';

const userTheme = window?.matchMedia('(prefers-color-scheme: light)').matches;
const defaultTheme = userTheme ? 'ligth' : 'dark';

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || defaultTheme
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

export default useTheme;

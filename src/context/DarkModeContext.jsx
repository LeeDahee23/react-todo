import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  // 토글버튼 클릭시 함수: 상태와 스타일을 반대로 변경
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    darkModeToggle(!darkMode);
  };

  // 마운트 되면 localStorage의 theme 정보를 가져와서 dark라면 true, 아니라면 false
  // -> darkmode state 변경
  // -> 스타일도 변경
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setDarkMode(isDark);
    darkModeToggle(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// isDark에 따른 css, localStorage에 저장
function darkModeToggle(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
export const useDarkMode = () => useContext(DarkModeContext);

import React, {createContext, useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components/native';
import lightTheme from '@themes/lightTheme';
import darkTheme from '@themes/darkTheme';
import {loadBoolean, loadString, saveBoolean, saveString} from '@utils/Storage';
import {ThemeType} from '@models/Utils';

type Theme = 'light' | 'dark';

type ChildrenProps = {
  children: React.ReactNode;
};

interface AppContextProps {
  theme: Theme;
  isSoundOn: boolean;
  toggleTheme: () => void;
  toggleSound: () => void;
}

export const AppContext = createContext<AppContextProps>({
  theme: ThemeType.light,
  isSoundOn: true,
  toggleTheme: () => {},
  toggleSound: () => {},
});

export function AppProvider({children}: ChildrenProps) {
  const [theme, setTheme] = useState<Theme>(ThemeType.light);
  const [isSoundOn, setIsSoundOn] = useState(true);

  useEffect(() => {
    loadTheme();
    loadSound();
  }, []);

  function loadTheme() {
    const savedTheme = loadString('theme');
    if (savedTheme) {
      setTheme(savedTheme === 'light' ? ThemeType.light : ThemeType.dark);
    }
  }

  function loadSound() {
    const savedSound = loadBoolean('sound');
    if (savedSound !== null && savedSound !== undefined) {
      setIsSoundOn(savedSound);
    } else {
      saveBoolean('sound', true);
      setIsSoundOn(true);
    }
  }

  function toggleTheme() {
    let selectTheme;
    if (theme === ThemeType.light) {
      selectTheme = ThemeType.dark;
    } else {
      selectTheme = ThemeType.light;
    }
    setTheme(selectTheme);
    saveString('theme', selectTheme);
  }

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  function toggleSound() {
    saveBoolean('sound', !isSoundOn);
    setIsSoundOn(!isSoundOn);
  }

  return (
    <AppContext.Provider value={{theme, toggleTheme, isSoundOn, toggleSound}}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}

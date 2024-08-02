import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('');

  return (
    <ColorContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorContext.Provider>
  );
};

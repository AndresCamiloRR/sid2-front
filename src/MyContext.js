import React, { createContext, useState, useContext } from 'react';

// Creamos un contexto
const MyContext = createContext();

// Creamos un proveedor para el contexto
export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState(null);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Función personalizada para acceder al contexto
export const useMyContext = () => useContext(MyContext);

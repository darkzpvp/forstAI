'use client'

import { createContext, ReactNode, useContext } from 'react';

const UsuariosContext = createContext();

const UsuariosProvider = ({ children }: { children: ReactNode }) => {
    return (
        <UsuariosContext.Provider
            value={{

            }}
        >
            {children}
        </UsuariosContext.Provider>
    );
};
export {
    UsuariosProvider
}
export default UsuariosContext;

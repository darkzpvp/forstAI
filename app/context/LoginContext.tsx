'use client'
import { createContext, ReactNode, useContext } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }: { children: ReactNode }) => {
    return (
        <LoginContext.Provider
            value={{

            }}
        >
            {children}
        </LoginContext.Provider>
    );
};
export {
    LoginProvider
}
export default LoginContext;

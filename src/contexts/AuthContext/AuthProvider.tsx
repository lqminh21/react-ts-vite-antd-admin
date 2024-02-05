import { createContext, PropsWithChildren, useContext, useLayoutEffect, useState } from "react";

import {User} from './types/user.type';

type AuthProviderProps = PropsWithChildren & {
    isAuthenticated?: boolean
};

type AuthContextValueProps = User & {
    user: User | null,
    isAuthenticated: boolean
}

const AuthContext = createContext<User | null>(null);

const AuthProvider = ({
    children,
    isAuthenticated = true
}: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const value: AuthContextValueProps = {
        user, isAuthenticated
    };

    useLayoutEffect(() => {
        // Call API

        // End

        setUser(isAuthenticated ? {id: 1} : null);
        // setUser(null)
    }, [isAuthenticated]);

    

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext) as AuthContextValueProps;

    if(!context) 
        throw new Error('useAuth must be used within an AuthProvider');

    return context;
}

export default AuthProvider;
export {useAuth};
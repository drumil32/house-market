import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

export const useAuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [chekingStatus, setChekingStatus] = useState(true);

    useEffect(() => {
        const Auth = getAuth();
        setChekingStatus(true);
        const unSubscribe = Auth.onAuthStateChanged(
            (user) => {
                if (user)
                    setIsLoggedIn(true);
                else
                    setIsLoggedIn(false);
                setChekingStatus(false);
            }
        );
        return () => unSubscribe();
    }, []);
    return { isLoggedIn, chekingStatus };

}

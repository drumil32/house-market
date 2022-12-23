import { Outlet,useNavigate } from "react-router-dom";
import { useAuthStatus } from '../hooks/useAuthStatus';
import React, { useEffect } from 'react';
import Spinner from '../components/Spinner';

function PrivateRoute() {
    const navigate = useNavigate();
    const { isLoggedIn, chekingStatus } = useAuthStatus();
    
    useEffect( ()=>{
        if( false===chekingStatus ){
            if( false===isLoggedIn )
            navigate('/');
        }
    } , [isLoggedIn, chekingStatus] );
    
    if( chekingStatus ) return ( <Spinner/> );
    

    return (
        <>
            {isLoggedIn && <Outlet /> }
        </>
    )
}

export default PrivateRoute;
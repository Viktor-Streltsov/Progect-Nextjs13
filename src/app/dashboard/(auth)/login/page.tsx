'use client'

import React from 'react';
import style from './page.module.css';
import {signIn} from "next-auth/react";

const Login = () => {
    return (
        <div className={style.login}>
            <button onClick={()=> signIn('google')}>Login with Google</button>
        </div>
    );
}

export default Login;
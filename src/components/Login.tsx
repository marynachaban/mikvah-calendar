import React, { useState } from 'react'
import config from './config.json';

interface ConfigType {
    monthsPrayers: Array<ArrayItem>
    timesOfPrayer: Array<ArrayItem>
    fileUrl: string
    rightBottomBox: Array<RightBottomContent>
    monthSponsorText: string
    bottomSponsorsContent: Array<ArrayItem>
    login: string
    password: string
}


interface ArrayItem {
    name: string;
    value?: string;
}

interface RightBottomContent {
    title: string;
    subtitle?: string;
    text?: string;
}



export const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        setLogin('');
        setPassword('');
    };

    return (
        <>
            <div>
                <label htmlFor="username">Username or Email:</label>
                <input
                    value={login}
                    onChange={(e) => setLogin(e.currentTarget.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
            </div>
            <button onClick={() => handleSubmit()} type="submit">Login</button>
        </>
    );
}

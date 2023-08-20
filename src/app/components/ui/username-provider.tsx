'use client'
import React, { createContext, useState } from 'react'


export const UsernameContext = createContext('You')

export function UsernameInput() {
    const [usernameValue, setUsernameValue] = useState('');

    function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsernameValue(event.target.value);
    }

    return (
        <UsernameContext.Provider value={usernameValue}>
            <form onSubmit={(event) => event.preventDefault()} id='usernameForm' className='bg-card p-2'>
                <input
                    type="text"
                    value={usernameValue}
                    id='usernameInput'
                    onChange={handleUsernameChange}
                />
                <button type="submit">Submit</button>
            </form>
        </UsernameContext.Provider>
    );
}
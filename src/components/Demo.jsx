import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const [text, setText] = useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    console.log("Render");

    // const prime=findPrime(text)

    const prime = useMemo(() =>
        findPrime(text), [text]);       //It becomes a variable and not a function

    const v = 10;

    return (
        <div className={'m-4 mt-24 p-2 w-96 h-96 border border-black ' + (isDarkTheme && "bg-gray-900 text-white")

        }>
            <div>
                <button className='m-10 p-2 bg-green-500' onClick={() => setIsDarkTheme(!isDarkTheme)}>
                    Toggle {v}</button>
            </div>
            <div>
                <input className='border border-black w-72 px-2'
                    type='number' value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div>
                <h1 className='font-bold'>nth Prime: {prime}</h1>
            </div>
        </div>
    )
}

export default Demo
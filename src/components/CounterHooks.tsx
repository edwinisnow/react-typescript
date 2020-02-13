import React, { FunctionComponent, useState, useContext } from 'react';
import { LanguageContext } from '../App'

export const Counter: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
    const [clicks, setClicks] = useState(initial);

    const { lang } = useContext(LanguageContext)
    return <aside>
        <p>Clicks :{clicks}</p>
        <p>Language : {lang} </p>
        <button onClick={() => setClicks(clicks + 1)}>+</button>
        <button onClick={() => setClicks(clicks - 1)}>-</button>
    </aside>
}
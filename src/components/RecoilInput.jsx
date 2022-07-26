import React from 'react';
import { atom, useRecoilState } from 'recoil';

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

const RecoilInput = () => {
    const [text, setText] = useRecoilState(textState);
    const onChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div>
            <h1>Recoil Input Section</h1>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    );
};

export default RecoilInput;
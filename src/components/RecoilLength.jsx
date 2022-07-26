import React from 'react';
import { selector, useRecoilValue } from 'recoil';
import { textState } from './RecoilInput';

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const text = get(textState);

        return text.length;
    },
});

const RecoilLength = () => {
    const count = useRecoilValue(charCountState);
    return (
        <div>
            Character Count: {count}
        </div>
    );
};

export default RecoilLength;
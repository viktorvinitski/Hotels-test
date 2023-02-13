import React from 'react';
import { PersonFilterWrapper } from './styled';

interface Props {
    onClick: (value: number) => void;
    value: number;
    title: string;
}

const PersonFilter: React.FC<Props> = ({onClick, value, title}) => {

    const increaseClick = () => onClick(value + 1)

    const decreaseClick = () => onClick(value - 1)

    return (
        <PersonFilterWrapper>
            {title}
            <button type='button' onClick={increaseClick}>+</button>
            {value}
            <button type='button' onClick={decreaseClick}>-</button>
        </PersonFilterWrapper>
    );
};

export default PersonFilter;
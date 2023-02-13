import React from 'react';
import { Rating } from 'react-simple-star-rating'

interface Props {
    onClick: (value: number) => void;
    ratingValue: number;
}

const RatingFilter: React.FC<Props> = ({onClick, ratingValue}) => {

    const handleRating = (rate: number) => onClick(rate)

    return <Rating onClick={handleRating} initialValue={ratingValue}/>
};

export default RatingFilter;
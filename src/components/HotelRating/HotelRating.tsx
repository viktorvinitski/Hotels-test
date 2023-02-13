import React, {useMemo} from 'react';
import {StyledRatingWrapper, StyledStarBlock} from "./styled";
import {StarSvg} from "../icons/StarSvg";

interface Props {
    starRating: string
}

const stars = [
    {isActive: false},
    {isActive: false},
    {isActive: false},
    {isActive: false},
    {isActive: false},
]

const HotelRating: React.FC<Props> = ({starRating}) => {

    const currentRating = useMemo(() => (
        stars.map((star, index) => (
            index < +starRating ? {isActive: true} : star
        ))
    ), [starRating])

    return (
        <StyledRatingWrapper>
            {currentRating.map(({isActive}, index) =>(
                <StyledStarBlock key={index} isActive={isActive}>
                    <StarSvg/>
                </StyledStarBlock>
            ))}
        </StyledRatingWrapper>
    );
};

export default HotelRating;
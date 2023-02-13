import React from 'react';
import {FilterWrapper, ResetFilterButton} from "./styled";
import RatingFilter from "./RatingFilter/RatingFilter";
import PersonFilter from "./PersonFilter/PersonFilter";
import {IFilter} from "../../types/filter";

interface Props {
    onRatingClick: (value: number) => void;
    onAdultsClick: (value: number) => void;
    onChildrenClick: (value: number) => void;
    filterValues: IFilter;
    onReset: () => void;
}

const Filter: React.FC<Props> = ({
    onRatingClick,
    filterValues,
    onAdultsClick,
    onChildrenClick,
    onReset
}) => {
    return (
        <FilterWrapper>
            <RatingFilter
                ratingValue={filterValues.starRating}
                onClick={onRatingClick}
            />
            <PersonFilter
                onClick={onAdultsClick}
                value={filterValues.maxAdults}
                title='Adults'
            />
            <PersonFilter
                onClick={onChildrenClick}
                value={filterValues.maxChildren}
                title='Children'
            />
            <ResetFilterButton onClick={onReset}>Reset filter</ResetFilterButton>
        </FilterWrapper>
    );
};

export default Filter;
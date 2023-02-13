import React, {useMemo, useState} from 'react';
import {useGetHotelsList} from "../../hooks/useGetHotelsList";
import {FilterBlock, StyledHotelsList} from "./styled";
import HotelsListItem from "../HotelListItem/HotelsListItem";
import CustomSpinner from "../Spinner/Spinner";
import Filter from "../Filter/Filter";
import {hotelsListFilter} from "./helpers";
import {IFilter} from "../../types/filter";

const initialFilterValues = {
    starRating: 0,
    maxAdults: 0,
    maxChildren: 0
}

const HotelsList: React.FC = () => {
    const {hotelsList, isFetching} = useGetHotelsList()
    const [filterValues, setFilterValues] = useState<IFilter>(initialFilterValues)

    const onStarsRatingClick = (value: number) => {
        setFilterValues({...filterValues, starRating: value})
    }

    const onAdultsClick = (value: number) => {
        if(value < 0) return
        setFilterValues({...filterValues, maxAdults: value})
    }

    const onChildrenClick = (value: number) => {
        if(value < 0) return
        setFilterValues({...filterValues, maxChildren: value})
    }

    const onResetClick = () => {
        setFilterValues(initialFilterValues)
    }

    const filteredHotelsList = useMemo(() => {
        if(hotelsList) return hotelsListFilter(filterValues.starRating, hotelsList)
    }, [filterValues.starRating, hotelsList])

    return (
        <>
            <FilterBlock>
                <Filter
                    onRatingClick={onStarsRatingClick}
                    onAdultsClick={onAdultsClick}
                    onChildrenClick={onChildrenClick}
                    filterValues={filterValues}
                    onReset={onResetClick}
                />
            </FilterBlock>
            <StyledHotelsList>
                {isFetching
                    ? <CustomSpinner/>
                    : filteredHotelsList && filteredHotelsList.map(item => (
                        <HotelsListItem
                            key={item.id}
                            filterValues={filterValues}
                            {...item}
                        />))}
            </StyledHotelsList>
        </>

    );
};

export default HotelsList;
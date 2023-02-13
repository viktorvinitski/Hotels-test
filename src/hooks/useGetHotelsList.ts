import {useCallback, useEffect, useState} from "react";
import {getHotelsList} from "../api/requests";
import {IApiHotelsListItem} from "../api/types";

export const useGetHotelsList = () => {
    const [hotelsList, setHotelsList] = useState<IApiHotelsListItem[] | null>(null)
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const getHotels = useCallback( async () => {
        setIsFetching(true)
        const hotels = await getHotelsList()
        setHotelsList(hotels)
        setIsFetching(false)
    }, [])

    useEffect(() => {
        getHotels().then()
    }, [])

    return {
        hotelsList,
        isFetching
    }
};

import {useCallback, useEffect, useState} from "react";
import {getHotelsListItemDescription} from "../api/requests";

export const useGetHotelItemDescription = (id: string) => {
    const [description, setDescription] = useState<any>(null)
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const getHotelDescription = useCallback( async (id: string) => {
        setIsFetching(true)
        const description = await getHotelsListItemDescription(id)
        setDescription(description)
        setIsFetching(false)
    }, [])

    useEffect(() => {
        if(id){
            getHotelDescription(id).then()
        }
    }, [])

    return {
        description,
        isFetching
    }
};

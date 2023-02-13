import {IApiHotelDescription, IApiHotelsListItem} from "./types";

const BASE_URL = 'https://obmng.dbm.guestline.net/api'

export const getHotelsList = async (): Promise<IApiHotelsListItem[]> => {
    const res = await fetch(`${BASE_URL}/hotels?collection-id=OBMNG`)
    return await res.json()
}

export const getHotelsListItemDescription = async (id: string): Promise<IApiHotelDescription> => {
    const res = await fetch(`${BASE_URL}/roomRates/OBMNG/${id}`)
    return await res.json()
}
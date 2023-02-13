import {IApiHotelsListItem} from "../../api/types";

export const hotelsListFilter = (filterStarRating: number, hotelsList: IApiHotelsListItem[]) => {
    if(filterStarRating === 0) return hotelsList
    return hotelsList?.filter(item => +item.starRating >= filterStarRating)
}
import {IRoom} from "../../types/room";
import {IFilter} from "../../types/filter";

export const isShownRoom = (room: IRoom, filterValues: IFilter) => {
    const {occupancy: {maxAdults, maxChildren}} = room
    return maxAdults >= filterValues.maxAdults && maxChildren >= filterValues.maxChildren
}
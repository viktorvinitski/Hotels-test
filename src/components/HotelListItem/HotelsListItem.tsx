import React from 'react';
import {
    Address,
    AddressBlock,
    HotelListItem,
    HotelName,
    MainInfoBlock,
    PhotoBlock,
    RatingBlock
} from "./styled";
import CustomCarousel from "../Carousel/Carousel";
import HotelRating from "../HotelRating/HotelRating";
import {useGetHotelItemDescription} from "../../hooks/useGetHotelItemDescription";
import RoomDescriptionBlock from "../RoomDescriptionBlock/RoomDescriptionBlock";
import {IFilter} from "../../types/filter";

interface Props {
    id: string;
    images: {url: string}[];
    name: string;
    address1: string;
    address2: string;
    starRating: string;
    filterValues: IFilter;
}

const HotelsListItem: React.FC<Props> = ({
    id,
    images,
    name,
    address1,
    address2,
    starRating,
    filterValues
}) => {
    const {description} = useGetHotelItemDescription(id)

    return (
        <HotelListItem>
            <MainInfoBlock>
                <PhotoBlock>
                    <CustomCarousel images={images}/>
                </PhotoBlock>
                <AddressBlock>
                    <HotelName>{name}</HotelName>
                    <Address>{address1}</Address>
                    <Address>{address2}</Address>
                </AddressBlock>
                <RatingBlock>
                    <HotelRating starRating={starRating}/>
                </RatingBlock>
            </MainInfoBlock>
            {description && <RoomDescriptionBlock filterValues={filterValues} rooms={description.rooms}/>}
        </HotelListItem>
    );
};

export default HotelsListItem;
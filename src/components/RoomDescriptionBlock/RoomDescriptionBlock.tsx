import React, {useMemo} from 'react';
import {IRoom} from "../../types/room";
import {
    Adults,
    Children,
    MainInfo,
    RoomDescription,
    RoomDescriptionWrapper,
    RoomName, RoomPhotosBlock
} from "./styled";
import CustomCarousel from "../Carousel/Carousel";
import {IFilter} from "../../types/filter";
import {isShownRoom} from "./helpers";

interface Props {
    rooms: IRoom[];
    filterValues: IFilter
}

const RoomDescriptionBlock: React.FC<Props> = ({rooms, filterValues}) => {

    return (
        <>
            {rooms.map(room => (
                isShownRoom(room, filterValues) && <RoomDescriptionWrapper key={room.id}>
                    {room.images.length > 0 &&
                        <RoomPhotosBlock>
                            <CustomCarousel images={room.images}/>
                        </RoomPhotosBlock>}
                    <MainInfo>
                        <RoomName>
                            {room.name}
                        </RoomName>
                        <Adults>
                            Adults {room.occupancy.maxAdults}
                        </Adults>
                        <Children>
                            Children {room.occupancy.maxChildren}
                        </Children>
                    </MainInfo>
                    <RoomDescription>
                        {room.longDescription}
                    </RoomDescription>
                </RoomDescriptionWrapper>
            ))}
        </>
    );
};

export default RoomDescriptionBlock;
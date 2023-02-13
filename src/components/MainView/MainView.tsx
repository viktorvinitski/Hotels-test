import React from 'react';
import {MainLogoContainer, StyledMainView} from "./styled";
import HotelsList from "../HotelsList/HotelsList";

const MainView: React.FC = () => {
    return (
        <StyledMainView>
            <MainLogoContainer/>
            <HotelsList/>
        </StyledMainView>
    );
};

export default MainView;
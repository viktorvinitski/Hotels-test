import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import { StyledSpinnerBlock } from './styled';

const CustomSpinner: React.FC = () => {
    return (
        <StyledSpinnerBlock>
            <Spinner animation="border"/>
        </StyledSpinnerBlock>
    );
};

export default CustomSpinner;
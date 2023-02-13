import styled from "styled-components";

export const StyledRatingWrapper = styled.div`
  display: flex;
  gap: 2px;
`

export const StyledStarBlock = styled.div<{isActive: boolean}>`
  height: 20px;
  display: flex;
  align-items: center;
  svg {
    fill: ${({isActive}) => isActive ? 'orange' : 'none'};
  }
  path {
    stroke: ${({isActive}) => isActive ? 'none' : 'grey'};
  }
`
import styled from "styled-components";

export const HotelListItem = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:first-child{
    margin-top: 0;
  }
`

export const MainInfoBlock = styled.div`
  width: 60%;
  border: 1px solid #222222;
  padding: 20px;
  display: flex;
  gap: 20px;
`

export const PhotoBlock = styled.div`
  width: 200px;
  height: 130px;
  img {
    height: 128px;
  }
`

export const AddressBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const HotelName = styled.div`
  font-size: 18px;
  font-weight: bold;
`

export const Address = styled.div`
  font-size: 12px;
`

export const RatingBlock = styled.div`
  margin-left: auto;
`


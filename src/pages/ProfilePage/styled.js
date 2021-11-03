import styled from "styled-components";

export const MainContainerProfilePage = styled.div`
  position: relative;
  height: 100vh;
`
export const EditAddress = styled.img`
  right: 30px;
  object-fit: contain;
  position: absolute;
`
export const EditProfile = styled.img`
  width: 24px;
  height: 24px;
  margin: 16px 16px 2px 320px;
  object-fit: contain;
  position: absolute;
`
export const OrderBar = styled.h4`
  width: 360px;
  height: 20px;
  margin-top: 10px;
  margin: auto;
  margin-bottom: 8px;
  text-align: start;
  padding-bottom: 5px;
 border-bottom: 1px solid black;
 font-weight: lighter;
`
export const UserData = styled.p`
  margin: 8px 0 0 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: -0.39px;
  color: black;
`
export const AddresTitle = styled.p`
  margin: 8px 0px 0px 16px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const UserContainer = styled.div`
  width: 360px;
  height: 106px;
  margin: 0px 0;
  padding: 5px;
  position: relative;
`
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 76px;
  padding: 16px 0px;
  background-color: #eeeeee;
`
export const H4 = styled.h4`
  text-align: center;
`
export const RenderContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: ${props=> props.bottom};
  padding: 0px;
  width: 100vw;
  min-height: 60vh;
  overflow:scroll;
`
export const Title = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  font-weight: bolder;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`
export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`


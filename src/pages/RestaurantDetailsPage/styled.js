import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
`;
export const Items = styled.div`

  width: 20.5rem;
  height: 7rem;
  margin: 0.438rem 0 0;
  border-radius: 8px;
  border: solid 1px var(--greyish);

`
export const Img = styled.img`
  width: 200px;
`



export const ContainerMobile = styled.div`
  width: 22.5rem;
  height: 40rem;
  text-align: center;
  border: 0.5px solid rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
`;

export const Body = styled.div`
  margin: 8px 12px;
`;


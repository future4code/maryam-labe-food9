import React from "react";
import { Container } from "./styled";
import logoWhite from "../../assents/logoWhite.png";

const HomeScreenPage = () => {
  return (
    <Container>
      <img src={logoWhite} alt={"Logo"} />
    </Container>
  );
};

export default HomeScreenPage;

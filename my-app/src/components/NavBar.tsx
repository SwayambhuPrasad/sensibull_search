import { styled } from "@mui/system";
import Logo from "../Assets/LogoName.svg";

import React from "react";

const Container = styled("div")({
  backgroundColor: "white",
  border: "solid",
  borderWidth: 1,
  height: 61,
  width: "100vw",
  paddingLeft: 30,
  paddingRight: 30,
});
const ContainerLogoandText = styled("div")({
  backgroundColor: "transparent",
  display: "flex",
  height: 20,
  width: 35,
  paddingTop: 20,
});
const ContainerLogo = styled("img")({
  backgroundColor: "transparent",
  height: 30,
  width: 140,
});

const NavBar: React.FC = () => {
  return (
    <Container>
      <ContainerLogoandText>
        <ContainerLogo src={Logo} />
      </ContainerLogoandText>
    </Container>
  );
};

export default NavBar;

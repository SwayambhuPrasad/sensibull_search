import Logo from "../Assets/Logo.svg";
import name from "../Assets/name.svg";
import "animate.css";
import { styled } from "@mui/system";
import { useState } from "react";

const PlaceLogo = styled("img")({
  backgroundColor: "transparent",
  height: 100,
  width: 150,
});
const PlaceLogo1 = styled("img")({
  backgroundColor: "transparent",

  height: 100,
  width: 400,
  paddingLeft: -50,
});
const LoadingBackground = styled("div")({
  backgroundColor: "black",
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Loading: React.FC = () => {
  return (
    <LoadingBackground>
      <PlaceLogo
        src={Logo}
        className="animate__animated animate__fadeInLeft  animate__infinite	infinite "
      />
      <PlaceLogo1 src={name} className="animate__animated animate__fadeIn" />
    </LoadingBackground>
  );
};

export default Loading;

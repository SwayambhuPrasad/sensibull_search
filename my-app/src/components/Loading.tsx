import Logo from "../Assets/Logo.svg";
import "animate.css";
import { styled } from "@mui/system";

const PlaceLogo = styled("img")({
  backgroundColor: "transparent",
  height: 100,
  width: 150,
});
const PlaceName = styled("div")({
  backgroundColor: "transparent",
  color: "white",
  height: 100,
  width: 150,
  paddingLeft: 50,
  paddingTop: 50,
  fontSize: "3rem",
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
        className="animate__animated animate__fadeInLeft animate__delay-3s animate__infinite	infinite "
      />
      <PlaceName>SENSIBULL</PlaceName>
    </LoadingBackground>
  );
};

export default Loading;

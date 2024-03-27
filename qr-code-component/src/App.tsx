import { GlobalStyle } from "./components/GlobalStyle";
import styled from "styled-components";
import { QrCode } from "./components/QrCode";

function App() {
  return (
    <>
      <Wrapper>
        <QrCode />
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

export default App;

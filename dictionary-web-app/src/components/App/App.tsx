import { DarkThemeProvider } from '../DarkThemeProvider';
import styled from 'styled-components';
import { Container } from '../Container';
import { Header } from '../Header';
import { Dictionary } from '../Dictionary';
import { GlobalStyle } from '../GlobalStyle';

export function App() {
  return (
    <DarkThemeProvider>
      <Wrapper>
        <Container>
          <Header />
          <Dictionary />
        </Container>
      </Wrapper>
      <GlobalStyle />
    </DarkThemeProvider>
  );
}

const Wrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

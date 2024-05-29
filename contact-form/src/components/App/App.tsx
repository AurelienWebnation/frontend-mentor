import styled from 'styled-components';
import { InputRadio } from '../InputRadio';

export function App() {
  return (
    <Wrapper>
      <InputRadio label="Text" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 20px;
`;

import styled from 'styled-components';
import { ProfileCard } from './components/ProfileCard';
import { links } from './data.ts';

export function App() {
  return (
    <Wrapper>
      <ProfileCard
        name="Jessica Randall"
        location="London, United Kingdom"
        biography="Front-end developer and avid reader."
        links={links}
      />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: 100%;
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
`;

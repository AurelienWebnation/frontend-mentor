import styled from 'styled-components';
import { Button } from '../Button';
import { QUERIES } from '../../constants.ts';

interface Props {
  name: string;
  location: string;
  biography: string;
  links?: {
    github: string;
    frontendMentor: string;
    linkedIn: string;
    twitter: string;
    instagram: string;
  };
}

export function ProfileCard({ name, location, biography, links }: Props) {
  return (
    <Wrapper>
      <Picture src="/images/avatar-jessica.jpeg"></Picture>
      <div>
        <Name>{name}</Name>
        <Location>{location}</Location>
      </div>
      <p>"{biography}"</p>
      {links && (
        <Links>
          {links.github && <Button href={links.github}>GitHub</Button>}
          {links.frontendMentor && (
            <Button href={links.frontendMentor}>Frontend Mentor</Button>
          )}
          {links.linkedIn && <Button href={links.linkedIn}>LinkedIn</Button>}
          {links.twitter && <Button href={links.twitter}>Twitter</Button>}
          {links.instagram && <Button href={links.instagram}>Instagram</Button>}
        </Links>
      )}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: grid;
  gap: var(--spacing-md);
  background-color: var(--color-dark-grey);
  border-radius: 12px;
  max-width: calc(304px + var(--spacing-lg) * 2);
  width: 100%;
  padding: var(--spacing-md);
  color: var(--color-white);
  text-align: center;
  animation: fadeIn 500ms ease-in-out;

  @media ${QUERIES.laptopAndUp} {
    padding: var(--spacing-lg);
  }
`;

const Picture = styled.img`
  width: 88px;
  height: 88px;
  max-width: 100%;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const Name = styled.h1`
  font-size: ${24 / 16}rem;
  font-weight: 600;
`;

const Location = styled.p`
  color: var(--color-neon-green);
  font-weight: 700;
`;

const Links = styled.div`
  display: grid;
  gap: var(--spacing-sm);
`;

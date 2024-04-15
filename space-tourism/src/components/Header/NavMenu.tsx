import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

interface Props {
  items: string[];
}

export function NavMenu({ items }: Props) {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Item key={index}>
          <Link href={item.toLowerCase() === 'home' ? '/' : `/${item}`}>
            <Number>0{index}</Number>
            {item}
          </Link>
        </Item>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  margin-top: 118px;
  margin-left: var(--spacing-5);
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
  font-size: var(--font-size-nav);

  @media ${QUERIES.tabletAndUp} {
    flex-direction: revert;
    margin-left: 0;
    margin-top: 0;
    padding-left: var(--spacing-7);
    padding-right: var(--spacing-7);
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.77px);
    height: 96px;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 830px;
    justify-content: center;
    gap: var(--spacing-7);
`;

const Item = styled.li`
  font-family: 'BarlowCondensed', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  isolation: isolate;
  position: relative;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  gap: var(--spacing-2);
  width: 100%;
  align-items: center;
  --border-opacity: 0.5021;
  height: 100%;

  &::after {
    --height: 31px;
    content: '';
    position: absolute;
    right: 0;
    height: var(--height);
    top: calc(-1 * ((var(--height) - 1em) / 2));
    width: 4px;
    background: var(--color-white);
    opacity: 0;

    @media ${QUERIES.tabletAndUp} {
      right: revert;
      bottom: 0;
      height: 3px;
      width: 100%;
      top: revert;
    }
  }

  &.active::after {
    opacity: 1;
  }

  &:hover::after {
    opacity: 0.5021;
  }
`;

const Number = styled.span`
  font-weight: bold;
  width: 20px;

  @media ${QUERIES.tabletOnly} {
    display: none;
  }
`;

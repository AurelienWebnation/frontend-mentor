import styled from 'styled-components';
import { IconMoon } from '../../assets/icons/moon/IconMoon.tsx';

interface Props {
  onClick: () => void;
  icon?: 'moon';
  $isActive: boolean;
}

const ICONS = {
  moon: IconMoon,
};

export function ToggleButton({ onClick, icon, $isActive = false }: Props) {
  const Icon = icon ? ICONS[icon] : null;

  return (
    <Button onClick={onClick}>
      <Checkbox $isActive={$isActive} />
      {Icon && (
        <IconWrapper $isActive={$isActive}>
          <Icon width="20" height="20" />
        </IconWrapper>
      )}
    </Button>
  );
}

const Button = styled.label`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Checkbox = styled('span')<{ $isActive: boolean }>`
  --label-width: 40px;

  display: flex;
  background: var(--color-grey-1);
  width: var(--label-width);
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  ${(props) => props.$isActive && 'background: var(--color-purple);'}

  &::before {
    --checkbox-width: 14px;
    --padding: 3px;

    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: var(--color-white);
    border-radius: 50%;
    transform: translateX(3px) translateY(3px);
    transition: transform 300ms ease-in-out;

    ${(props) =>
      props.$isActive &&
      `transform: translateX(
          calc(var(--label-width) - var(--checkbox-width) - var(--padding))
        )
        translateY(var(--padding));`}
  }
`;

const IconWrapper = styled.div<{ $isActive: boolean }>`
  & path {
    ${(props) => props.$isActive && 'stroke: var(--color-purple);'}
  }
`;

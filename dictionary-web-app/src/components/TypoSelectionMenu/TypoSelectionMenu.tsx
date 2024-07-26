import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';
import { useBodyDataValue } from '../../hooks/use-body-data-value.hook.ts';
import { QUERIES } from '../../constants.ts';

type Typos = 'sansSerif' | 'serif' | 'mono';

export function TypoSelectionMenu() {
  const [_, setTypo] = useBodyDataValue<Typos>('typo', 'sansSerif');

  function handleChange(nextValue: Typos) {
    setTypo(nextValue);
  }

  return (
    <>
      <Select.Root onValueChange={handleChange}>
        <Trigger>
          <Select.Value placeholder="Sans Serif" />
          <ArrowDownIcon src="/images/icon-arrow-down.svg" alt="Arrow down" />
        </Trigger>

        <Select.Portal>
          <Content position="popper" align="end">
            <Viewport>
              <TypoSansSerif value="sansSerif">
                <Select.ItemText>Sans Serif</Select.ItemText>
              </TypoSansSerif>
              <TypoSerif value="serif">
                <Select.ItemText>Serif</Select.ItemText>
              </TypoSerif>
              <TypoMono value="mono">
                <Select.ItemText>Mono</Select.ItemText>
              </TypoMono>
            </Viewport>
          </Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
}

const Trigger = styled(Select.Trigger)`
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  color: var(--color-black-3);

  @media ${QUERIES.tabletAndUp} {
    gap: 18px;
  }
`;

const ArrowDownIcon = styled.img`
  width: 12px;
  height: 6px;
`;

const Content = styled(Select.Content)`
  min-width: 183px;
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.1);
  margin-top: 18px;

  &:focus,
  &:focus-within,
  &:active,
  &:hover {
    outline: none;
    border: none;
  }
`;

const Viewport = styled(Select.Viewport)`
  display: grid;
  gap: 16px;
`;

const Item = styled(Select.Item)`
  cursor: pointer;

  &:hover {
    color: var(--color-purple);
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const TypoSansSerif = styled(Item)`
  font-family: var(--font-family-sans-serif);
`;

const TypoSerif = styled(Item)`
  font-family: var(--font-family-serif);
`;

const TypoMono = styled(Item)`
  font-family: var(--font-family-mono);
`;

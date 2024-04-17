import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { NavMenu } from './NavMenu.tsx';
import { QUERIES } from '../../constants.ts';

const MENU_ITEMS = ['home', 'destination', 'crew', 'technology'];

export function Header() {
  return (
    <Wrapper>
      <Logo src="/logo.svg" alt="Go home" />
      <HorizontalBar />
      <TabletAndUpMenu>
        <NavMenu items={MENU_ITEMS} />
      </TabletAndUpMenu>
      <MobileMenu>
        <Dialog.Root>
          <HamburgerMenu>
            <img src="/icons/hamburger.svg" alt="Open menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </HamburgerMenu>
          <Dialog.Portal>
            <Overlay />
            <DialogWrapper>
              <CloseButton>
                <CloseIcon src="/icons/close.svg" alt="Open menu" />
              </CloseButton>
              <NavMenu items={MENU_ITEMS} />
            </DialogWrapper>
          </Dialog.Portal>
        </Dialog.Root>
      </MobileMenu>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: var(--spacing-4);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  align-items: center;
  position: relative;
  isolation: isolate;

  @media ${QUERIES.tabletAndUp} {
    padding-top: revert;
    padding-left: revert;
    padding-right: revert;
    padding-left: var(--spacing-6);
  }

  @media ${QUERIES.laptopAndUp} {
    padding-top: var(--spacing-6);
    padding-left: 55px;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;

  @media ${QUERIES.tabletAndUp} {
    width: 48px;
    height: 48px;
  }
`;

const HorizontalBar = styled.div`
  display: none;

  z-index: 2;
  height: 1px;
  background: var(--color-white);
  opacity: 0.2515;
  width: 100%;
  max-width: 473px;
  margin-left: auto;
  transform: translateX(30px);

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const TabletAndUpMenu = styled.div`
  display: none;
  height: 100%;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;

const MobileMenu = styled.div`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
`;

const HamburgerMenu = styled(Dialog.Trigger)`
  background: none;
  border: none;
  cursor: pointer;
`;

const DialogWrapper = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: min(100%, 254px);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.77px);
  animation: slideInFromRight 0.3s ease;
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 34px;
  margin-right: 26.5px;
`;

const CloseIcon = styled.img`
  width: 19.09px;
  height: 19.09px;
`;

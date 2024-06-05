import styled from 'styled-components';
import { Card } from '../Card';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ title: string }>;

export function Toast({ children, title }: Props) {
  return (
    <Wrapper>
      <ToastWrapper>
        <Title>
          <img src="/images/icon-success-check.svg" alt="" />
          {title}
        </Title>
        <p>{children}</p>
      </ToastWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
`;

const ToastWrapper = styled(Card)`
  @keyframes slideFromTop {
    from {
      transform: translateY(-100%);
    }
  }

  display: grid;
  gap: var(--spacing-100);
  width: fit-content;
  background: var(--color-grey-900);
  padding: var(--spacing-300);
  color: var(--color-green-200);
  margin-left: var(--spacing-300);
  margin-right: var(--spacing-300);
  margin-top: var(--spacing-300);
  animation: slideFromTop 0.3s ease-in-out;
`;

const Title = styled.p`
  display: flex;
  gap: var(--spacing-100);
  font-size: var(--font-size-body-md);
  font-weight: 700;
`;

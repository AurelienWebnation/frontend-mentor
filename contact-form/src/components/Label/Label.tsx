import styled from 'styled-components';
import { LabelHTMLAttributes, PropsWithChildren } from 'react';
import { Required } from '../Required';

type Props = PropsWithChildren &
  LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean;
    as?: 'p' | 'label';
  };

export function Label({ required = true, children, ...delegated }: Props) {
  return (
    <Wrapper {...delegated}>
      {children}
      <Required required={required} />
    </Wrapper>
  );
}

export const Wrapper = styled.label`
  display: flex;
  gap: var(--spacing-100);
`;

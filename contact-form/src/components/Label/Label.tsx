import styled, { css } from 'styled-components';
import { LabelHTMLAttributes, PropsWithChildren } from 'react';
import { Required } from '../Required';

type Props = PropsWithChildren &
  LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean;
    as?: 'p' | 'label';
    $withSpace?: boolean;
  };

export function Label({
  required = true,
  $withSpace = true,
  children,
  ...delegated
}: Props) {
  return (
    <Wrapper $withSpace={$withSpace} {...delegated}>
      {children}
      <Required required={required} />
    </Wrapper>
  );
}

type LabelProps = Pick<Props, '$withSpace'>;

export const Wrapper = styled.label<LabelProps>`
  ${({ $withSpace }) => $withSpace && withSpaceStyles}

  // If the 'as' prop is not provided, we render a label and the cursor should be a pointer
  ${({ as }) => !as && 'cursor: pointer'}
`;

const withSpaceStyles = css`
  display: flex;
  gap: var(--spacing-100);
`;

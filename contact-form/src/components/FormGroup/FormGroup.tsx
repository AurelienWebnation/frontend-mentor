import { PropsWithChildren } from 'react';
import type { FieldError } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { InputText } from '../InputText';

type Props = PropsWithChildren<{
  $error: undefined | FieldError;
  $extraSpace?: boolean;
}>;

export function FormGroup({ $error, $extraSpace = false, children }: Props) {
  return (
    <Wrapper $extraSpace={$extraSpace} $error={$error}>
      {children}
      {$error && <ErrorMessage>{$error.message}</ErrorMessage>}
    </Wrapper>
  );
}

const Wrapper = styled.div<Pick<Props, '$extraSpace' | '$error'>>`
  display: grid;
  gap: var(--spacing-100);
  ${({ $extraSpace }) => $extraSpace && 'gap: var(--spacing-200);'}

  & label:has(+ input[type="text"]:focus) {
    color: var(--color-green-600);
  }

  ${({ $error }) => $error && inputTextErrorStyles}
`;

const inputTextErrorStyles = css`
  ${InputText} {
    border-color: var(--color-red);
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-red);
`;

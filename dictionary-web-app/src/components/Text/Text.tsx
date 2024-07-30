import styled from 'styled-components';

interface Props {
  $color?: 'grey' | 'purple';
  $weight?: boolean;
  $italic?: boolean;
  $size?: 'normal' | 'body-s' | 's' | 'm' | 'l';
  $style?: 'underline';
}

export const Text = styled.p<Props>`
  // Colors
  ${({ $color }) => $color === 'grey' && 'color: var(--color-grey-1);'}
  ${({ $color }) => $color === 'purple' && 'color: var(--color-purple);'}
  
  // Weight
  ${({ $weight }) => $weight && 'font-weight: 700;'}
  
  // Italic
  ${({ $italic }) => $italic && 'font-style: italic;'}
  
  // Sizes
  ${({ $size }) => $size && `font-size: var(--font-size-heading-${$size});`}
  ${({ $size }) => $size === 'body-s' && `font-size: var(--font-size-body-s);`}
  
  // Lines height
  ${({ $size }) => $size === 'l' && 'line-height: 77px;'}
  ${({ $size }) => $size === 'm' && 'line-height: 29px;'}
  ${({ $size }) => $size === 's' && 'line-height: 24px;'}
  ${({ $size }) => $size === 'body-s' && 'line-height: 17px;'}
  
  // Styles
  ${({ $style }) => $style === 'underline' && 'text-decoration: underline;'}
`;

Text.defaultProps = {
  $size: 'normal',
};

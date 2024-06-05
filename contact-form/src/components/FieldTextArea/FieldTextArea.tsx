import styled from 'styled-components';
import { FieldText } from '../FieldText';
import { QUERIES } from '../../constants.ts';

export const FieldTextArea = styled(FieldText)`
  --min-height: 216px;

  min-height: calc(
    var(--min-height) + var(--spacing-150) * 2 + var(--border-width) * 2
  );

  @media ${QUERIES.tabletAndUp} {
    --min-height: 108px;
  }

  @media ${QUERIES.laptopAndUp} {
    --min-height: 81px;
  }
`;

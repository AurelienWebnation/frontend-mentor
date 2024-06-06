import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';
import { InputText } from '../InputText';

export const FieldTextArea = styled(InputText).attrs({ as: 'textarea' })`
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

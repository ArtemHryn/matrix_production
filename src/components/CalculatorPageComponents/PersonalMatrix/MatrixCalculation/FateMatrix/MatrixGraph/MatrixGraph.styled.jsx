import styled from 'styled-components';
import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/karmaMatrix.svg';

export const MatrixImg = styled(Matrix)`
  width: 370px;
  height: auto;
  @media screen and (max-width: ${p => p.theme.sizes.mobile}) {
    width: 100%;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 667px;
  }
`;

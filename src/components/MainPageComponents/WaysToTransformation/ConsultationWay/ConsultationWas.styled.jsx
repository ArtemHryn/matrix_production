import styled from 'styled-components';
import goldenBorder from 'images/WaysToTransformation/goldenBorder.png'

export const ConsultationTitlte = styled.h4`
  display: flex;
  align-items: center;

  font-style: italic;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.38;
  letter-spacing: 0.01em;

  width: 300px;
  height: 57px;
  padding-left: 26px;
  margin-bottom: 8px;

  color: #72499b;

  background-color: #f5f1ff;
  border-radius: 88.6598px;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 385px;
    height: 65px;
    padding-left: 57px;
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`;

export const ConsultationList = styled.ul`
    margin-bottom: 35px;
`

export const ConsultationText = styled.p`
  padding: 12px 0;
  border-bottom: 2px solid #72499b;
  border-image: url(${goldenBorder});
  border-image-slice: 0 0 10 0;
  border-image-width: 2px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    padding: 16px 0 17px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    padding: 27px 0;
  }
`;
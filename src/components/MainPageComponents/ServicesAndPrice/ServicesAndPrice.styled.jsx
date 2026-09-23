import styled from 'styled-components';

export const ServiceAndPriceTitle = styled.h2`
  font-weight: 400;
  font-size: 48px;
  line-height: 1.28;
  letter-spacing: 0.01em;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 80px;
    line-height: 1.12;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 90px;
    line-height: 1;
  }
`;

export const FourStagesTitle = styled.h3`
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  letter-spacing: 0.01em;

  margin-bottom: 24px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 36px;
    line-height: 1.2;

    margin-bottom: 30px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 26px;
  }
`;



export const ServiceWarning = styled.p`
  font-size: 14px;
  line-height: 1.21;
  text-align: center;

  color: ${p => p.theme.colors.third};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 17px;
    line-height: 1.24;
  }
`;



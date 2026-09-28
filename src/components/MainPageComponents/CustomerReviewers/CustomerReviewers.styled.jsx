import styled from "styled-components";

export const FeedbackTitle = styled.h3`
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.01em;

  margin-bottom: 20px;

  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    margin-bottom: 20px;

    font-size: 80px;
    line-height: 1.12;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    font-size: 90px;
    line-height: 1;
  }
`;

export const FeedbackDescription = styled.p`
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.01em;

  color: #3d3d3d;

  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 20px;
    line-height: 1.1;
    width: 317px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    font-size: 30px;
    line-height: 1.2;
    width: 490px;
  }
`;

export const YourDarina = styled.h5`
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 0.01em;
  text-align: right;
  margin-bottom: 30px;

  color: #72499b;
`;

export const Cont = styled.img`
  border-radius: 10px;
  width: 270px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 450px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    width: 390px;
  }
`;

export const Separator = styled.img`
  width: 179px;
  margin: 30px auto;
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    margin-top: 60px;
  }
`;

export const LinkToFeedbacks = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 58px;
  margin: 0 auto;

  border: 1px solid ${(p) => p.theme.colors.main};
  border-radius: 80px;

  font-weight: 400;
  font-size: 20px;
  line-height: 1.22;

  letter-spacing: 0.03em;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${(p) => p.theme.colors.main};
  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 380px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    width: 288px;
  }
`;

import styled from "styled-components";

export const ServiceImage = styled.img`
  width: 300px;
  height: 195px;
`;

export const Title = styled.h3`
  font-family: ${(p) => p.theme.fonts.title};
  font-weight: 400;
  font-size: 30px;
  line-height: 120%;
  letter-spacing: 0.01em;
  color: #72499b;

  background-image: linear-gradient(
    to right,
    rgb(0, 0, 0) 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: center bottom;
  background-size: 12px 2px;
  background-repeat: repeat-x;
  padding-bottom: 12px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #494949;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #494949;
`;

export const Price = styled.p`
  font-weight: 400;
  font-size: 36px;
  color: #000;
  margin-top: auto;
`;

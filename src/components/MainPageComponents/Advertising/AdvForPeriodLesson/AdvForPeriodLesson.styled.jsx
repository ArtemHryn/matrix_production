import styled from "styled-components";

export const AdvertisingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: auto;
  border-radius: 4px;
  padding: 24px 16px;
  transform: translateX(${(props) => (props.$visible ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  background: linear-gradient(to bottom, #fefbff 0%, #edc7e3 100%);
  z-index: 9000;
  overflow: hidden;
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    gap: 28px;
  }
`;

export const CloseBtnS = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
  svg {
    width: 22px;
    height: 22px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    width: 44px;
    height: 44px;
  }
  svg {
    width: 32px;
    height: 32px;
  }
`;

export const About = styled.p`
  position: relative;
  font-family: ${(p) => p.theme.fonts.adv}, cursive;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    font-size: 28px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  gap: 20px;
  background: rgba(246, 199, 236, 0.13);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* Safari */
  border: 2px solid rgba(102, 3, 124, 0.24);
  border-radius: 18px;
  padding: 32px 16px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    gap: 24px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    width: 60%;
  }
`;

export const Title = styled.h3`
  font-family: ${(p) => p.theme.fonts.adv2}, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 123%;
  text-transform: uppercase;
  text-align: center;
  color: #773f8a;
  text-wrap: balance;
  & > span {
    font-size: 28px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 44px;
    & > span {
      font-size: 56px;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    font-size: 56px;
    & > span {
      font-size: 72px;
    }
  }
`;

export const Desc = styled.p`
  font-family: ${(p) => p.theme.fonts.adv2}, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 123%;
  text-transform: uppercase;
  text-align: center;
  color: #834a96;
  text-wrap: balance;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    font-size: 18px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    font-size: 24px;
  }
`;

export const LinkToCourse = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #5b1066;
  width: 280px;
  height: 44px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  gap: 72px;
  padding-right: 20px;
  text-transform: uppercase;
  &:hover {
    background-color: #805ea0;
  }
  svg {
    width: 8px;
    height: 8px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    font-size: 28px;
    width: 450px;
    height: 64px;
    gap: 128px;
  }
`;

export const MatrixP = styled.img`
  position: absolute;
  left: -10%;
  top: 12%;
  width: 200px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 300px;
    top: 3%;
    left: -5%;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    width: 380px;
    left: -5%;
  }
`;

export const MatrixY = styled.img`
  position: absolute;
  right: -5%;
  bottom: -11%;
  width: 200px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 300px;
    right: -2%;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    width: 380px;
    bottom: -22%;
    right: -2%;
  }
`;

export const Receipt = styled.img`
  display: none;
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    display: block;
    position: absolute;
    width: 320px;
    top: 45%;
    left: 2%;
  }
`;

export const Table = styled.img`
  display: none;
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    display: block;
    position: absolute;
    width: 400px;
    right: -4%;
    top: 5%;
  }
`;

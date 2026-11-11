import styled from "styled-components";
import {
  background,
  color,
  layout,
  shadow,
  space,
  typography,
} from "styled-system";

export const SetCardTypeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc((100% - 5px) / 2);
  height: 34px;

  font-family: ${(p) => p.theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  text-transform: uppercase;

  color: ${(p) => p.theme.colors.activeBtn};

  background-color: ${(p) => p.theme.colors.white};
  border-radius: 10px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: calc((100% - 10px) / 2);
    height: 34px;
    font-size: 20px;
    line-height: 1.2;
    height: 48px;
  }
  ${space}
  ${color}
  ${shadow}
  ${layout}
  ${background}
  ${typography}
`;

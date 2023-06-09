import styled from 'styled-components';
import {
  border,
  color,
  flexbox,
  layout,
  shadow,
  space,
  typography,
} from 'styled-system';

export const SetCardTypeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc((100% - 5px) / 2);
  height: 34px;

  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  text-transform: uppercase;

  color: ${p => p.theme.colors.activeBtn};

  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: calc((100% - 10px) / 2);
    height: 34px;
    font-size: 20px;
    line-height: 1.2;
    height: 48px;
    box-shadow: 0px 5.4px 5.4px rgba(0, 0, 0, 0.25);
  }
  ${space}
  ${color}
  ${shadow}
`;

export const CardName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(249, 237, 255, 0.7) 100%
  );
  border: 0.7px solid ${p => p.theme.colors.text};
  border-radius: 8px;
  margin-bottom: 4px;

  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.69;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 29px;
    height: 70px;
    margin-bottom: 7px;
    border-radius: 15px;
    border: 1px solid #72499b;
  }
`;

export const ChakraTableTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 33px;
  min-width: 75px;
  border-right: 0.5px solid ${p => p.theme.colors.main};

  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.24;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    min-width: 141px;
    height: 52px;
    font-size: 26px;
    border-right: 1px solid ${p => p.theme.colors.main};
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    min-width: 190px;
  }
  ${flexbox};
  ${border}
`;

export const List = styled.ul`
  background: rgba(255, 255, 255, 0.5);
  border: 0.5px solid ${p => p.theme.colors.text};
  border-radius: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    border-radius: 22px;
    border: 1px solid ${p => p.theme.colors.text};
  }
`;

export const ChakraElement = styled.li`
  display: flex;
  align-items: center;
  padding-left: 13px;
  border-bottom: 0.5px solid #9071af;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    border-bottom: 1px solid #9071af;
  }
  ${border}
`;

export const Exclamation = styled.span`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 15px;

  font-family: ${p => p.theme.fonts.digits};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 1.18;
  color: ${p => p.theme.colors.main};
  ${color}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
`;

export const ChakraText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27px;
  flex: 1;
  min-width: 75px;

  border-right: 0.5px solid #9071af;

  font-family: ${p => p.theme.fonts.digits};
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;

  color: #464646;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 52px;
    min-width: 141px;
    border-right: 1px solid #9071af;
    font-size: 22px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    min-width: 190px;
  }
  ${flexbox};
  ${border}
  ${layout}
  ${typography}
`;

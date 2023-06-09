import styled from 'styled-components';
import { layout } from 'styled-system';

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 3.23967px 3.23967px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 66px;
  height: 39px;
  ${layout}
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Info = styled.p`
  font-size: 18px;
  line-height: 22px;

  color: #000000;
  margin: 10px 0;
`;

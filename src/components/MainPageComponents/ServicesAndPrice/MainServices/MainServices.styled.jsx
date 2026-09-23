import styled from "styled-components";

export const MainServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
  }
`;

export const MainServicesListItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background: #fff;
  max-width: 332px;
  border: 1px solid #eac8ef;
  padding: 0px 20px 40px;
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    height: min-content;
  }
`;

export const RedirectToBooking = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 64px;
  padding: 0 51px;

  background-color: ${(p) => p.theme.colors.main};
  border-radius: 50px;

  font-weight: 300;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: 0.03em;
  text-align: center;

  color: ${(p) => p.theme.colors.white};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 358px;
    font-size: 22px;
    line-height: 1.2;
    padding: 0 27px;
    margin: 0 auto;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    width: 398px;
    font-size: 22px;
    line-height: 1.2;
    padding: 0 20px;
  }
`;

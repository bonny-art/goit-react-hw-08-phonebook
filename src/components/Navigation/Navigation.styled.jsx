import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing(10)};
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  &:hover {
    color: ${props => props.theme.colors.accent1};
  }
  &:focus {
    color: ${props => props.theme.colors.accent2};
  }
`;

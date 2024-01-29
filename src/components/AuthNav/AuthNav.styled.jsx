import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.accent1};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  &:hover {
    color: ${props => props.theme.colors.accent2};
  }
`;

export const LoginStyled = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent1};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(6)};
  border-radius: ${props => props.theme.spacing(2)};
  &:hover {
    background-color: ${props => props.theme.colors.accent2};
  }
`;

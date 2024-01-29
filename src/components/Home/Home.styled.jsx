import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

export const TitleStyled = styled.h1`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  font-size: ${props => props.theme.spacing(20)};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const TextStyled = styled.p`
  color: ${props => props.theme.colors.light};

  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  margin-bottom: ${props => props.theme.spacing(5)};
  line-height: ${props => props.theme.spacing(5)};
`;

export const ItemsStyled = styled.li`
  color: ${props => props.theme.colors.light};

  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  margin-bottom: ${props => props.theme.spacing(5)};
  margin-left: ${props => props.theme.spacing(5)};
`;

export const AuthNavWrapper = styled.div`
  padding-top: ${props => props.theme.spacing(5)};
  display: flex;
  justify-content: center;
`;

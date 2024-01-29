import styled from '@emotion/styled';

export const DivStyled = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(10)};
  align-items: center;
`;

export const TextStyled = styled.p`
  color: ${props => props.theme.colors.accent1};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;

export const LoginStyled = styled.button`
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

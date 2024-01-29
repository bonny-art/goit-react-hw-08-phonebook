import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  background-color: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing(5)} 0;
`;

export const CointainerStyled = styled.div`
  width: ${props => props.theme.spacing(200)};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

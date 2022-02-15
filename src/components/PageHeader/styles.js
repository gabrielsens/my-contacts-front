import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;
  a {
    display: flex;
    align-items: center;
    span{
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
    text-decoration: none;
  }

  img {
    margin-right: 8px;
    transform: rotate(270deg);
  }
  h1 {
    font-size: 24px;
  }
`;

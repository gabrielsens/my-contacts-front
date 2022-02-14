import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 34px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        font-size: 24px;
        color: #222;
    }

    a{
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid #5061FC;
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.1s ease-in;

        &:hover {
            background: ${({ theme }) => theme.colors.primary.main};
            color: #fff;
        }
    }

`;

export const ListContainer = styled.div`
    margin-top: 24px;

    button {
        background: transparent;
        border: none;
        display: flex;
        align-itens: center;

        span {
            margin-right: 8px;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.primary.main}
        }
    }
    margin-botton: 8px;
`;

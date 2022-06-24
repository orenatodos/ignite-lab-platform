import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.gray[700]};
    border-bottom: 1px solid ${theme.colors.gray[600]};
    padding-block: 1.5rem;
  `}
`

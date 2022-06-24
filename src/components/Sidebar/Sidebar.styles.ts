import styled, { css } from 'styled-components'

export const Sidebar = styled.aside`
  ${({ theme }) => css`
    width: 21.75rem;
    background-color: ${theme.colors.gray[700]};
    border-left: 1px solid ${theme.colors.gray[600]};
    padding: 1.5rem;
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: 1.5rem;
    font-weight: ${theme.fontWeights.bold};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${theme.colors.gray[500]};
  `}
`

export const LessonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

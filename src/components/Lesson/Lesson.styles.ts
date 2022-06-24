import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

type CardProps = {
  isActive: boolean
}

export const Card = styled.div<CardProps>`
  ${({ theme, isActive }) => css`
    border: 1px solid ${theme.colors.gray[500]};
    border-radius: ${theme.radii.sm};
    padding: 1rem;

    ${isActive &&
    css`
      background-color: ${theme.colors.green[500]};
      border-color: ${theme.colors.green[500]};

      & * {
        color: ${theme.colors.gray[100]} !important;
      }
    `}
  `}
`

export const Lesson = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;

    &:hover {
      ${Card} {
        border-color: ${theme.colors.green[500]};
      }
    }
  `}
`

export const Date = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.gray[300]};
    margin-bottom: 0.5rem;
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span:first-child {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${theme.colors.blue[500]};
      font-weight: ${theme.fontWeights.medium};
    }

    & > span:last-child {
      text-transform: uppercase;
      font-size: 0.75rem;
      color: ${theme.colors.green[500]};
      font-weight: ${theme.fontWeights.bold};
      border: 1px solid currentColor;
      border-radius: ${theme.radii.sm};
      padding: 0.125rem 0.5rem;
    }
  `}
`

export const Title = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-weight: ${theme.fontWeights.bold};
    margin-top: 1rem;
    display: block;
  `}
`

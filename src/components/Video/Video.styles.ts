import styled, { css } from 'styled-components'

export const Video = styled.div`
  flex: 1;
`

export const VideoBackground = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  max-height: 60vh;
  aspect-ratio: 16 / 9;
`

export const Container = styled.div`
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`

export const Infos = styled.div`
  display: flex;
  align-items: start;
  gap: 3.75rem;
`

export const TextBlock = styled.div`
  ${({ theme }) => css`
    flex: 1;

    & > h1 {
      font-size: 1.5rem;
      font-weight: ${theme.fontWeights.bold};
      margin-bottom: 1rem;
    }

    & > p {
      color: ${theme.colors.gray[200]};
      line-height: 1.625;
    }
  `}
`

export const Teacher = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;

    & > img {
      width: 4rem;
      height: 4rem;
      border-radius: ${theme.radii.circle};
      box-shadow: 0 0 0 3px ${theme.colors.green[500]};
    }

    & > div {
      line-height: 1.4;

      & > strong {
        font-weight: ${theme.fontWeights.bold};
        font-size: 1.5rem;
        display: block;
      }

      & > span {
        color: ${theme.colors.gray[200]};
        font-size: 0.875rem;
        display: block;
      }
    }
  `}
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > a {
      font-size: 0.875rem;
      padding: 1rem;
      border-radius: ${theme.radii.sm};
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: ${theme.fontWeights.bold};
      text-transform: uppercase;
      gap: 0.625rem;
      transition: background-color 0.2s ease-out, color 0.2s ease-out;
    }

    & > a:first-child {
      background-color: ${theme.colors.green[500]};
      color: ${theme.colors.gray[100]};

      &:hover {
        background-color: ${theme.colors.green[700]};
      }
    }

    & > a:last-child {
      color: ${theme.colors.blue[500]};
      border: 1px solid currentColor;

      &:hover {
        background-color: ${theme.colors.blue[500]};
        color: ${theme.colors.gray[900]};
      }
    }
  `}
`

export const Materials = styled.div`
  ${({ theme }) => css`
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5rem;

    & > a {
      background-color: ${theme.colors.gray[700]};
      border-radius: ${theme.radii.sm};
      overflow: hidden;
      display: flex;
      align-items: stretch;
      gap: 1.5rem;
      text-decoration: none;
      transition: background-color 0.2s ease-out;

      &:hover {
        background-color: ${theme.colors.gray[600]};
      }

      & > div:first-child {
        background-color: ${theme.colors.green[700]};
        color: ${theme.colors.gray[100]};
        height: 100%;
        display: flex;
        align-items: center;
        padding: 1.5rem;
      }

      & > div:last-child {
        line-height: 1.4;
        padding: 1.5rem;

        & > strong {
          color: ${theme.colors.gray[100]};
          font-size: 1.5rem;
          font-weight: ${theme.fontWeights.bold};
        }

        & > p {
          font-size: 0.875rem;
          color: ${theme.colors.gray[200]};
          text-decoration: none;
        }
      }
    }
  `}
`

import styled, { css } from 'styled-components'

export const Subscribe = styled.div`
  min-height: 100vh;
  background-image: url('/src/assets/images/home-overlay.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  overflow: hidden;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-inline: auto;
  margin-top: 7.5rem;
`

export const TextBlock = styled.div`
  ${({ theme }) => css`
    max-width: 40rem;

    & > h1 {
      font-size: 2.5rem;
      font-weight: ${theme.fontWeights.medium};
      line-height: 3.125rem;
      color: ${theme.colors.gray[100]};
      margin-top: 2rem;

      strong {
        color: ${theme.colors.blue[500]};
      }
    }

    & > p {
      line-height: 160%;
      margin-top: 1.5rem;
      color: ${theme.colors.gray[200]};
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    padding: 2rem;
    background-color: ${theme.colors.gray[700]};
    border: 1px solid ${theme.colors.gray[500]};
    border-radius: ${theme.radii.sm};
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 24.375rem;

    & > strong {
      font-size: 1.5rem;
      font-weight: ${theme.fontWeights.bold};
      line-height: 140%;
      color: ${theme.colors.gray[100]};
    }

    & > input {
      height: ;
      padding: 1rem;
      background: ${theme.colors.gray[900]};
      border-radius: ${theme.radii.sm};
      border: 0;
      margin-top: 0.5rem;

      &::placeholder {
        color: ${theme.colors.gray[300]};
      }
    }

    & > button {
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.gray[100]};
      text-transform: uppercase;
      padding: 1rem;
      background: ${theme.colors.green[500]};
      border-radius: ${theme.radii.sm};
      margin-top: 1.5rem;
      font-size: 0.875rem;
      font-weight: ${theme.fontWeights.bold};
      transition: color 0.2s ease-out;

      &:hover {
        background: ${theme.colors.green[700]};
      }
    }
  `}
`

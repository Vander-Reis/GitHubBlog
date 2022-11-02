import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  background: ${(props) => props.theme['blue-900']};
  border-radius: 10px;
  padding: 32px 40px;
  margin-top: 46px;

  display: flex;
  gap: 32px;
`

export const CardImage = styled.div`
  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8px;

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme['blue-400']};
      font-weight: 700;
      font-size: 12px;
      line-height: 160%;

      &:hover {
        color: ${(props) => props.theme['blue-300']};
      }
    }
  }

  h2 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 24px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }

  .links {
    display: flex;
    gap: 24px;
    a {
      color: ${(props) => props.theme['blue-300']};

      &:hover {
        color: ${(props) => props.theme['blue-400']};
        transition: all 0.2s;
      }
    }
  }
`

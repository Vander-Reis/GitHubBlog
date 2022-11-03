import styled from 'styled-components'

export const CardsContainer = styled.div`
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme['blue-800']};
  border-radius: 10px;
  padding: 32px;
  /* margin-bottom: 32px; */

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;

    h2 {
      width: 283px;
      height: 64px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
    }

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme['blue-500']};
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['blue-100']};
    // colocar os ... em multiplas linhas
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
`

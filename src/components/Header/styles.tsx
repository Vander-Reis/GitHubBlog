import styled from 'styled-components'
import CoverImage from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  /* width: 100vw; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: 64px;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 296px;
    inset: 0;
    background: url(${CoverImage});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
`

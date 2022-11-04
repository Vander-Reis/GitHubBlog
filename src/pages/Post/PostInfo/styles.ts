import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 864px;
  height: 168px;
  background: ${(props) => props.theme['blue-900']};
  border-radius: 10px;
  padding: 32px;
  margin-top: 46px;
`

export const ProfilePost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  > a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    /* line-height: 160%; */
    text-decoration: none;
    color: ${(props) => props.theme['blue-400']};

    &:hover {
      color: ${(props) => props.theme['blue-300']};
    }
  }
`

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 8px;

  > span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['blue-500']};
  }
`

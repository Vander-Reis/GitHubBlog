import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 864px;
  margin: auto;
`

export const PostContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  p {
    color: ${(props) => props.theme['blue-100']};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  a {
    color: ${(props) => props.theme['blue-400']};
  }
  code {
    line-height: 1.6;
    margin: 2.5rem 0;
    background: ${(props) => props.theme['blue-800']};
    padding: 1rem;
    border-radius: 6px;
    display: block;
  }
`

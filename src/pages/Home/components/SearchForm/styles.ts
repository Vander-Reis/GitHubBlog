import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 72px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  input {
    width: 100%;
    height: 50px;
    border-radius: 6px;
    padding: 12px 16px;
    border: 1px solid #1c2f41;
    background: ${(props) => props.theme['blue-1000']};
    color: ${(props) => props.theme.white};
  }
`

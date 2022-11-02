import LogoBlog from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoBlog} alt="" />
    </HeaderContainer>
  )
}

import { Header } from '../../components/Header'
import { CardProfile } from './components/CardProfile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <CardProfile />
    </HomeContainer>
  )
}

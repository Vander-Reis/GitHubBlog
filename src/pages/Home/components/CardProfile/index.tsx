import { CardContainer, CardImage, CardContent } from './styles'
import { GithubLogo, Buildings, Users, ArrowSquareOut } from 'phosphor-react'

export function CardProfile() {
  return (
    <CardContainer>
      <CardImage>
        <img src="https://github.com/vander-reis.png" alt="" />
      </CardImage>

      <CardContent>
        <div className="profile">
          <h2>Vander Reis</h2>
          <a href="">
            GITHUB <ArrowSquareOut size={18} />
          </a>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          suscipit illo cupiditate, obcaecati corrupti est pariatur magnam et
          omnis beatae deserunt dicta cum recusandae iste quo veniam doloribus
          ullam laborum.
        </p>

        <div className="links">
          <a href="">
            <GithubLogo size={18} /> vander-reis
          </a>
          <a href="">
            <Buildings size={18} />
            Tech-one
          </a>
          <a href="">
            <Users size={18} />
            32 seguidores
          </a>
        </div>
      </CardContent>
    </CardContainer>
  )
}

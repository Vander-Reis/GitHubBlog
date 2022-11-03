import { CardsContainer } from './styles'

interface CardsProps {
  title: string
  createdAt: string
  description: string
}

export function Cards({ title, createdAt, description }: CardsProps) {
  return (
    <CardsContainer>
      <div>
        <h2>{title}</h2>
        <span>{createdAt}</span>
      </div>

      <p>{description}</p>
    </CardsContainer>
  )
}

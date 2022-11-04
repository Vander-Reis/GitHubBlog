import { CardsContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface CardsProps {
  post: {
    title: string
    body: string
    created_at: string
    number: number
  }
}

export function Cards({ post }: CardsProps) {
  const navigate = useNavigate()

  function handlePostInfo() {
    navigate(`/post/${post.number}`)
  }

  return (
    <CardsContainer onClick={handlePostInfo}>
      <div>
        <h2>{post.title}</h2>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>

      <p>{post.body}</p>
    </CardsContainer>
  )
}

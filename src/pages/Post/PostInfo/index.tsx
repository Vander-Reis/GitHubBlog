import { PostInfoContainer, ProfilePost, InfosContainer } from './styles'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { formatDistanceToNow } from 'date-fns/esm'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'

interface PostProps {
  post: {
    title: string
    html_url: string
    comments: number
    created_at: string
    body: string
    user: {
      login: string
    }
  }
}

export function PostInfo({ post }: PostProps) {
  return (
    <PostInfoContainer>
      <ProfilePost>
        <Link to="/">
          <CaretLeft size={18} />
          VOLTAR
        </Link>
        <a href={post.html_url}>
          VER NO GITHUB <ArrowSquareOut size={18} />
        </a>
      </ProfilePost>

      <h2>{post.title}</h2>

      <InfosContainer>
        <span>
          <GithubLogo size={18} /> {post.user?.login}
        </span>
        <span>
          <Calendar size={18} />{' '}
          {post.created_at &&
            formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
        </span>
        <span>
          <ChatCircle size={18} />
          {post.comments} comentários
        </span>
      </InfosContainer>
    </PostInfoContainer>
  )
}

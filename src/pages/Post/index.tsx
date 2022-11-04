import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/'
import { api } from '../../lib/axios'
import { PostInfo } from './PostInfo/'
import { PostContainer, PostContent } from './styles'

interface PostProps {
  title: string
  html_url: string
  comments: number
  created_at: string
  body: string
  user: {
    login: string
  }
}

export function Post() {
  const [post, setPost] = useState<PostProps>({} as PostProps)

  const params = useParams()

  const fetchUser = useCallback(async () => {
    const response = await api.get(
      `repos/vander-reis/GitHubBlog/issues/${params.number}`,
    )

    setPost(response.data)
  }, [params.number])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <PostContainer>
      <Header />
      <PostInfo post={post} />

      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}

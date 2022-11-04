import { Cards } from '../../components/Cards'
import { Header } from '../../components/Header'
import { api } from '../../lib/axios'
import { CardProfile } from './components/CardProfile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, CardContainerGrid } from './styles'
import { useEffect, useState, useCallback } from 'react'

interface Posts {
  total_count: number
  items: {
    id: number
    title: string
    body: string
    created_at: string
    number: number
  }[]
}

export function Home() {
  const [posts, setPosts] = useState<Posts>({} as Posts)

  const fetchPosts = useCallback(async (query = '') => {
    const response = await api.get('search/issues', {
      params: {
        q: `${query}repo:vander-reis/GitHubBlog`,
      },
    })

    setPosts(response.data)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <HomeContainer>
      <Header />
      <CardProfile />
      <SearchForm fetchPosts={fetchPosts} total={posts.total_count} />
      <CardContainerGrid>
        {posts?.items?.map((post) => {
          return <Cards key={post.id} post={post} />
        })}
      </CardContainerGrid>
    </HomeContainer>
  )
}

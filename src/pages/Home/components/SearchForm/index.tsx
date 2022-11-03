import { ChangeEvent } from 'react'
import { SearchFormContainer } from './styles'

interface SearchFormProps {
  total: number
  fetchPosts: (q: string) => Promise<void>
}

export function SearchForm({ fetchPosts, total }: SearchFormProps) {
  async function handleChangePosts(event: ChangeEvent<HTMLInputElement>) {
    return await fetchPosts(event.target.value)
  }

  return (
    <SearchFormContainer>
      <div>
        <h2>Publicações</h2>
        <span>{total} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleChangePosts}
      />
    </SearchFormContainer>
  )
}

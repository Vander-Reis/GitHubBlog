import { CardContainer, CardImage, CardContent } from './styles'
import { GithubLogo, Buildings, Users, ArrowSquareOut } from 'phosphor-react'
import { useEffect, useState, useCallback } from 'react'
import { api } from '../../../../lib/axios'

interface UserProfile {
  html: string
  avatar: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

export function CardProfile() {
  const [user, setUser] = useState<UserProfile>()

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/vander-reis')

    const {
      avatar_url: avatar,
      html_url: html,
      name,
      bio,
      login,
      followers,
      company,
    } = response.data

    setUser({ avatar, html, name, bio, login, followers, company })
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <CardContainer>
      <CardImage>
        <img src={user?.avatar} alt="" />
      </CardImage>

      <CardContent>
        <div className="profile">
          <h2>{user?.name}</h2>
          <a href={user?.html}>
            GITHUB <ArrowSquareOut size={18} />
          </a>
        </div>

        <p>{user?.bio}</p>

        <div className="links">
          <a href="">
            <GithubLogo size={18} /> {user?.login}
          </a>
          <a href="">
            <Buildings size={18} />
            {user?.company}
          </a>
          <a href="">
            <Users size={18} />
            {user?.followers} seguidores
          </a>
        </div>
      </CardContent>
    </CardContainer>
  )
}

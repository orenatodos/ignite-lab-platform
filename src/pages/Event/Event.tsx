import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Video } from '../../components/Video'

import * as Styled from './Event.styles'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <Styled.Event>
        {slug ? <Video lessonSlug={slug} /> : <div style={{ flex: 1 }} />}

        <Sidebar />
      </Styled.Event>
    </div>
  )
}

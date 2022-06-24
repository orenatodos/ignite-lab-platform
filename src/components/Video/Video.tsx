import { DefaultUi, Player, Youtube } from '@vime/react'
import { DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'

import '@vime/core/themes/default.css'

import * as Styled from './Video.styles'
import { useGetLessonBySlugQuery } from '../../graphql/generated'

type VideoProps = {
  lessonSlug: string
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (
      <div style={{ flex: 1 }}>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <Styled.Video>
      <Styled.VideoBackground>
        <Styled.VideoContainer>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </Styled.VideoContainer>
      </Styled.VideoBackground>

      <Styled.Container>
        <Styled.Infos>
          <Styled.TextBlock>
            <h1>{data.lesson.title}</h1>
            <p>{data.lesson.description}</p>

            {!!data.lesson.teacher && (
              <Styled.Teacher>
                <img src={data.lesson.teacher.avatarURL} alt="" />

                <div>
                  <strong>{data.lesson.teacher.name}</strong>
                  <span>{data.lesson.teacher.bio}</span>
                </div>
              </Styled.Teacher>
            )}
          </Styled.TextBlock>

          <Styled.ButtonGroup>
            <a href="">
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>
            <a href="">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </Styled.ButtonGroup>
        </Styled.Infos>

        <Styled.Materials>
          <a href="">
            <div>
              <FileArrowDown size={40} />
            </div>
            <div>
              <strong>Material complementar</strong>
              <p>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
          </a>
          <a href="">
            <div>
              <FileArrowDown size={40} />
            </div>
            <div>
              <strong>Wallpapers exclusivos</strong>
              <p>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
          </a>
        </Styled.Materials>
      </Styled.Container>
    </Styled.Video>
  )
}

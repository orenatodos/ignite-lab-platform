import { useParams } from 'react-router-dom'
import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import * as Styled from './Lesson.styles'

type LessonProps = {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {
  const { slug: paramSlug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    `EEEE' • 'd' de 'MMMM' • 'k'h'mm`,
    {
      locale: ptBR
    }
  )

  const isActiveLesson = paramSlug === slug

  return (
    <Styled.Lesson to={`/event/lesson/${slug}`}>
      <Styled.Date>{availableDateFormatted}</Styled.Date>

      <Styled.Card isActive={isActiveLesson}>
        <Styled.Header>
          {isLessonAvailable ? (
            <span>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span>{type === 'live' ? 'Ao vivo' : 'Aula prática'}</span>
        </Styled.Header>

        <Styled.Title>{title}</Styled.Title>
      </Styled.Card>
    </Styled.Lesson>
  )
}

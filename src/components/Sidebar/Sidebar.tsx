import { useGetLessonsQuery } from '../../graphql/generated'

import { Lesson } from '../Lesson'

import * as Styled from './Sidebar.styles'

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <Styled.Sidebar>
      <Styled.Title>Cronograma de aulas</Styled.Title>

      <Styled.LessonList>
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </Styled.LessonList>
    </Styled.Sidebar>
  )
}

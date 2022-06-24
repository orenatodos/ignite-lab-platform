import { FormEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCreateSubscriberMutation } from '../../graphql/generated'

import { Logo } from '../../components/Logo'

import * as Styled from './Subscribe.styles'

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  const handleSubscribe = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      await createSubscriber({
        variables: {
          name,
          email
        }
      })

      navigate('/event')
    },
    [createSubscriber, name, email, navigate]
  )

  return (
    <Styled.Subscribe>
      <Styled.Container>
        <Styled.TextBlock>
          <Logo />
          <h1>
            Construa uma <strong>aplicação completa</strong>, do zero, com
            <strong>React</strong>
          </h1>
          <p>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </Styled.TextBlock>

        <Styled.Form onSubmit={handleSubscribe}>
          <strong>Inscreva-se gratuitamente</strong>

          <input
            type="text"
            placeholder="Seu nome completo"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Digite seu e-mail"
            onChange={(event) => setEmail(event.target.value)}
          />

          <button type="submit" disabled={loading}>
            Garantir minha vaga
          </button>
        </Styled.Form>
      </Styled.Container>

      <img src="/src/assets/images/home-background.png" alt="" />
    </Styled.Subscribe>
  )
}

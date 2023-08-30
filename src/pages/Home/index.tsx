import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ActionsContainer, Container, MessageContainer } from './styles'
import { Button } from '../../components/Button'


export const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const goTo = (route: string) => {
    navigate(route)
  }
  return (
    <Container>
      <MessageContainer>{t('Welcome')}</MessageContainer>
      <ActionsContainer>
        <Button onClick={() => goTo('/page1')}>{t('Go to page of')} Rick and Morty </Button>
        <Button onClick={() => goTo('/page2')}>{t('Go to page of')} Disney </Button>
      </ActionsContainer>
    </Container>
  )
}

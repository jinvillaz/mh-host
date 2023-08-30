import { useTranslation } from 'react-i18next'

import { Container, ContainerMessage } from './styles'

export const CustomLoadError = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <ContainerMessage>{t('Failed load')}</ContainerMessage>
    </Container>
  )
}

import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Home } from './'

test('renders component correctly', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )
  const textElement = getByText('Welcome to Challenge of microfrontend react with styled-components')
  expect(textElement).toBeInTheDocument()
})

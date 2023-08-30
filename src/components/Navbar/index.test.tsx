import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Navbar } from './'

describe('Navbar', () => {
  it('should render menu links', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>)

    const homeLink = screen.getByText('Home')
    const rickAndMortyLink = screen.getByText('Rick and Morty')
    const disneyLink = screen.getByText('Disney')

    expect(homeLink).toBeInTheDocument()
    expect(rickAndMortyLink).toBeInTheDocument()
    expect(disneyLink).toBeInTheDocument()
  })
})

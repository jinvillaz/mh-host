import { fireEvent, render, screen } from '@testing-library/react'

import { Dropdown } from './'

describe('Dropdown', () => {
  const options = [
    { key: 'en', value: 'English' },
    { key: 'es', value: 'Spanish' },
  ]

  it('should render with default value', () => {
    const defaultValue = 'English'
    const onSelectMock = jest.fn()
    render(<Dropdown options={options} onSelect={onSelectMock} defaultValue={defaultValue} />)

    const defaultOptionValue = screen.getByText('English')
    expect(defaultOptionValue).toBeInTheDocument()
  })

  it('should toggle dropdown list when clicked on header', () => {
    const onSelectMock = jest.fn()
    render(<Dropdown options={options} onSelect={onSelectMock} />)

    const header = screen.getByText('English')
    fireEvent.click(header)

    const dropdownList = screen.getByTestId('dropdown-list')
    expect(dropdownList).toBeInTheDocument()
  })

  it('should select an option when clicked on dropdown list item', () => {
    const onSelectMock = jest.fn()
    render(<Dropdown options={options} onSelect={onSelectMock} />)

    const header = screen.getByText('English')
    fireEvent.click(header)

    const option2 = screen.getByText('Spanish')
    fireEvent.click(option2)

    expect(onSelectMock).toHaveBeenCalledWith('es')
  })
})

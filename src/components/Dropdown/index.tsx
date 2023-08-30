import { useState } from 'react'
import { DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, DropDownListItem } from './styles'

interface Option {
  key: string
  value: string
}

interface DropdownProps {
  options: Option[]
  onSelect: (value: string) => void
  defaultValue?: string
}

export const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option>(
    options.find((option) => option.key === defaultValue) || options[0],
  )

  const toggle = () => setIsOpen(!isOpen)

  const onOptionClicked = (option: Option) => () => {
    setSelectedOption(option)
    setIsOpen(false)
    onSelect(option.key)
  }

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggle}>{selectedOption.value}</DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList data-testid="dropdown-list">
            {options.map((option) => (
              <DropDownListItem onClick={onOptionClicked(option)} key={option.key}>
                {option.value}
              </DropDownListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

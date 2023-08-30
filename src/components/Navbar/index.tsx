import { FaHome } from 'react-icons/fa'

import { NavContainer, MenuLink, Menu } from './styles'
import { useTranslation } from 'react-i18next'
import { Dropdown } from '../Dropdown'
import { Languages } from '../../language'

export const Navbar = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <NavContainer>
        <Menu>
          <MenuLink to="/" active-style="true">
            <FaHome />
            {t('Home')}
          </MenuLink>
          <MenuLink to="/page1" active-style="true">
            Rick and Morty
          </MenuLink>
          <MenuLink to="/page2" active-style="true">
            Disney
          </MenuLink>
        </Menu>
        <Dropdown
          options={Languages}
          defaultValue={i18n.resolvedLanguage}
          onSelect={(language) => i18n.changeLanguage(language)}
        />
      </NavContainer>
    </>
  )
}

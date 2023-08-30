import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavContainer = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background: #8bc34a;
  justify-content: space-between;
  align-items: center;
`

type MenuLinkProps = {
  'active-style': string
}
export const MenuLink = styled(Link)<MenuLinkProps>`
  color: #fff;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
  &:hover {
    color: blue;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
`

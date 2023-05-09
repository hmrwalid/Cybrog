import "./NavItem.css"
const NavItem = (props) => {
  return (
    <li className="nav-item">
    {props.children}
    </li>
  )
}
const NavItemownDropdown = (props) => {
    return (
      <li className="nav-item dropdown">
      {props.children}
      </li>
    )
  }

export default NavItem
export {NavItemownDropdown}
import "./Header.css"
import logo from "../../assets/images/logo.png"
import NavItem, {NavItemownDropdown} from "../../components/NavItem/NavItem"
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <img src={logo} alt ="hmr" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse nav" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <NavItem>
      <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </NavItem>
        
         <NavItem>
         <a className="nav-link" href="#">Stream</a>
         </NavItem>
         <NavItem>
         <a className="nav-link" href="#">Browse</a>
         </NavItem>
       
         <NavItemownDropdown>
         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Details
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
          </NavItemownDropdown>     
      
         <NavItem>
         <a className="nav-link disabled" href="#">Profile</a>
         </NavItem>

       
      
    </ul>
    {/* <form className="form-inline my-2 my-lg-0 search">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    
      {/* <img src={logo} alt ="hmr" /> */}
      
  </>
  )
}

export default Header
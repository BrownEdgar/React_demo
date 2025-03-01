import './NavBar.css'
export default function Navbar(props) {
  return (
    <header className={`Navbar ${props.theme || ''}`}>
      <nav>
        <ul className="Navbar__list">
          {props.menuList.map((elem) => {
            return (
              <li key={elem}>
                <span>{elem.toUpperCase()}</span>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

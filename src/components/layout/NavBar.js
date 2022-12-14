import { Link } from 'react-router-dom';
import classes from "./NavBar.module.css"

function NavBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Users/Items</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Users</Link>
          </li>
          <li>
            <Link to='/Items'>Items</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {

    return(
        <nav className={style.mainContainer}>
            <button>
                <Link to={'/home'}>Home</Link>
            </button>
            <button>
                <Link to={'/create'}>Form</Link>
            </button>
            <SearchBar />
        </nav>
    )
}

export default NavBar;
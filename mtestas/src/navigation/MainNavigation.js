import { Link } from 'react-router-dom'
import '../scss/mainNavigation.css'
const MainNavigation = () => {
    return (  
        <nav className='navigation'>
            <ul>
                <li>
                    <Link style={{textDecoration:'none'}} to='/'>Home Page</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default MainNavigation;
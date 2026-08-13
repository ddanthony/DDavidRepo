import { NavLink, Link } from 'react-router-dom'

// props = links: string[]
export default function NavBar() {
    return (

        <nav>
            <ul>
                <li>
            <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
            <NavLink to="/toggle" end>Toggle</NavLink>
                </li>
                <li>
            <NavLink to="/counter">Counter</NavLink>
                </li>
                <li>
            <Link to="/favcolor">Favorite Color</Link>
                </li>
            </ul>
        </nav>
    )
}

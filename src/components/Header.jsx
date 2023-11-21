import { Link } from 'react-router-dom';
import './Header.scss'


function Header () {
    return (
        <header>
            <nav className='navposition'>
                <img
                    src="https://images.theconversation.com/files/468735/original/file-20220614-19-27it5q.jpeg?ixlib=rb-1.1.0&rect=0%2C0%2C1024%2C680&q=45&auto=format&w=926&fit=clip"
                    alt="super ugly"
                />
                <ul>
                    {/* mise ne place de link qui relient le header avec les pages
                    le "to" est le rappel du "path" déclaré dans App.jsx */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/celebrities">les célébrités de merde</Link></li>
                    <li><Link to="/randomcelebrity">Célébrité aléatoire</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
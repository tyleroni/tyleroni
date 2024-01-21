import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';
import background from '../../assets/images/Portfolio_Background.png';
import background1700 from '../../assets/images/Portfolio_Background1700.png';
import background1500 from '../../assets/images/Portfolio_Background1500.png';
import background1390 from '../../assets/images/Portfolio_Background1390.png';
import background1240 from '../../assets/images/Portfolio_Background1240.png';
import background1450 from '../../assets/images/Portfolio_Background1450.png';
import background1024 from '../../assets/images/Portfolio_Background1024.png';
import background1280x800 from '../../assets/images/Portfolio_Background1280x800.png';







import github from '../../assets/images/Github.png'
import linkedin from '../../assets/images/linkedin.png'


const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className = 'page'>
            
            <Outlet />
            <div className = 'socials'>
                <a href = 'https://github.com/tyleroni' target = '_blank'>
                    <img src = {github} alt = 'Github Logo' className = 'githublogo'></img>
                </a>
                <a href = 'https://linkedin.com/in/tylerjshin' target = '_blank'>
                    <img src = {linkedin} alt = 'LinkedIn Logo' className = 'linkedinlogo'></img>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Layout
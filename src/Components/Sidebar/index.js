import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Tyler_Shin_white.png'
import IconL from '../../assets/images/linkedin.png'
import closeIcon from '../../assets/images/Close_button.png'
import expandIcon from '../../assets/images/Expand_button.png'
import minimizeIcon from '../../assets/images/Minimize_button.png'

const Sidebar = () => (
    <div className = 'nav-bar-container'>
        <div className = 'nav-bar'>
            <Link className='logo' to = '/'>
                <img src={LogoS} alt="Tyler Shin" />
            </Link>
            <div className='control-tab'>
                <Link className='window-icon' to = '/'>
                    <img src={minimizeIcon} alt="Windows Minimize Icon" width = '4%' height = 'auto'/>
                </Link>
                <Link className='window-icon' to = '/'>
                    <img src={expandIcon} alt="Windows Expand Icon" width = '4.05%' height = 'auto'/>
                </Link>
                <Link className='window-icon close-icon' to = '/'>
                    <img src={closeIcon} alt="Windows Close Icon" width = '4%' height = 'auto'/>
                </Link>
        </ div>
        </div>
        
        <nav className = 'nav-bar2'>
            <ul>
                <li className='active'>
                    <a href='/home' className = 'active'>Home</a>
                </li>
                <li>
                    <a href='/projects' className = 'active'>Projects</a>
                </li>
                <li>
                    <a href='https://docs.google.com/document/d/1lnx2hq7bfakdbMc2Nbb6yqgPq2Y1QRmPI_T5Jtb4ohQ/edit?usp=sharing' target = '_blank' className = 'active'>Resume</a>
                </li>
                <li>
                    <a href='/contact' className = 'active'>Contact</a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Sidebar


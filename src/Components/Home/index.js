import { Link } from "react-router-dom";
import './index.scss';
import Logo from '../../assets/images/Windows.gif';


const Home = () => {
    return (
            <div className="container home-page">
                <div className = "backgroundclr">
                    <div className = "windows-gif" >
                        <img src = {Logo} alt = "Windows Icon Gif"></img>
                        </ div>
                        <div className="text-zone">
                        <h1 className = "text-zone text-zone2">Hi, </ h1>
                        <br /> 
                        <h1 className= 'text-zone text-zone3'>I'm Tyler Shin,</h1>
                        <br />
                        <h1 className='text-zone text-zone4'>Web Developer
                        </h1>                
                        <h2 className = 'text-zone-5'>Frontend Developer / UI/UX Designer / Product Designer</h2>
                        <Link to ='/contact' className = 'flat-button'>CONTACT ME</Link>
                    </div>
                </div>
            </div>
            
            
            
    
    );
}

export default Home
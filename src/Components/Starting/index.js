import './index.scss'
import homebackground from '../../assets/images/Portfolio_Homepage.png'


const Starting = () => {
    return (
        <div className = 'startingpage'>
            <div className = 'start-button-container'>
                <a href = '/home' className = 'start-button-icon'><b>&gt;</b></a>
                <a href = '/home' className = 'start-button-text'>Press Start</a>
            </div>
            <div className = 'copyright-container'>
                <p className = 'copyright'>&copy; 2024 Tyler Shin</p>
            </div>
        </div>
    )
}


export default Starting
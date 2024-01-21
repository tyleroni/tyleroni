import './index.scss';
import sugarcube from '../../assets/images/sugarcube.png';
import nextbutton from '../../assets/images/next-button.png'
import backbutton from '../../assets/images/back-button.png'
import sugarcube1 from '../../assets/images/sugarcube1.png'
import sugarcube2 from '../../assets/images/sugarcube2.png'
import sugarcube3 from '../../assets/images/sugarcube3.png'
import sugarcube4 from '../../assets/images/sugarcube4.png'















const SugarCube = () => {
    return (
        <>
            <div className = 'sugarcube-layout'>
                <div className = 'container sugarcube-page'>
                    <div className = 'backgroundclr-mindtreasure'>
                        <h1 className = 'text-zone-h1 casestudyh'>SugarCube</h1>
                        <a href = '/quickfit/case/study' className = 'button backbutton'>
                            <img src = {backbutton} alt = 'Back Button'></img>
                        </a>
                        <a href = '/sugarcube/case/study' className = 'button nextbutton'>
                            <img src = {nextbutton} alt = 'Next Button'></img>
                        </a>
                        <a href = 'figma link' target = '_blank'>
                            <img src = {sugarcube} alt = 'QuickFit Banner' className = 'mindtreasurebanner'></img>
                        </a>
                        <h1 className = 'text-zone-h1'>Overview</h1>
                        <p className = 'text-zone-p'>SugarCube was a Designathon project I completed for UCI in 2023 with two other team members, with the goal in mind of “how could we <b>foster communities</b> and celebrate <b>inclusivity among marginalized peoples?”</b> </p>
                        <p className = 'text-zone-p'>Our answer, SugarCube. Among disadvantaged communities especially, sexual health knowledge is as low as ever and with little knowledge about this can come STI’s, unwanted pregnancy, and sexual violence. SugarCube aims to target these individuals while providing sexual health knowledge as well as free contraceptives in the form of discreet “cake” boxes.</p>
                        <h1 className = 'text-zone-h1'>Problem</h1>
                        <p className = 'text-zone-p'>Marginalized people, especially economically disadvantaged are known to have <b>“low levels of sexual health knowledge”.</b> With that can come many many unwanted sexual issues and diseases. </p>
                        <p className = 'text-zone-p'>Furthermore, services like Planned Parenthood don’t provide aid without insurance which leaves anonymity out of the question. This deters a lot of younger sexually active people from seeking reproductive health care products, leaving them even more at risk. </p>
                        <p className = 'text-zone-p'>Our services at SugarCube not only would provide, <b>free sexual health education</b> and <b>reproductive care products,</b> but also provide contraceptives in a <b>discreet packaging</b> to ensure our users business, stays their business. </p>
                        <h1 className = 'text-zone-h1'>Research</h1>
                        <a href = 'https://drive.google.com/drive/folders/14_T9gW5AMfXZyabH8vCZswaf63jeY4Yk?usp=sharing' target = '_blank' className = 'link'>Link to our Research</a>
                        <p className = 'text-zone-p'>Me and my team released an online survey and received <b>263 online survey responses.</b> Of those, only <b>30 respondents didn’t have access to reproductive healthcare</b> which was a smaller turnout than expected, and the reasons we reported varied from, parents, product availability, financial issues, and location accessibility.</p>
                        <p className = 'text-zone-p'>Though we did find <b>83 of the respondents</b> have attempted to conceal their products with <b>75% of them hiding it from their parents.</b> This proved as an indicator that people could be interested in discreet packaging </p>
                        <h1 className = 'text-zone-h1'>Hi-Fi Prototype</h1>
                        <div className = 'hifi-container'>
                            <div className = 'hifi-text'>
                                <p className = 'text-zone-p'>Due to the limited availability in time given for this designathon, we made the decision to skip the low-fi prototype and move straight into the high-fi prototype as we didn’t believe we would have the time to complete both. </p>
                                <p className = 'text-zone-p'>Through our process of creating the UI we thought about our target audience and imagined what information they would need for this website. As we were providing <b>“discreet packaging”</b> we realized we would have needed an explanation of how it would be discreet in order to gain our user’s confidence. </p>
                                <p className = 'text-zone-p'>We also believed it to be important for all our users to have the knowledge on how to apply/use certain reproductive healthcare products as incorrect use could lead to a false sense of security when coming to our user’s sexual health. </p>
                            </div>
                            <div className = 'hifiimg-container'>
                                <img src = {sugarcube1} alt = 'SugarCube Example' className = 'sugarcube1img'></img>
                                <img src = {sugarcube3} alt = 'SugarCube Example' className = 'sugarcube3img'></img>

                            </div>
                        </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>
                </div>
            </div>
        </>
        )
}

export default SugarCube
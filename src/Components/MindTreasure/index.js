import './index.scss';
import background from '../../assets/images/Portfolio_Background.png';
import nextbutton from '../../assets/images/next-button.png'
import backbutton from '../../assets/images/back-button.png'
import mindTreasures from '../../assets/images/mind_treasures.png';
import alyapersona from '../../assets/images/alya-persona.png';
import lindapersona from '../../assets/images/linda-persona.png';
import oldnavbar from '../../assets/images/oldnavbar.png'
import newnavbar from '../../assets/images/newnavbar.png'
import contactpage from '../../assets/images/contact_page.png'
import lofihomepage from '../../assets/images/lofi_homepage.png'


const MindTreasure = () => {
    return (
    <>
        <div className = 'mindtreasure-layout'>
            <div className = 'container mindtreasure-page'>
                <div className = 'backgroundclr-mindtreasure'>
                    <h1 className = 'text-zone-h1 casestudyh'>Mind Treasures</h1>
                    <a href = '/projects' className = 'button backbutton'>
                        <img src = {backbutton} alt = 'Back Button'></img>
                    </a>
                    <a href = '/impromptu/case/study' className = 'button nextbutton'>
                        <img src = {nextbutton} alt = 'Next Button'></img>
                    </a>
                    <a href = 'https://www.mindtreasures.org/' target = '_blank'>
                        <img src = {mindTreasures} alt = 'Mind Treasures Banner' className = 'mindtreasurebanner'></img>
                    </a>
                    <h1 className = 'text-zone-h1'>Overview</h1>
                    <h2 className = 'text-zone-h2'>How might we convey the Mind Treasure’s mission to visitors effectively in order to increase interest and engagement with the program?</h2>
                    <p className = 'text-zone-p'>At Mind Treasures, I worked with our cross functional team in order to revamp their entire website, with the goal of increasing engagement within the financial literacy program offered. Works include information architecture adjustments, content audit, and optimizing the layout. Furthermore, I translated the Figma prototypes into the website that they have today utilizing HTML/CSS/JS. </p>
                    <h1 className = 'text-zone-h1'>User Research</h1>
                    <p className = 'text-zone-p'>As apart of our User Research, we interviewed our stakeholder in order to identify the website's pain points through their own customer interactions. Google Analytics also provided us with information about user engagement and overall website performance. In addition, we analyzed other successful non-profit's websites and interviewed our mentor to help gain an understanding of a format that increases user engagement</p>
                    <p className = 'text-zone-p'>Furthermore, we identified our main audience through our personas, Alya and Linda, who helped us understand the audience and the different goals they had when visiting the site.</p>
                    
                    <div className = 'persona'>
                        <img src = {alyapersona} alt = 'Alya Persona' className=  'personaimg alya-persona'></img>
                        <img src = {lindapersona} alt = 'Linda Persona' className = 'personaimg linda-persona'></img>
                    </div>
                    <h2 className = 'text-zone-h2'>Main Insights</h2>
                    <p className = 'text-zone-p'>Through our User Research, we found that visitors often found the homepage unclear in what the organization provides and how people can get involved either as apart of the program or as a volunteer. Other users noted that there was a lack of clear "call to action" and the process of getting involved, the users found quite ambiguous. Other issues mentioned related to the overall layout and content of the website.</p>
                    <h1 className = 'text-zone-h1'>Information Architecture</h1>
                    <div className = 'information-architecture'>
                        <div className = 'oldnavbar'>
                            <p className = 'text-zone-p'>The old navigation bar conatined many pages, which was confusing the visitors because it was not clear what the goal of the website was. It was difficult to find desired information due to issues such as having two contact page buttons. </p>
                            <img src = {oldnavbar} alt = 'Old Navigation Bar Architecture' className = 'mindtreasure-info-architecture-img oldnavbarimg'></img>
                        </div>
                        <div className = 'newnavbar'>
                            <p className = 'text-zone-p'>The updated navigation bar simplified the content for visitors and the information is streamlined so that it is more clear that the main calls to action of the website are to download content and contact the organization. </p>
                            <img src = {newnavbar} alt = 'New Navigation Bar Architecture' className = 'mindtreasure-info-architecture-img newnavbarimg'></img>
                        </div>
                    </div>
                    <h1 className = 'text-zone-h1'>Content Audit</h1>
                    <p className = 'text-zone-p'>Before starting on the lo-fis, our team conducted a content audit. We found that the current Mind Treasures does not directly state their mission and impact within their written content; this was found in the “Who We Are” page instead of their home page. Additionally, there was a page full of quotations from spiritual texts; while this was informative for those who are interested, the purpose the page served was unclear to us. To optimize the layout of each page, we had to decide what should go on each page, and rewrite the content that clearly conveys Mind Treasure’s mission of accessible financial literacy education, and what it entails. </p>
                    <h1 className = 'text-zone-h1'>Lo-Fi Prototype</h1>
                    <p className = 'text-zone-p'>With our first iterations, we saw that the homepage has the most influence in whether users would look at and download the curriculum or just immediately exit the website, which about 80% of users do according to Google Analytics. With that in mind, we mainly focused on enhancing the homepage and revamping the contact/download page to increase conversions.</p>
                    <p className = 'text-zone-p'>One of the main goals of our new design was to optimize the layout in which we would improve text placement resulting in better readability as well as removing a lot of the pre existing white space in the original website.</p>
                    <div className = 'lofi'>
                        <img src = {lofihomepage} alt = 'Lo-Fi Homepage' className = 'lofiimg lofihomepageimg'></img>
                        
                    </div>







                </div>
            </div>
        </div>
    </>
    )
}
//<img src = {contactpage} alt = 'Contact Page' className = 'lofiimg contactpageimg'></img>
export default MindTreasure
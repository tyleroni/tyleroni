import './index.scss';
import impromptu from '../../assets/images/impromptu.png';
import nextbutton from '../../assets/images/next-button.png'
import backbutton from '../../assets/images/back-button.png'
import problemimg from '../../assets/images/problem_img.png'
import prototype1 from '../../assets/images/prototype_1.png'
import prototype2 from '../../assets/images/prototype_2.png'
import prototype3 from '../../assets/images/prototype_3.png'
import doodles from '../../assets/images/doodles.png'



const Impromptu = () => {
    return (
    <>
        <div className = 'impromptu-layout'>
            <div className = 'container impromptu-page'>
                <div className = 'backgroundclr-mindtreasure'>
                <h1 className = 'text-zone-h1 casestudyh'>Impromptu</h1>
                <a href = '/mindtreasure/case/study' className = 'button backbutton'>
                    <img src = {backbutton} alt = 'Back Button'></img>
                </a>
                <a href = '/quickfit/case/study' className = 'button nextbutton'>
                    <img src = {nextbutton} alt = 'Next Button'></img>
                </a>
                <a href = 'figma link' target = '_blank'>
                    <img src = {impromptu} alt = 'Mind Treasures Banner' className = 'mindtreasurebanner'></img>
                </a>
                <h1 className = 'text-zone-h1'>Overview</h1>
                <p className = 'text-zone-p'>Our goal with Impromptu was to improve BeReal's user experience through novel interactions while also keeping emphasis on the importance of authenticity among users. </p>
                <p className = 'text-zone-p'>In order to encourage more expressive social interaction among users, we implemented ways to seek out different aspects of life through prompts. Through user testing and feedback we saw that it provided little variability for what could be displayed, so we developed the “doodle” interaction. </p>
                
                <div className = 'problem'>
                    <div className = 'problem-text'>
                        <h1 className = 'text-zone-h1'>Problem</h1>
                        <p className = 'text-zone-p'>The BeReal app currently lacks authenticity as the timer feature often comes when users are simply doing “nothing” resulting in users to post at a later convenience, defeating the purpose of “being real”.</p>
                        <p className = 'text-zone-p'>Furthermore, the addition of “doodles” provides a creative, niche experience which allows our users to express themselves and connect with each other on a deeper level. </p>
                        <h1 className = 'text-zone-h1'>Research</h1>
                        <a href = 'https://drive.google.com/drive/u/2/folders/1J9thxsDSZxTUTCImKkxDVFDYpdzn8uFf' target = '_blank' className = 'link'>Link to our Research</a>
                        <p className = 'text-zone-p'>Me and my team conducted seven 1-on-1 interviews and received 35 online survey responses in which stakeholders and potential users expressed their opinions about our idea and their thoughts on BeReal. </p>
                        <p className = 'text-zone-p'>With Our Demographic target towards college students (ages 18-23), an overwhelming majority of surveyors 25 out of 29 (86%) who utilize BeReal, showed interest in accomplishing our daily photo objectives. Our interviewees and survey respondents were especially open to seeing novel features that promoted their “unfiltered” selves. This gave us confidence that our new features could succeed in encouraging authenticity as well as enhancing user experience.</p>
                    </div>
                    <div className = 'problem-container'>
                        <img src = {problemimg} alt = 'Camera Example' className = 'problem-img'></img>
                    </div>
                    
                </div>
                <div className = 'prototyping'>
                    <h1 className = 'text-zone-h1'>Prototyping</h1>
                    <p className = 'text-zone-p'>With our first prototyping session, we were primarily concerned with the logistics of finding an existing platform that could help our vision come to life. With the limited availability of features Figma has to offer, we decided that our best bet was through a low-functionality Figma Prototype and Google Photos. </p>
                    <div className = 'prototype-img-container'>
                        <img src = {prototype1} alt = 'Prototype Example' className = 'prototype-img'></img>
                        <img src = {prototype2} alt = 'Prototype Example' className = 'prototype-img'></img>
                        <img src = {prototype2} alt = 'Prototype Example' className = 'prototype-img prototype-img1'></img>
                    </div>
                    <p className = 'text-zone-p'>We set up a two-day scenario in which a new day began and users received an alert from Impromptu about their prompt for the day. Typically seven hours is given to fulfill the prompt, but for the sake of time, our user spent 10 minutes on their picture taking adventures. </p>
                    <p className = 'text-zone-p'>In order to simulate a communal viewing experience, the photo submissions were uploaded to google photos where users were able to comment on google photos and react via sticky notes corresponding to different emojis. </p>
                    <h2 className = 'text-zone-h2'>Findings</h2>
                    <p className = 'text-zone-p'>The limited time and physical constraints of that in a classroom and our immediate surrounding led to a noticeable lack of variety and spontaneity of every day life in the image submissions that were provided. </p>
                    <p className = 'text-zone-p'>This highlighted both the importance of providing users with a variety of stimuli to interact with during the prototyping session and also the efficacy of the prompt itself. </p>
                    <p className = 'text-zone-p'>Moreover, we found that comment on each other’s work required more effort than simply using post-it reactions. As a result we noticed fewer comments were made overall. This indicated that the use of “one-click” interactions, in this situation, as a feedback mechanism may be more effective in encouraging user engagement and interaction. </p>
                </div>
                <div className = 'final-product-container'>
                    <h1 className = 'text-zone-h1'>The Final Product</h1>
                    <div className = 'doodles-container'>
                        <img src = {doodles} alt = 'Doodles Example' className = 'doodles-img'></img>
                        <div className = 'doodles-text'>
                            <p className = 'text-zone-p'>The biggest changes arriving with our final product is the addition of our new social interaction feature: “Doodles”. This feature would allow users to quickly doodle on their friends’ posts, giving users a unique and fun form of engagement with their friends. </p>
                            <p className = 'text-zone-p'>Users will also be able to look through a gallery of the doodles their friends have created for their post, thus creating a richer, more vivid collection of memories. In addition, we’ve also added a camera UI to simulate the experience of using Impromptu to capture and submit images, as well as an opening screen that presents you with the day’s prompt in the form of a polaroid photo being printed (to stay in theme with our new Polaroid-esque concept). </p>
                        </div>
                    </div>
                
                
                
                
                
                
                
                </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Impromptu
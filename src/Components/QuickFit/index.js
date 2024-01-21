import './index.scss';
import quickfit from '../../assets/images/quickfit.png';
import nextbutton from '../../assets/images/next-button.png'
import backbutton from '../../assets/images/back-button.png'
import cardboardkioskclosed from '../../assets/images/cardboardkioskclosed.png'
import cardboardkioskopen from '../../assets/images/cardboardkioskopen.png'
import finishedkiosk from '../../assets/images/finishedkiosk.png'
import lofiprototype1 from '../../assets/images/lofiprototype1.mp4'
import lofiprototype2 from '../../assets/images/lofiprototype2.mp4'
import hifiprototype1 from '../../assets/images/hifiprototype1.png'
import hifiprototype2 from '../../assets/images/hifiprototype2.png'
import usertestingvideo from '../../assets/images/usertesting_video.mp4'
import usertestingchanges from '../../assets/images/usertestingchanges.png'







const QuickFit = () => {
    return (
        <>
            <div className = 'quickfit-layout'>
                <div className = 'container quickfit-page'>
                    <div className = 'backgroundclr-mindtreasure'>
                    <h1 className = 'text-zone-h1 casestudyh'>QuickFit</h1>
                    <a href = '/impromptu/case/study' className = 'button backbutton'>
                        <img src = {backbutton} alt = 'Back Button'></img>
                    </a>
                    <a href = '/sugarcube/case/study' className = 'button nextbutton'>
                        <img src = {nextbutton} alt = 'Next Button'></img>
                    </a>
                    <a href = 'figma link' target = '_blank'>
                        <img src = {quickfit} alt = 'QuickFit Banner' className = 'mindtreasurebanner'></img>
                    </a>
                    <h1 className = 'text-zone-h1'>Overview</h1>
                    <p className = 'text-zone-p'>QuickFit is a gym kiosk program that provides both recommended and personalized plans for experience levels of all kinds. By generating customized workouts tailored to each users needs and our user friendly interface, we make it easy to for individuals to take control of their health</p>
                    <p className = 'text-zone-p'>Our goal was to create a welcoming gym environment and empower everyone as one of the main reasons stopping people from working out is fear of judgement of doing the wrong thing. This presents even more of an issue for inexperienced introverts as fear of asking for help could prevent users from reaching their fitness goals. </p>
                    <h1 className = 'text-zone-h1'>Problem</h1>
                    <p className = 'text-zone-p'>About 50% of all people who don’t go to the gym, say they don’t because they are “scared” to. Gym anxiety is a real thing and is stopping a lot of people from achieving their fitness goals and sometimes bar individuals from even trying in the first place.</p>
                    <p className = 'text-zone-p'>QuickFit provides a safe and “non judgmental” way to learn how to workout properly and safely without spending hundreds of dollars on a personal trainer. Users would no longer have the need to feel any sort of judgement as our interface not only provides a written description of the exercise, but also a video demonstration of how the exercise should be properly performed. </p>
                    <h1 className = 'text-zone-h1'>Research</h1>
                    <a href = 'https://drive.google.com/drive/folders/1dBwLdBp9qQhVWheYZVbIxEDSY15pwDnX?usp=sharing' target = '_blank' className = 'link'>Link to our Research</a>
                    <p className = 'text-zone-p'>Our team conducted one <b>1-on-1 interviews</b> and received <b>10 online survey responses</b> in which <b>60% of participants</b> mentioned that they do not go to the gym anymore due to “laziness” or “low energy” Another <b>60% of respondents</b> mentioned that <b>it does feel like a struggle to reach out for help.</b> This indicates that if people were to have problems performing an exercise correctly, the majority of users wouldn’t be able to reach out and might not be able to complete that exercise as a result. This gave us confidence that users would be open to interacting with our kiosk. </p>
                    <h1 className = 'text-zone-h1'>Building Physical Kiosk</h1>
                    <p className = 'text-zone-p'>The physical prototype took a little bit of time to get correct as we struggled with material choice the most. We were set on our kiosk shape and design just as we sketched it but the material proved difficult as the wood warped a lot and we decided to make a change to cardboard like material. </p>
                    <div className = 'kiosk-container'>
                        <img src = {cardboardkioskclosed} alt = 'Physical Kiosk Build Closed' className = 'kiosk-img kiosk-closed-img'></img>
                        <img src = {cardboardkioskopen} alt = 'Physical Kiosk Build Open' className = 'kiosk-img kiosk-open-img'></img>
                    </div>
                    <p className = 'text-zone-p'>At first, the material worked great but we soon came across another issue with the longevity of the material as constant weight upon cardboard doesn’t last long. Thinking about our mistake, we decided to try wood one more time and flattening and sanding the wood as much as possible before construction. </p>
                    <p className = 'text-zone-p'>Through this we were able to <b>minimize our issue</b> and successfully put together our Kiosk. All the was left to do was to paint and put our logo over it and we could slide our prototype interface right in. </p>
                    <div className = 'finishedkiosk-container'>
                        <img src = {finishedkiosk} alt = "Finished Kiosk" className = "finished-kiosk"></img>
                    </div>
                    <h1 className = 'text-zone-h1'>Lo-Fi Prototype</h1>
                    <h2 className = 'text-zone-h2'>First Lo-Fi Prototype</h2>
                    <p className = 'text-zone-p'>Our Low Fidelity Prototype first brought us through three pages asking introductory questions like experience level, fitness goal, and workout type. We liked the idea of the questions because it would allow us to best personalize a plan, but after receiving <b>user feedback,</b> we saw that it could come off as too much for the user so we planned on switching that. It also left us no room for a certain group of our <b>target audience,</b> users who don’t really know specifically what they want. </p>
                    <p className = 'text-zone-p'>We also provided an area to specifically <b>demonstrate the exercise</b> as many users are visual learners and can’t go by with the “crude” drawings on the machines</p>
                    <div className = 'lofi-video-demo-container'>
                        <video width="600" height="auto" controls className = 'lofivid'>
                            <source src= {lofiprototype1} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h2 className = 'text-zone-h2'>Second Lo-Fi Prototype</h2>
                    <p className = 'text-zone-p'>Our second low fidelity prototype introduced minimal changes with a more in depth look on how a real experience with QuickFit Kiosk is. Through <b>feedback among peers,</b> we realized it would be extremely inconvenient to have to remember and record all of the demonstration’s so we thought it would be beneficial to add a feature where users could have their curated plans on their phone. </p>
                    <p className = 'text-zone-p'>We also introduced a new feature where users would be able to find ready made workout plans tailored to their experience level and muscle groups. The more advanced a user chooses, the more difficult the workouts get. This allows us to <b>accommodate users of all experience levels and goals,</b> and not just reach those who don’t know how to workout. In case a user is not able to find what they were looking for, calling an assistant would be available at all times.</p>
                    <div className = 'lofi-video-demo-container'>
                        <video width="600" height="auto" controls className = 'lofivid'>
                            <source src= {lofiprototype2} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h1 className = 'text-zone-h1'>Hi-Fi Prototype</h1>
                    <div className = 'hifi-prototype-container'>
                        <p className = 'text-zone-p'>With our High Fidelity Prototype came with a <b>new method of interacting</b> with the kiosk. After listening to users after critique, we saw that users were unsure of what they wanted and often times didn’t really know which workouts they wanted. This made us incorporate the recommended exercises tab which now allowed users to select a specific muscle group on screen, and options for workouts targeting that specific muscle group. </p>
                        <img src = {hifiprototype1} alt = 'High Fidelity Prototype' className = 'hifiprototype1'></img>
                    </div>
                    <p className = 'text-zone-p'>We made absolutely sure that there would be <b>“easily accessible”</b> information and demonstrations about the exercises and that they would be customizable for all levels of gym goers. </p>
                    <div className = 'hifiprototype2-container'>
                        <img src = {hifiprototype2} alt = 'High Fidelity Prototype' className = 'hifiprototype2'></img>
                    </div>
                    <h1 className = 'text-zone-h1'>User Testing</h1>
                    <div className = 'user-testing-container'>
                        <div className = 'user-testing-text'>
                            <h2 className = 'text-zone-h2'>Key Insights from User Testing</h2>
                            <ol type = '1' className = 'key-insights text-zone-p'>
                                <li>Many users felt interface was <b>“Easy to navigate”</b> </li>
                                <li>The aesthetics and User Interface were impressive to most, especially the muscle group feature. </li>
                                <li>Users believed kiosk to be very <b>helpful to beginners</b> and those just starting out but not for more experienced gym goers.</li>
                            </ol>
                        </div>
                        <div className = 'user-testing-video-container'>
                            <video width="600" height="auto" controls className = 'lofivid'>
                                <source src= {usertestingvideo} type="video/mp4"></source>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <h2 className = 'text-zone-h2'>UI Changes After User Testing</h2>
                    <div className = 'user-testing-changes-container'>
                        <img src = {usertestingchanges} alt = 'UI Changes After User Testing Changes' className = 'usertestingchangesimg'></img>
                    </div>
                    </div>
                </div>
            </div>
        </>
        )
}

export default QuickFit
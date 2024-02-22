import React from 'react'
import "./HomeSection.css"
import Typewriter from 'typewriter-effect';
import MyResume from "../Navbar/MyResume.pdf"

function HomeSection() {
    const downloadHandle = () => {
        const link = document.createElement("a");
        link.download = "Mridulkatara_Resume.pdf";
        link.href = MyResume;
        link.setAttribute("class", "resume-link-2")
        link.click();

        window.open(
            "https://drive.google.com/file/d/1uIAdsHG1859MAC2gv-GUV0wLhigmHabQ/view?usp=sharing",
            "_blank"
        );
    };

    const githubHandle = () => {
        window.open(
            "https://github.com/MridulKatara",
            "_blank"
        );
    };
    return (
        <div id='home'>
            <div id='left_home'>
                <div>
                    <h1>Hi, I am</h1>
                    <h1 id="user-detail-name">Mridul Katara</h1>
                    {/* <h3>I am a Full Stack Web Developer</h3> */}
                    <h3>
                        
                        <span>
                            <Typewriter
                                options={{
                                    strings: "I am a Full Stack Web Developer",
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h3>
                    <p> A motivated and versatile individual, passionate about building digital products that improve everyday experience for people. I love to work on exciting projects that test what I've learnt. You can reach me at <a href="#contact" className='contactMe'>Contact Me</a></p>
                    <div className='home_button'>
                        <button id="resume-button-2"
                            onClick={downloadHandle}>
                            Resume
                        </button>
                        <button onClick={githubHandle} >
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
            <div id='right_home' >
            <img src='./Images/hero.jpg' alt="" className="home-img" />
            </div>
        </div>
    )
}

export default HomeSection
import React from 'react'
import "./AboutSection.css"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


function AboutSection() {
    return (
        <div id='about' className='about section'>
            <h1>About Me</h1>
            <p id="user-detail-intro">
                A Full Stack Web Developer with expertise in <b>MERN</b> Stack. I've completed a comprehensive <b>Full Stack Web Development Course</b> at Masai and have solved 650+ DSA problems. My tech toolkit includes <b>React, Redux, JAVA, Node, Express, Mongoose, MongoDB, HTML, CSS, JavaScript, and Git.</b> I'm passionate about creating efficient, elegant code and have experience in both front-end and back-end development. I thrive on problem-solving and love collaborating with teams to build innovative solutions. Let's connect and turn ideas into reality through technology. You can reach me at <a href="#contact" className='contactMe'>Contact Me</a>.
            </p>
            { <div className='education_card'>
                <h2>Education</h2>
                <div>
                    <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 0.05,
                            },
                        }}
                    >
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>Full Stack Web Development</h2>
                                    <p>Masai School, Banglore</p>
                                    <p>March 2023 - Present | Online</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="secondary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>MBA - Information Technology</h2>
                                    <p>GLA University, Mathura</p>
                                    <p>July 2023 - Present | Online</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>B.Sc - Maths, Physics and Chemistry</h2>
                                    <p>Dr. Bheamrao Abbedkar University, Agra</p>
                                    <p>July 2018 - Aug 2022</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="secondary" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>Intermediate (12th)</h2>
                                    <p>St. Paul's Senior Secondary School, Mathura</p>
                                    <p>March 2017 - May 2018</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div> }
        </div>
    )
}

export default AboutSection
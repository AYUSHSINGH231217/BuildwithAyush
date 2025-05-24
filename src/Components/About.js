import React from "react";
import Skills from "./Skills"; // Assuming you have a Skills component

const About = () => {
    return (
        <>
            <div className="AboutPage">
                <div className='AboutText'>
                    <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
                    <p>
                        Hi, my name is <b>Ayush Singh</b> and I am from Pune, India. <br /><br />
                        I'm a <b>MERN Stack Developer</b>, currently learning <b>backend concepts</b> to strengthen my full-stack development skills.<br /><br />
                        I’m currently working at <b>Accenture Solutions Pvt. Ltd.</b> as a <b>Packaged App Development Associate</b> since <b>February 2024</b>.<br /><br />
                        Previously, I worked as a <b>Software Engineer Trainee</b> in the <b>PeopleSoft Campus Solution domain</b> at <b>SRDT Pvt. Ltd., Lucknow</b>.<br /><br />
                        Before that, I completed a <b>2-month internship</b> as a <b>Web Developer</b> at <b>WebPeckers, Prayagraj</b>.<br /><br />
                        I enjoy building original projects with creative and user-friendly designs — check out some of my work in the projects section.<br /><br />
                        I am <b>open</b> to collaborations or opportunities where I can contribute and grow. Feel free to connect with me — links are in the footer.<br /><br />
                    </p>
                </div>
            </div>

            <h1 className='SkillsHeading'>Professional Skillset</h1>
            <div className='skills'>
                <Skills skill='React' />
                <Skills skill='Node' />
                <Skills skill='Express' />
                <Skills skill='MongoDb' />
                <Skills skill='Git' />
                <Skills skill='Github' />
                <Skills skill='Javascript' />
                <Skills skill='C++' />
                <Skills skill='Postman' />
                <Skills skill='Figma' />
                <Skills skill='Vercel' />
                <Skills skill='Npm' />
                <Skills skill='Bootstrap' />
            </div>
        </>
    );
};

export default About;

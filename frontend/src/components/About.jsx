import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import React from 'react';
import '../components/About.css'

const About = () => {

    return (
        <div className='about'>

                <h3>About Us</h3>
            <div className="aboutPage">
                <div className="aboutComp1">
                    <div className="content1">
                        Lorem Ipsum
                    </div>

                    <div className="content2">
                        <img src={img1} width="300vh" style={{ borderRadius: "3vh" }} alt="" srcset="" />
                    </div>

                </div >

                <div className="aboutComp2">
                    <img src={img2} width="300vh" style={{ borderRadius: "3vh" }} alt="" />
                </div>

                <div className="aboutComp3">
                    <h4 style={{color: '#39cb8e'}}>Learn More About Us</h4>
                    <p  style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam vitae doloremque! Est porro, blanditiis facere quas dolores veniam, recusandae accusamus ipsa ipsam officia distinctio nulla voluptate ex saepe aliquid itaque rerum cum? Iusto, nesciunt similique! Possimus saepe nisi quis.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
import React, {Component} from 'react';
import './skills.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import Slider from 'react-slick';

// ICONS 

import htmlIcon from '../../images-video/icons/html5.png';
import cssIcon from '../../images-video/icons/css3.png';
import javaScriptIcon from '../../images-video/icons/javascript.png';
import reactIcon from '../../images-video/icons/reactjs (1).png';
import reduxIcon from '../../images-video/icons/Redux.png';
import nodeIcon from '../../images-video/icons/nodejs.png';
import expressIcon from '../../images-video/icons/expressjs.png';
import postgresIcon from '../../images-video/icons/postgres.png';
import gitIcon from '../../images-video/icons/git.png';
import gitHubIcon from '../../images-video/icons/githubIcon1.png';
import sassIcon from '../../images-video/icons/scss.png';
import bootstrapIcon from '../../images-video/icons/bootstrap.png';
import stripeIcon from '../../images-video/icons/stripe.png';
import auth0Icon from '../../images-video/icons/auth0.png';
import angularIcon from '../../images-video/icons/angularjs.png';


class Skills extends Component {
    
    render() {

        const settings = {
            pauseOnHover: true,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0px",
            autoplay: true,
            autoplaySpeed: 1500,
            fade: false,
            draggable: true,
            swipe: true,
          };

        return(
        <div>
            <ScrollableAnchor id={'skills'}>
                <div className="skillsContainer">
                    <div className="sliderTitle">Skills</div>
                        <div className="sliderSub">My Knowledge in Development</div>
                            <div className="container">
                            <Slider {...settings}>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="redux" src={reduxIcon} alt="Redux Icon"/><hr/>Redux
                                        </div>
                                    </div>
                                </div> 
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="node" src={nodeIcon} alt="Node Icon"/><hr/>Node <span>JS</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="express" src={expressIcon} alt="Express Icon"/><hr/>Express
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="postgres" src={postgresIcon} alt="Postgres Icon"/><hr/>Postgres<span>SQL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="git" src={gitIcon} alt="Git Icon"/><hr/>Git
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="github" src={gitHubIcon} alt="GitHub Icon"/><hr/>GitHub
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="sass" src={sassIcon} alt="Sass Icon"/><hr/>Sass / Scss
                                        </div>
                                    </div>
                                </div> 
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="bootstrap" src={bootstrapIcon} alt="Bootstrap Icon"/><hr/>Bootstrap
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="stripe" src={stripeIcon} alt="Stripe Icon"/><hr/>Stripe
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="auth0" src={auth0Icon} alt="Auth0 Icon"/><hr/>Auth <span>0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="angular" src={angularIcon} alt="Angular Icon"/><hr/>Angular <span>JS</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="html" src={htmlIcon} alt="HTML5 Icon"/><hr/>html <span>5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="css" src={cssIcon} alt="CSS3 Icon"/><hr/>css <span>3</span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="js" src={javaScriptIcon} alt="JavaScript Icon"/><hr/>JavaScript
                                        </div>
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="icons" id="icon">
                                        <div className="iconDes" id="iconhov">
                                            <img className="react" src={reactIcon} alt="React Icon"/><hr/>React <span>JS</span>
                                        </div>
                                    </div>
                                </div>                              
                            </Slider>
                            </div>
                </div>
            </ScrollableAnchor>
        </div>
        )
    }
}

export default Skills; 

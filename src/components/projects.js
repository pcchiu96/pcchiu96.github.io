import React from "react";
import "../css/Projects.css";

export default function Projects() {
    return (
        <div className='projects-background'>
            <div className='projects-wrapper'>
                <div className='projects'>
                    <section>
                        <i className='project-icon fa fa-gamepad' aria-hidden='true'></i>
                        <h3>Discord Werewolf Bot</h3>
                        <a href='https://github.com/pcchiu96/Werewolf-Bot'>
                            <button className='b-view'>View Code</button>
                        </a>
                        <p>A discord werewolf game that's similar to mafia but with a fun twist.</p>
                        <p class='language-icons'>
                            <i class='devicon-nodejs-plain colored' title='NodeJS'></i>
                            <i class='devicon-javascript-plain colored' title='JavaScript'></i>
                        </p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-circle-o' aria-hidden='true'></i>
                        <h3>Connect 4</h3>
                        <a href='https://pcchiu96.github.io/connect-4'>
                            <button className='b-view'>View Project</button>
                        </a>
                        <a href='https://github.com/pcchiu96/connect-4'>
                            <button className='b-view'>View Code</button>
                        </a>
                        <p>A 2-players board game that I built to practice coding in ReactJS.</p>
                        <p class='language-icons'>
                            <i class='devicon-react-original colored' title='React'></i>
                            <i class='devicon-javascript-plain colored' title='JavaScript'></i>
                            <i class='devicon-html5-plain colored' title='HTML5'></i>
                            <i class='devicon-css3-plain colored' title='CSS3'></i>
                        </p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-unlock-alt' aria-hidden='true'></i>
                        <h3>Unlock Code</h3>
                        <a href='https://pcchiu96.github.io/unlock-code'>
                            <button className='b-view'>View Project</button>
                        </a>
                        <a href='https://github.com/pcchiu96/unlock-code'>
                            <button className='b-view'>View Code</button>
                        </a>
                        <p>This is just a fun little project I made to see if I can replicate what Snowden said about passwords under 8 characters can be solved under a second.</p>
                        <p class='language-icons'>
                            <i class='devicon-javascript-plain colored' title='JavaScript'></i>
                            <i class='devicon-html5-plain colored' title='HTML5'></i>
                            <i class='devicon-css3-plain colored' title='CSS3'></i>
                        </p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-car' aria-hidden='true'></i>
                        <h3>Tiger Applications LLC</h3>
                        <a href='https://www.tigerapplicationsllc.com/index.php?page=index'>
                            <button className='b-view'>View Project</button>
                        </a>
                        {/* <a href=''>
                            <button className='b-view' disabled>
                                View Code
                            </button>
                        </a> */}
                        <p>A work in progress website I designed and built for Tiger Applications LLC.</p>
                        <p class='language-icons'>
                            <i class='devicon-php-plain colored' title='PHP'></i>
                            <i class='devicon-javascript-plain colored' title='JavaScript'></i>
                            <i class='devicon-html5-plain colored' title='HTML5'></i>
                            <i class='devicon-less-plain-wordmark colored' title='LESS'></i>
                            <i class='devicon-css3-plain colored' title='CSS3'></i>
                        </p>
                    </section>

                    <section>
                        <i className='project-icon fa fa-wrench' aria-hidden='true'></i>
                        <h3>StrataPLBm</h3>
                        <p>A client-server application that provide simple management of condo/apartment requests from residents.</p>
                        <p class='language-icons'>
                            <i class='devicon-php-plain colored' title='PHP'></i>
                            <i class='devicon-javascript-plain colored' title='JavaScript'></i>
                            <i class='devicon-html5-plain colored' title='HTML5'></i>
                            <i class='devicon-less-plain-wordmark colored' title='LESS'></i>
                            <i class='devicon-css3-plain colored' title='CSS3'></i>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

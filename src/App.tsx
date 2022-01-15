import React from 'react';
import EmailButton from "./components/EmailButton";
import {ProjectCard} from "./components/ProjectCard";

function App() {
    return (

        <div>

            <EmailButton/>

            <div style={{
                background: '#f7f7f7',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{
                    marginTop: '20vh',
                    marginLeft: '10vw',
                }}>
                    <div style={{
                        color: '#1e1e23',
                        fontSize: 30,
                    }}>
                        <p>Fullstack Developer</p>
                        <p>React, Flutter, Firebase</p>
                    </div>

                </div>


                <div style={{
                    marginTop: '20vh',
                    marginLeft: '10vw',
                    display: 'flex'
                }}>

                    <ProjectCard
                        project={{
                            title: 'City Surfing',
                            company: 'Michael Guldborg',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/citysurfing'
                        }}
                    />
                    <ProjectCard
                        project={{
                            title: 'Achivement',
                            company: 'Michael Guldborg',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/achivement'
                        }}
                    />
                    <ProjectCard
                        project={{
                            title: 'Diti',
                            company: 'InnoSocial ApS',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/diti'
                        }}
                    />
                    <ProjectCard
                        project={{
                            title: 'Headspace admin',
                            company: 'InnoSocial ApS',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/headspace_admin'
                        }}
                    />
                    <ProjectCard
                        project={{
                            title: 'Lead Mobile Developer',
                            company: 'MinEjendom ApS',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/minejendom'
                        }}
                    />
                </div>

            </div>

        </div>
    );
}

export default App;



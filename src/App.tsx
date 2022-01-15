import React from 'react';
import EmailButton from "./components/EmailButton";
import {ProjectCard} from "./components/ProjectCard";
import {Grid} from "@mui/material";

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
                    marginTop: '24vh',
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
                    marginTop: '24vh',
                    marginLeft: '10vw',
                    marginRight: '10vw',
                    display: 'flex'
                }}>

                    <Grid container spacing={4}>


                        {[{
                            title: 'City Surfing',
                            company: 'Michael Guldborg',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/citysurfing'
                        }, {
                            title: 'Achivement',
                            company: 'Michael Guldborg',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/achivement'
                        }, {
                            title: 'Diti',
                            company: 'InnoSocial ApS',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/diti'
                        }, {
                            title: 'Elastic Stack',
                            company: 'InnoSocial ApS',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/elastic'
                        }, {
                            title: 'Headspace admin',
                            company: 'InnoSocial ApS',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/headspace_admin'
                        }, {
                            title: 'Lead Mobile Developer',
                            company: 'MinEjendom ApS',
                            url: 'https://github.com/MichaelGuldborg/michaelguldborg.dk/tree/master/public/projects/minejendom'
                        }].map(p => {
                            return <Grid item xl={2} lg={3} md={4} xs={12}>
                                <ProjectCard key={p.title} project={p}/>
                            </Grid>
                        })}
                    </Grid>

                </div>

            </div>

        </div>
    );
}

export default App;



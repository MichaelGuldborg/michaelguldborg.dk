import {Container, Grid} from "@mui/material";
import React from "react";
import projects from "../models/projects";


export const AboutPage = () => {
    return (
        <div style={{
            minHeight: 600,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
        }}>


            <Container maxWidth={"lg"}>

                <Grid container>
                    <Grid item xs={3} style={{
                        paddingTop: 100,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                    }}>
                        <InfoBox title={'BIOGRAPHY'}>
                            {'Work for money, code for love!'}<br/>
                            {'I\'m Michael, a Frontend Developer based in Copenhagen'}
                        </InfoBox>
                        <InfoBox title={'ROLES'}>
                            {'React Web Developer'}<br/>
                            {'Flutter Mobile Developer'}<br/>
                            {'DevOps Engineer'}
                        </InfoBox>
                        <InfoBox title={'CONTACT'}>
                            {'Copenhagen, Denmark'}<br/>
                            {'mail@michaelguldborg.dk'}<br/>
                            {'+45 21 13 13 91'}
                        </InfoBox>

                    </Grid>
                    <Grid item xs={6} style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <img
                            src={'profile.jpg'}
                            style={{
                                objectFit: 'cover',
                                width: '80%',
                                height: '88%',
                                border: '1px solid #ddd',
                                borderRadius: 300,
                                padding: 32,
                            }}>
                        </img>
                    </Grid>
                    <Grid item xs={3}
                          style={{
                              paddingTop: 100,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'end',
                              textAlign: 'end',
                          }}>
                        <InfoBox title={'YEARS OF EXPERIENCE'}>
                            <span style={{
                                fontSize: 48,
                                fontWeight: 500,
                                textAlign: 'end'
                            }}>
                                {new Date().getFullYear() - 2017}
                            </span>
                        </InfoBox>
                        <InfoBox title={'PROJECTS DONE'}>
                            <span style={{
                                fontSize: 48,
                                fontWeight: 500,
                                textAlign: 'end'
                            }}>
                                {projects.length}
                            </span>
                        </InfoBox>
                        <InfoBox title={'PRODUCT USERS'}>
                            <span style={{
                                fontSize: 48,
                                fontWeight: 500,
                                textAlign: 'end'
                            }}>
                                +{1212 + 700}
                            </span>
                        </InfoBox>
                    </Grid>
                </Grid>
            </Container>


        </div>
    )
}

export const InfoBox: React.FC<{ title: string }> = ({title, children}) => {
    return (
        <div style={{
            width: '80%',
            marginBottom: 32,
        }}>
            <div style={{
                marginBottom: 32,
            }}>
                <h3 style={{
                    fontWeight: 600,
                    fontSize: 14,
                    opacity: 0.5,
                }}>{title}</h3>
            </div>
            <p style={{
                lineHeight: '1.8em',
            }}>
                {children}
            </p>

        </div>
    )
}

export default AboutPage;
import {Container, Grid, Hidden} from "@mui/material";
import React from "react";
import projects from "../models/projects";


export const AboutPage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
        }}>


            <Container maxWidth={"lg"}>

                <Grid container>
                    <Grid item xs={12} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        marginTop: 80,
                        marginBottom: 64,
                    }}>
                        <img
                            src={'profile.jpg'}
                            style={{
                                marginTop: 32,
                                objectFit: 'cover',
                                width: '50vw',
                                height: '50vw',
                                maxWidth: 320,
                                maxHeight: 320,
                                border: '1px solid #ddd',
                                borderRadius: 300,
                                padding: 16,
                            }}>
                        </img>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                        <InfoBox title={'YEARS OF EXPERIENCE'}>
                            <span style={{
                                fontSize: 48,
                                fontWeight: 500,
                                textAlign: 'end'
                            }}>
                                {new Date().getFullYear() - 2017}
                            </span>
                        </InfoBox>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <InfoBox title={'PROJECTS DONE'}>
                            <span style={{
                                fontSize: 48,
                                fontWeight: 500,
                                textAlign: 'end'
                            }}>
                                {projects.length}
                            </span>
                        </InfoBox>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
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


                    <Grid item xs={12} sm={4} md={4}>
                        <InfoBox title={'BIOGRAPHY'}>
                            {'Work for money, code for love!'}<br/>
                            {'I\'m Michael, a Frontend Developer based in Copenhagen'}
                        </InfoBox>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <InfoBox title={'ROLES'}>
                            {'React Web Developer'}<br/>
                            {'Flutter Mobile Developer'}<br/>
                            {'DevOps Engineer'}
                        </InfoBox>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <InfoBox title={'CONTACT'}>
                            {'Copenhagen, Denmark'}<br/>
                            {'mail@michaelguldborg.dk'}<br/>
                            {'+45 21 13 13 91'}
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
            marginBottom: 32,
            textAlign: 'center'
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
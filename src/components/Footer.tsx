import React from "react";
import {Container, Grid} from "@mui/material";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";


export const Footer: React.FC = () => {
    return (
        <footer style={{
            background: 'rgb(44, 39, 60)',
            color:'white',
            paddingTop: 24,
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 40,
        }}>
            <Container maxWidth={"lg"}>
                <Grid container>
                    <Grid item xs={12}>
                        <h2 style={{
                            fontWeight: 400,
                            fontSize: 28,
                        }}>
                            Michael Kaaberbøl Guldborg
                        </h2>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <span style={{fontSize: 14}}>
                            © {new Date().getFullYear()} MKG Software ApS
                            </span>
                            <br/>
                            <span style={{fontSize: 12, opacity: 0.8}}>
                            CVR: 39800217
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}>
                            <div style={{marginRight: 16}}>
                                <a href="https://dk.linkedin.com/in/michael-guldborg" target='_blank' rel='noreferrer'>
                                    <LinkedinFillIcon color={'white'}/>
                                </a>
                            </div>
                            <div style={{marginRight: 16}}>
                                <a href="https://github.com/MichaelGuldborg" target='_blank' rel='noreferrer'>
                                    <GithubFillIcon color={'white'}/>
                                </a>
                            </div>
                            <div>
                                <a href="mailto:mail@michaelguldborg.dk">
                                    <MailFillIcon color={'white'}/>
                                </a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;
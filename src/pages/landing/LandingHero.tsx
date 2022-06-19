import React from "react";
import {Container, Grid} from "@mui/material";
import {ContactButton} from "../../components/ContactButton";
import {theme} from "../../constants/theme";


export const LandingHero = () => {
    return (
        <div style={{
            height: 600,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme.colors.offWhite,
        }}>
            <Container maxWidth={"lg"} style={{
                padding: 24,
            }}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <h1 style={{fontSize: 48, fontWeight: 400}}>
                            {'Creating Beautiful Apps with '}
                            <span style={{color: theme.colors.primary}}>
                            {'Simple Code'}
                            </span>
                        </h1>
                        <p style={{maxWidth: 450, fontSize: 17, lineHeight: 1.5}}>
                            {'A passion for frontend development and DevOps engineering. ' +
                                'Creating user friendly interfaces with scalable pipelines to continuously deliver value to users.'}
                        </p>
                        <div style={{display: 'flex', marginTop: 32}}>
                            <ContactButton/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}/>
                </Grid>
            </Container>
        </div>
    )
}

export default LandingHero;
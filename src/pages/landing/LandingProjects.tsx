import {Container, Grid} from "@mui/material";
import ProjectCard from "./ProjectCard";
import React from "react";
import projects from "../../models/projects";


export const LandingProjects = () => {
    return (

        <Container maxWidth={"lg"} style={{
            marginTop: 48,
            marginBottom: 32* 3,
        }}>
            <h2 style={{
                fontSize: 32,
                fontWeight: 400,
                marginBottom: 32,
            }}>
                Projects
            </h2>
            <Grid container spacing={6}>
                {projects.map(p => {
                    return <Grid item xl={3} lg={3} md={4} xs={12}>
                        <ProjectCard key={p.name} project={p}/>
                    </Grid>
                })}
            </Grid>
        </Container>
    )
}

export default LandingProjects;
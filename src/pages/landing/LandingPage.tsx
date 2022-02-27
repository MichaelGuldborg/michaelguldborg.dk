import React from "react";
import LandingHero from "./LandingHero";
import LandingProjects from "./LandingProjects";
import {theme} from "../../constants/theme";


export const LandingPage = () => {
    return (
        <div style={{
            background: theme.colors.backgroundGrey,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <LandingHero/>
            <LandingProjects/>
        </div>
    )
}
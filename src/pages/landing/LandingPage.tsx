import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import LandingHero from "./LandingHero";
import LandingProjects from "./LandingProjects";


export const LandingPage = () => {
    return (
        <div style={{
            background: '#f7f7f7',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Header/>
            <LandingHero/>
            <LandingProjects/>
            <Footer/>

        </div>
    )
}
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "./pages/landing/LandingPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import {SnackbarProvider} from "notistack";
import {PrivacyPolicyPage} from "./pages/privacy/PrivacyPolicyPage";

//https://nmtl.dk/
//https://lassedyrholm.dk/
//https://dribbble.com/shots/11584903-Micael-Personal-CV-Resume-Site
//https://dribbble.com/shots/16077352-Personal-Portfolio-Site-Bruno-Erdison/attachments/11290703?mode=media
//https://dribbble.com/shots/7524299-Personal-Portfolio-CV-Resume-Template


function App() {
    return (
        <SnackbarProvider maxSnack={3}>
            <div>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>
                        <Route path="/privacy" element={<PrivacyPolicyPage/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        </SnackbarProvider>
    );
}

export default App;



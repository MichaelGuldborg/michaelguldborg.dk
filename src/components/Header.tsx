import React from "react";
import {Container} from "@mui/material";
import Logo from "./Logo";
import {ContactButton} from "./ContactButton";
import {Link} from "react-router-dom";


export const Header: React.FC = () => {
    return (
        <header style={{
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 1000,
        }}>

            <Container maxWidth={"lg"}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Logo/>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>


                        <div style={{
                            marginRight: 32,
                        }}>
                            <Link to="about">About</Link>
                        </div>
                        <div>
                            <ContactButton/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;
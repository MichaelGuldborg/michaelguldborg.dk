import React from "react";
import {Container, Paper} from "@mui/material";

export const PrivacyPolicyPage = () => {
    return <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
    }}>
        <Container maxWidth={"lg"}>
            <Paper style={{padding: 16, height: '70vh'}}>
                <iframe title={'streaker'} src={'streaker/privacy.html'} style={{
                    border: 'none',
                    width: '100%',
                    height: '100%',
                }}/>
            </Paper>
        </Container>
    </div>
}
export default PrivacyPolicyPage;

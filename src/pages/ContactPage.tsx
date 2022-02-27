import {Button, Container, Grid, TextField} from "@mui/material";
import {theme} from "../constants/theme";


export const ContactPage = () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            minHeight: 600,
            display: 'flex',
            alignItems: 'center',
        }}>

            <div style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                zIndex: -100,
            }}>
                <div style={{flex: 1, background: theme.colors.offWhite}}/>
                <div style={{flex: 1, background: theme.colors.backgroundGrey}}/>
            </div>

            <Container maxWidth={"lg"}>

                <Grid container>
                    <Grid item xs={12} md={6}>
                        <div style={{
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingRight: 16,
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <h2 style={{
                                        fontSize: 32,
                                        fontWeight: 500,
                                    }}>
                                        Say Hello
                                    </h2>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label={'Name'}
                                        required
                                        fullWidth
                                        type={'name'}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label={'Email'}
                                        type={'email'}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label={'Your message...'}
                                        type={'message'}
                                        required
                                        fullWidth
                                        multiline
                                        maxRows={4}
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant={"outlined"}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={0} md={6} />
                </Grid>
            </Container>

        </div>
    )
}
export default ContactPage;
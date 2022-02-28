import {Button, Container, Grid, TextField} from "@mui/material";
import {theme} from "../../constants/theme";
import {ChangeEvent, useState} from "react";
import {useSnackbar} from "notistack";
import sendEmail from "../../services/sendEmail";


export const ContactPage = () => {
    const {enqueueSnackbar} = useSnackbar();

    const initial = {name: '', email: '', message: ''};
    const [values, setValues] = useState(initial);
    const isValid = values.name.trim().length !== 0
        && values.email.trim().length !== 0
        && values.message.trim().length !== 0;

    const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = () => {
        if (!isValid) return;
        sendEmail({
            to: 'mail@michaelguldborg.dk',
            from: values.email,
            subject: values.name,
            content: values.message,
        });
        setValues(initial);
        enqueueSnackbar('Thank you for the message!', {variant: 'success'});
    }

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
                            paddingRight: 32,
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <h2 style={{
                                        fontSize: 32,
                                        fontWeight: 500,
                                        margin: 0,
                                        marginBottom: 16,
                                    }}>
                                        Say Hello
                                    </h2>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label={'Name'}
                                        type={'name'}
                                        name={'name'}
                                        value={values.name}
                                        onChange={onFieldChange}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label={'Email'}
                                        type={'email'}
                                        name={'email'}
                                        value={values.email}
                                        onChange={onFieldChange}
                                        required
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label={'Your message...'}
                                        type={'message'}
                                        name={'message'}
                                        value={values.message}
                                        onChange={onFieldChange}
                                        required
                                        fullWidth
                                        multiline
                                        maxRows={4}
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant={"outlined"} disabled={!isValid} onClick={onSubmit}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={0} md={6}/>
                </Grid>
            </Container>

        </div>
    )
}

export default ContactPage;
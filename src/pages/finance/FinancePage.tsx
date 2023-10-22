import {Box, Container, Grid, Stack, TextField, Typography, useTheme} from "@mui/material";
import React, {ChangeEvent, useState} from "react";


const toNumber = (s: string | undefined) => {
    if (!s?.length) return 0;
    return Number(s);
}

export const FinancePage = () => {

    const [values, setValues] = useState({
        currentBalance: '',
        monthlyDeposit: '',
        interestRate: '',
        monthlyExpenses: ''
    });
    const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    // x * rate = expense * 12


    const targetAmount = toNumber(values.monthlyExpenses) * 12 / toNumber(values.interestRate);
    const percent = toNumber(values.currentBalance) / targetAmount;
    const diff = targetAmount - toNumber(values.currentBalance);
    const months = Math.ceil(diff / toNumber(values.monthlyDeposit));
    const years = Math.floor(months / 12);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <Container maxWidth={'lg'}>
                <Stack direction={'column'} spacing={2} mb={2}>
                    <Typography variant={'h2'}>Financial freedom</Typography>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <InfoBox title={'Target balance'} subtitle={`${targetAmount}`}/>
                        <InfoBox title={'Percent'} subtitle={`${Math.floor(percent * 100)}%`}/>
                        <InfoBox title={'ETA'} subtitle={`${years} years and ${months - years * 12} months`}/>
                    </Stack>
                    <PercentBar percent={percent}/>

                </Stack>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label={'Current balance'}
                            type={'number'}
                            name={'currentBalance'}
                            value={values.currentBalance}
                            onChange={onFieldChange}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label={'Monthly savings'}
                            type={'number'}
                            name={'monthlyDeposit'}
                            value={values.monthlyDeposit}
                            onChange={onFieldChange}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label={'Yearly interest'}
                            type={'number'}
                            name={'interestRate'}
                            value={values.interestRate}
                            onChange={onFieldChange}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label={'Monthly expenses'}
                            type={'number'}
                            name={'monthlyExpenses'}
                            value={values.monthlyExpenses}
                            onChange={onFieldChange}
                            required
                            fullWidth
                        />
                    </Grid>


                </Grid>


            </Container>


        </div>
    )
}

export const PercentBar: React.FC<{ percent: number }> = ({percent}) => {
    const theme = useTheme();


    const radius = 6;
    return <Box sx={{height: 32, width: '100%', position: 'relative'}}>
        <Box sx={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            background: theme.palette.grey.A200,
            borderTopLeftRadius: radius,
            borderBottomLeftRadius: radius,
            borderTopRightRadius: radius,
            borderBottomRightRadius: radius,
        }}/>
        <Box sx={{
            position: 'absolute',
            height: '100%',
            width: `${percent * 100}%`,
            background: theme.palette.success.light,
            borderTopLeftRadius: radius,
            borderBottomLeftRadius: radius,
        }}/>
    </Box>
}


export const InfoBox: React.FC<{
    title: string;
    subtitle: string;
}> = ({title, subtitle}) => {
    return <Stack>
        <Typography variant={'body2'}>{title}</Typography>
        <Typography variant={'h3'}>{subtitle}</Typography>
    </Stack>
}

export default FinancePage;

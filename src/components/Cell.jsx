import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const darkBlue = '#0A1929';
const semiDarkBlue = '#0F263E';
const semiLightBlue = '#0059B2';
const lightBlue = '#007FFF';

const darkRed = '#290A12';
const semiDarkRed = '#3E0F1B';
const semiLightRed = '#B2003B';
const lightRed = '#FF0055';

export const Cell = (props) => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(props.color=='blue'? darkBlue:darkRed),
        backgroundColor: props.color=='blue'? darkBlue:darkRed,
        border: '1px solid' + (props.color=='blue'? semiLightBlue:semiLightRed),
        borderRadius: '15px',
        width: '100%',
        height: '126.66px',
        '&:hover': {
            backgroundColor: props.color=='blue'? semiDarkBlue:semiDarkRed,
            border: '2px solid ' + (props.color=='blue'? lightBlue:lightRed),
        },
        '&:active': {
            border: '1px solid rgba(0, 0, 0, 0)',
        }
    }));
      
    return (
        <Grid item xs={4}>
            <ColorButton className='btn-blue' />
        </Grid>
    )
}

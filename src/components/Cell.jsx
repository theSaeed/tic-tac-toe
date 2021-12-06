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
      
    function buttonClassName() {
        if (props.value===null) {
            if (props.color==='blue') {
                return 'game-table-blue';
            } else {
                return 'game-table-red';
            }
        } else if (props.value==='blue') {
            return 'game-table-disabled';
        } else {
            return 'game-table-disabled';
        }
    }

    function gradientClassName() {
        if (props.value===null) {
            return 'gradient-disabled'
        }
        if (props.value==='blue') {
            return 'gradient-blue';
        } else {
            return 'gradient-red';
        }
    }

    return (
        <Grid item xs={4}>
            <Button onClick={() => props.onClick(props.i)} className={buttonClassName()} >
                <div className={"gradient " + gradientClassName()}></div>
            </Button>
            {/* {props.value===null? <Button onClick={() => props.onClick(props.i)} className={className()} /> : <Button className={className()} disabled />} */}
        </Grid>
    )
}

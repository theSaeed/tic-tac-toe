import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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

    function gradientBlueClassName() {
        if (props.value===null)
            return '-disabled';
        if (props.value==='red')
            return '-disabled';
        return '';
    }

    function gradientRedClassName() {
        if (props.value===null)
            return '-disabled';
        if (props.value==='blue')
            return '-disabled';
        return '';
    }

    return (
        <Grid item xs={4}>
            <Button onClick={() => props.onClick(props.i)} className={buttonClassName()} >
                <div className={"gradient gradient-blue" + gradientBlueClassName()}></div>
                <div className={"gradient gradient-red" + gradientRedClassName()}></div>
            </Button>
        </Grid>
    )
}

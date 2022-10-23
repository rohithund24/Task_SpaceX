import * as React from 'react';
import { Button } from '@material-ui/core';

export default function ColorButtons(props) {
    const { title, status, ...otherProps } = props
    return (
        <Button variant="contained"  style={{
            backgroundColor: status === 'active' ? '#008000' : '#4CBB17'
        }}{...otherProps}>
            {title}
        </Button>
    );
}

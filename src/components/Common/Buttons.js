import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Buttons(props) {
    const{name, variant, color, startIcon, className, sx, onClick} = props
    return (
        <Stack direction="row" spacing={2} className="stack-mui">
            <Button className={className} sx={sx} variant={variant} color={color} startIcon={startIcon} onClick={onClick}>
                {name}
            </Button>
        </Stack>
  );
}
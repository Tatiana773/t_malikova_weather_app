import React, {useCallback, useState} from "react";
import { Box } from "@mui/system";
import Alert from '@mui/material/Alert';


export const Message = ({message}) =>{
    const [open, setOpen] = useState(true);
    const onCloseAlert = useCallback(()=>{setOpen(false)})
    return(
        <Box>
            {open && (<Alert severity="error" onClose = {onCloseAlert}>{message}</Alert>)}
        </Box>
    )
}
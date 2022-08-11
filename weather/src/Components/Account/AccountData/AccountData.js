import React from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import "../../i18n";



export const AccountData = ({user, onEdit, onSignOut}) => {
    const { t } = useTranslation();
    return(
        <Stack direction = "row" >
            <Stack className='userInfo' >
                <Typography variant="h4">{user.name} {user.lastName}</Typography>
                <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                    {user.email}
                    <br/>
                    {t("account.tel")} {user.tel}
                    <br/>
                    {t("account.password")} {user.password}
                </Typography>
                <Button variant="outlined" startIcon={<EditIcon/>} onClick = {onEdit}>
                    {t("account.btns.edit")}
                </Button>
                <Button variant="outlined" startIcon={<EditIcon/>} onClick = {onSignOut}>
                    {t("account.btns.signout")}
                </Button>
            </Stack>
        </Stack>
    )
}
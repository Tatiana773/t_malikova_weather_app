import React from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "./AccountData.css";

export const AccountData = ({user, onEdit, onSignOut}) => {

    const { t } = useTranslation();
    
    return(
        <Stack className="userInfo" >
            <Typography className = "name"variant="h4">{user.name} {user.lastName}</Typography>
            <Stack className="userInfo"  color="text.primary">
                <Typography>{user.email}</Typography>
                <Typography>{t("account.tel")} {user.tel}</Typography>
                <Typography>{t("account.password")} {user.password}</Typography>
            </Stack>
            < Stack className="userAccountBtns" direction = "row">
                <Button variant="outlined" startIcon={<EditIcon/>} onClick = {onEdit}>
                    {t("account.btns.edit")}
                </Button>
                <Button  variant="outlined" onClick = {onSignOut}>
                    {t("account.btns.signout")}
                </Button>
            </Stack>
        </Stack>

    )
}
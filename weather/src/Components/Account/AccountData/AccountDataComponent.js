import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser, selectIsEdit } from "../../../Store/App/selectors";
import { deleteSportAction } from "../../../Store/Home/actions";
import { editUserAction, setIsRegisteredAction, deleteUserModelAction, setIsLoginAction } from "../../../Store/App/actions";
import { selectEvents } from "../../../Store/Home/selectors";
import {FavouriteSportComponent}  from "./FavouriteSport";
import { AccountData } from "./AccountData";
import { AccountDataEditForm } from "./AccountDataEditForm";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import "./AccountData.css";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const AccountDataComponent = () =>{

    const user = useSelector(selectCurrentUser);
    const myEvents = useSelector(selectEvents);
    const isEdit = useSelector(selectIsEdit);

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [expanded, setExpanded] = useState(false);
    const [dense] = useState(false);

    const onRemoveEvent = useCallback((id)=>{
        dispatch(deleteSportAction(id))
    },[dispatch]);

    const handleExpandClick = () => {
        setExpanded(!expanded)
    };

    const onEditClick = useCallback(() =>{
        dispatch(editUserAction(true))
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(editUserAction(false))
    }, [dispatch]);

    const onSignOutClick = useCallback(() => {
        dispatch(deleteUserModelAction(user.id));
        dispatch(setIsLoginAction(false));
        dispatch(setIsRegisteredAction(false));
        navigate("/");
    }, [dispatch, navigate, user]);

    return(

        <Card className="userCard" sx={{backgroundColor: "rgba(248, 248, 246, 0.2)", boxShadow: "5px 5px 5px rgb(90, 87, 87)"}}>
            <CardContent>
                {isEdit? 
                <AccountDataEditForm user = {user} onCancel = {onCancelEdit} />: 
                <AccountData user = {user} onEdit = {onEditClick} onSignOut = {onSignOutClick}/>
                }
            </CardContent>
            <CardActions>
                <Typography sx={{ fontSize: 20, textAlign: "center", width: "100%" }} color="text.primary"  >
                   {t("account.events")}
                </Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <List dense={dense}>
                        { myEvents? myEvents.map((item) => <FavouriteSportComponent
                        key={item.id}
                        item={item} 
                        onDeleteEvent= {onRemoveEvent}
                        />):null }
                    </List>
                </CardContent>
            </Collapse>
        </Card>
    )
}

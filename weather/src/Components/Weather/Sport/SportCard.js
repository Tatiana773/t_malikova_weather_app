import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { addSportAction } from "../../../Store/Home/actions";
import { selectEvents } from "../../../Store/Home/selectors";
import { Message } from "../../Message/Message";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../City/CityPage.css";

export const SportCardComponent = ({item, title, name, match, place, country, date,}) =>{

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const events = useSelector(selectEvents);

    const [isDouble, setIsDouble] = useState(false);

    const onAddToFavourites = useCallback(()=>{
        if(events.find((event) =>event.id === item.id)){
            setIsDouble(true);
        }else{
            dispatch(addSportAction(item));
        }
    },[dispatch, item, events]);

    return(

        <Card  className ="city" sx={{ maxWidth: 275, backgroundColor: "rgba(248, 248, 246, 0.2)", boxShadow: "5px 5px 5px rgb(90, 87, 87)", marginLeft: "40px",}}>
            <CardContent>
                {isDouble? <Message message = {t("messages.event in list")}/>: null}
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h6" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {date}
                </Typography>
                <Typography variant="body2"className="sportText">
                    {match}
                    <br/>
                    {t("sport.stad")}{place}
                    <br/>
                    {t("sport.country")} {country}
                </Typography>
            </CardContent>
            <CardActions className="sportButton">
                <Button type ="text"
                    onClick = {onAddToFavourites}>
                        {t("sport.btn save")}
                    </Button>
            </CardActions>
        </Card>
    )
}
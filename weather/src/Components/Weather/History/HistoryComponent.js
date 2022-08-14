import React, {useCallback, useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { ViewsDatePicker } from './Datepicker';
import { selectCity, selectDate, selectHistoryDay, selectSystem } from '../../../Store/Home/selectors';
import { useSelector, useDispatch, } from 'react-redux';
import { fetchHistory } from '../../../Store/Home/thunks';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import OpacitySharpIcon from '@mui/icons-material/OpacitySharp';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { TableComponent } from '../Forecast/TableComponent';
import dayjs from "dayjs";
import '../City/CityPage.css';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const HistoryComponent = () =>{

    const city = useSelector(selectCity);
    const currentDate = useSelector(selectDate);
    const history = useSelector(selectHistoryDay);
    const system = useSelector(selectSystem);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { historyDate } = useParams();
    const dayjsParsedDate = dayjs(historyDate, "YYYY-MM-DD");
   
    const selectedDate = dayjsParsedDate.isValid() ? dayjsParsedDate.toDate().toISOString().slice(0, 10) : currentDate;
  
    const [newDate, setNewDate] = useState(selectedDate)
    
    
    useEffect(()=>{
        dispatch(fetchHistory(city.name +'&dt=' + newDate + '&lang=en'));
    },[dispatch, city, newDate])

    const onSetNewDate = useCallback((newValue)=>{
        setNewDate(newValue.toISOString().slice(0, 10))
        navigate('/history/' + city.name + "/" + dayjs(newValue).format("YYYY-MM-DD"));
      },[navigate, setNewDate])

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Stack >
            <ViewsDatePicker value = {newDate} onChangeDate = {onSetNewDate} />
            <Card sx = {{backgroundColor:"rgba(248, 248, 246, 0.2)",boxShadow: "5px 5px 5px rgb(90, 87, 87)",}} className = "city">
                <Stack direction="row" className='historyData' >
                    <CardHeader className='name'
                        title= {city.name}
                        subheader={city.country+', '+history.date}
                    />
                    <CardContent >
                        <Stack direction="row" className='shortHistory'>
                            <Stack>
                                <Typography variant = "h5">{system ==="Metric"? history.day.maxtemp_c: history.day.maxtemp_f}</Typography>
                                <Typography variant = "h5">{system ==="Metric"? history.day.mintemp_c: history.day.mintemp_f}</Typography>
                            </Stack>
                            <Stack>
                                <img className='icon' src = {history.day.condition.icon}></img>
                                <Typography variant = "h6">{history.day.condition.text}</Typography>
                            </Stack>
                            <Stack direction="column">
                                <Stack direction="row">
                                    <OpacitySharpIcon/>
                                    <Typography>{history.day.avghumidity}</Typography>
                                </Stack>
                                <Stack direction="row">
                                    <WbTwilightIcon/>
                                    <Typography>{history.astro.sunrise}</Typography> 
                                    <Typography>{history.astro.sunset}</Typography> 
                                </Stack>
                                <Stack direction="row">
                                    <Brightness2Icon/>
                                    <Typography>{history.astro.moonrise}</Typography> 
                                    <Typography>{history.astro.moonset}</Typography>
                                </Stack> 
                            </Stack>
                        </Stack>
                    </CardContent>
                </Stack>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <TableComponent day = {history} system = {system}/>
                    </CardContent>
                </Collapse>
            </Card>
        </Stack>
    )
}




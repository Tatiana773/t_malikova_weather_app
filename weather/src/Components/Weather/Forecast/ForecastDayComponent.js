import React, { useState, useEffect } from 'react';
import { useSelector,} from 'react-redux';
import { selectSystem } from '../../../Store/Home/selectors';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { TableComponent } from './TableComponent';
import "./Forecast.css"

export const ForecastDayComponent = ({day, expanded, onHandleChange}) =>{
    const system = useSelector(selectSystem);
    const [maxTemperature, setMaxTemperature] = useState(day.day.maxtemp_c);
    const [minTemperature, setMinTemperature] = useState(day.day.mintemp_c);

    useEffect(()=>{
        if(system === "Imperial"){
            setMaxTemperature(day.day.maxtemp_f);
            setMinTemperature(day.day.mintemp_f);
        }else{
            setMaxTemperature(day.day.maxtemp_c);
            setMinTemperature(day.day.mintemp_c);
        }
    },[system, setMaxTemperature, setMinTemperature]);

    return(
        <Accordion expanded={expanded === day.date} onChange={onHandleChange} sx = {{bgcolor: "transparent"}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography variant="h7" sx={{ width: '15%', flexShrink: 0 }}>

                    {day.date}
                </Typography>
                <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                    <Stack spacing={2}>
                        <Typography variant="h5">{maxTemperature}</Typography>
                        <Typography variant="h5">{minTemperature}</Typography>
                    </Stack>
                    <Stack spacing={1}>
                        <img src ={day.day.condition.icon} ></img>
                    </Stack>
                    <Stack direction="column">
                        <Stack direction="row"spacing={1}>
                        <WbTwilightIcon/> 
                        <Typography>{day.astro.sunrise} - {day.astro.sunset}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Brightness2Icon/>
                            <Typography>{day.astro.moonrise} - {day.astro.moonset}</Typography>
                        </Stack>
                    </Stack>
                    <Stack spacing={10}>{day.day.condition.text}</Stack>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
               <TableComponent day = {day} system ={system}/>
            </AccordionDetails>
        </Accordion>
    )
}



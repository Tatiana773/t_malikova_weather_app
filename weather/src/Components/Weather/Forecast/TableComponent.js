import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacitySharpIcon from '@mui/icons-material/OpacitySharp';
import AirSharpIcon from '@mui/icons-material/AirSharp';
import MoodSharpIcon from '@mui/icons-material/MoodSharp';
import { useTranslation } from 'react-i18next';
import "../../i18n";

export const TableComponent = ({day, system}) =>{
    const hour = day.hour;
    const { t } = useTranslation();

    const createData = (id, name, value0, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21, value22, value23) => {
        return {id, name, value0, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21, value22, value23,}
     }
     
     const temp = hour.map((i)=> system === "Metric"? i.temp_c: i.temp_f)
     const feelslike = hour.map((i)=> system === "Metric"?i.feelslike_c: i.feelslike_f)
     const humidity = hour.map((i)=>i.humidity)
     const wind = hour.map((i)=>system === "Metric"? i.wind_kph: i.wind_mph)
     const condition = hour.map((i)=><img src={i.condition.icon}></img>)
 
       const rows = [
 
         createData(1,"", condition[0], condition[1], condition[2], condition[3], condition[4], condition[5], condition[6], condition[7], condition[8], condition[9], condition[10], condition[11], condition[12], condition[13], condition[14], condition[15], condition[16], condition[17], condition[18], condition[19], condition[20], condition[21], condition[22], condition[23],),
         createData(2, <DeviceThermostatIcon/>, temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[9], temp[10], temp[11], temp[12], temp[13], temp[14], temp[15], temp[16], temp[17], temp[18], temp[19], temp[20], temp[21], temp[22], temp[23],),
         createData(3, <MoodSharpIcon/>, feelslike[0], feelslike[1], feelslike[2], feelslike[3], feelslike[4], feelslike[5], feelslike[6], feelslike[7], feelslike[8], feelslike[9], feelslike[10], feelslike[11], feelslike[12], feelslike[13], feelslike[14], feelslike[15], feelslike[16], feelslike[17], feelslike[18], feelslike[19], feelslike[20], feelslike[21], feelslike[22], feelslike[23],),
         createData(4, <OpacitySharpIcon/>, humidity[0], humidity[1], humidity[2], humidity[3], humidity[4], humidity[5], humidity[6], humidity[7], humidity[8], humidity[9], humidity[10], humidity[11], humidity[12], humidity[13], humidity[14], humidity[15], humidity[16], humidity[17], humidity[18], humidity[19], humidity[20], humidity[21], humidity[22], humidity[23],),
         createData(5, <AirSharpIcon/>, wind[0], wind[1], wind[2], wind[3], wind[4], wind[5], wind[6], wind[7], wind[8], wind[9], wind[10], wind[11], wind[12], wind[13], wind[14], wind[15], wind[16], wind[17], wind[18], wind[19], wind[20], wind[21], wind[22], wind[23],),
       ];
    return(
        <TableContainer component={Paper} sx = {{bgcolor: "transparent"}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>     </TableCell>
                    <TableCell align="right">{t("hours.0")}</TableCell>
                    <TableCell align="right">{t("hours.1")}</TableCell>
                    <TableCell align="right">{t("hours.2")}</TableCell>
                    <TableCell align="right">{t("hours.3")}</TableCell>
                    <TableCell align="right">{t("hours.4")}</TableCell>
                    <TableCell align="right">{t("hours.5")}</TableCell>
                    <TableCell align="right">{t("hours.6")}</TableCell>
                    <TableCell align="right">{t("hours.7")}</TableCell>
                    <TableCell align="right">{t("hours.8")}</TableCell>
                    <TableCell align="right">{t("hours.9")}</TableCell>
                    <TableCell align="right">{t("hours.10")}</TableCell>
                    <TableCell align="right">{t("hours.11")}</TableCell>
                    <TableCell align="right">{t("hours.12")}</TableCell>
                    <TableCell align="right">{t("hours.13")}</TableCell>
                    <TableCell align="right">{t("hours.14")}</TableCell>
                    <TableCell align="right">{t("hours.15")}</TableCell>
                    <TableCell align="right">{t("hours.16")}</TableCell>
                    <TableCell align="right">{t("hours.17")}</TableCell>
                    <TableCell align="right">{t("hours.18")}</TableCell>
                    <TableCell align="right">{t("hours.19")}</TableCell>
                    <TableCell align="right">{t("hours.20")}</TableCell>
                    <TableCell align="right">{t("hours.21")}</TableCell>
                    <TableCell align="right">{t("hours.22")}</TableCell>
                    <TableCell align="right">{t("hours.23")}</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.value0}</TableCell>
                    <TableCell align="right">{row.value1}</TableCell>
                    <TableCell align="right">{row.value2}</TableCell>
                    <TableCell align="right">{row.value3}</TableCell>
                    <TableCell align="right">{row.value4}</TableCell>
                    <TableCell align="right">{row.value5}</TableCell>
                    <TableCell align="right">{row.value6}</TableCell>
                    <TableCell align="right">{row.value7}</TableCell>
                    <TableCell align="right">{row.value8}</TableCell>
                    <TableCell align="right">{row.value9}</TableCell>
                    <TableCell align="right">{row.value10}</TableCell>
                    <TableCell align="right">{row.value11}</TableCell>
                    <TableCell align="right">{row.value12}</TableCell>
                    <TableCell align="right">{row.value13}</TableCell>
                    <TableCell align="right">{row.value14}</TableCell>
                    <TableCell align="right">{row.value15}</TableCell>
                    <TableCell align="right">{row.value16}</TableCell>
                    <TableCell align="right">{row.value17}</TableCell>
                    <TableCell align="right">{row.value18}</TableCell>
                    <TableCell align="right">{row.value19}</TableCell>
                    <TableCell align="right">{row.value20}</TableCell>
                    <TableCell align="right">{row.value21}</TableCell>
                    <TableCell align="right">{row.value22}</TableCell>
                    <TableCell align="right">{row.value23}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}
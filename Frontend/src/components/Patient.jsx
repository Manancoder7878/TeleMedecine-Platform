import MUIDataTable from "mui-datatables";
import {createTheme , ThemeProvider} from "@mui/material/styles";
import "./Patient.css";
import { useEffect, useState } from "react";
import {deleteapi, myslots} from "./Api"
import { blue } from "@mui/material/colors";
import { Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
export default function Patient(){
    const [slots,setSlots] = useState([]);
    useEffect(
        () => ListTodo(),[]
    )
    function ListTodo(){
        myslots().then(response =>
            {
                //console.log(response.data);
                setSlots(response.data);
                console.log(response.data);
            }
        )
        .catch(erro => {console.log(erro)})
    }
    console.log(slots)
    function bookapp(id){
        console.log("clicked " + id)
        // deleteapi(id)
        // .then(response => {console.log(response.data)})
        // .catch(error => {console.log(error)})
    }
    const columns = [
        {
            name:'id'
        },
    {
        name:'doctorName'
    },
    {
        name:'date'
    },
    {
        name:'time'
    },
    {
        name:'fees'
    },
    {
        name:'Book',
        options:{
            customBodyRender: (value, tableMeta, updateValue) => {
            const rowId = tableMeta.rowData[0];
            return <button className= "bookbtn" onClick = {() => bookapp(rowId)}><Link to = {`/book/${rowId}`}>Book now</Link></button>
        }
        }
    },

    ];
   
    const options = {
        selectableRows: false,
        elevation: 0,
        rowsPerPage: 5,
        rowsPerPageOption:[5,10,20,30], 
      };
    const getMuiTheme = () =>
        createTheme({
            typography : {
                fontfamily: "Poppins",
            },
            palette:{
                background:{
                    paper:"#1E293B",
                    default:"#0F172A"
                },
                mode: "dark",
            },
            components:{
                MuiTableCell:{
                    styleOverrides:{
                        head:{
                            padding: "10px 4px",
                        },
                        body:{
                            padding: "7px 15px",
                            color: "#E2E8F0"
                        }
                    }
                }
            }
});

    return(
        <>
            <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable className = "mytable"
            title={"Doctors List"}
            data={slots}
            columns={columns}
            options={options}/>
            </ThemeProvider>    
        </>
    )
}
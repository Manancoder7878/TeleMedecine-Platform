import MUIDataTable from "mui-datatables";
import {createTheme , ThemeProvider} from "@mui/material/styles";
import "./Patient.css";
import { useEffect, useState } from "react";
import {deletepatient, getdetails} from "./Api"
import { blue } from "@mui/material/colors";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function PatientList(){
    const [call,setCall] = useState([]);
    useEffect(
        () => ListTodo(),[]
    )
    function ListTodo(){
        getdetails().then(response =>
            {
                console.log(response.data);
                setCall(response.data);
            }
        )
        .catch(erro => {console.log(erro)})
    }
    function handlecall(id){
        deletepatient(id)
        .then(response => {console.log(response.data)})
        .catch(error => {console.log(error)})
    }
    const columns = [
        {
            name: 'key'
        },
    {
        name:'patientName'
    },
    {
        name:'age'
    },
    {
        name:'gender'
    },
    {
        name:'phone'
    },
    {
        name:'Call',
        options:{
            customBodyRender: (value, tableMeta, updateValue) => {
                const patId = tableMeta.rowData[0];
                return <button className= "bookbtn" onClick = {() => handlecall(patId)}>Call now</button>
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
            title={"Patients List"}
            data={call}
            columns={columns}
            options={options}/>
            </ThemeProvider>    
        </>
    )
}
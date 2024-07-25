import { useAuth0 } from "@auth0/auth0-react";
import Frame from "./Frame";
import Hero from "./Hero";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Patient from "./Patient";
import Frame1 from "./Frame1";
import Card from "./Card";
import PatientList from "./PatientList";
export default function Telemed(){
    const {isAuthenticated} = useAuth0();
    return(
        <div>
            <BrowserRouter>
            <Routes> 
            <Route path = '/' element = {<Hero/>}/>
            {isAuthenticated && <Route path = '/role' element = {<Frame/>}/>}
            <Route path = '/book' element= {<Patient/>}/>
            <Route path = '/addslot' element = {<Frame1/>}/>
            <Route path = '/book/:rowid' element = {<Card />} />
            <Route path = '/patlist' element = {<PatientList/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
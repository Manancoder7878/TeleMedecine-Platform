import axios from 'axios'
const baseurl = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
);

export const myslots = (id) => baseurl.get('slots',id);
//Note that while post data we will always pass user paramaeters
export const aslot = (user) => baseurl.post('addslots',user);
export const getdetails = () => baseurl.get('patients');
export const postdetails = (user) => baseurl.post('addpatient',user);
export const deleteapi = (id) => baseurl.delete(`delete/${id}`);
export const deletepatient = (id) => baseurl.delete(`deletepatient/${id}`)
import axios from "axios";
import apiconstants from "../Static/apiconstants";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    index,
    show,
    store,
    update,
    destroy
]

function index(setStudents) {
    //const params = new URLSearchParams();
    const url = apiconstants.api_path + 'students';
    axios.get(url)
    .then(res => {
        console.log(res);
        setStudents(res.data.data)

    }).catch(err => {
        console.error(err);
        
    });
}

function show() {}

function store() {}

function update() {}

function destroy(serial_number, setStudents) {
   
    let url  = apiconstants.api_path + 'deleteStudent/' + serial_number;
    const params = new URLSearchParams();
    //params.append('serial_number', serial_number)
    axios.post(url, params)
    .then(res => {
        index(setStudents);
    })
    .catch(err => {
    })
}
import React from 'react';
import AppNavbar from '../Components/Common/AppNavbar/AppNavbar';
import UpdateForm from '../Components/UpdateTodo/UpdateForm';
// import { useParams } from 'react-router-dom';
const UpdatePage = () => {
    // const {id} = useParams();
    return (
        <div>
            <AppNavbar/>
            <UpdateForm/>
        </div>
    );
};

export default UpdatePage;
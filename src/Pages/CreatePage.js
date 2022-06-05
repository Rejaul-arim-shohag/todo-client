import React from 'react';
import AppNavbar from '../Components/Common/AppNavbar/AppNavbar';
import CreateTodo from '../Components/CreateTodo/CreateTodo';

const CreatePage = () => {
    return (
        <div>
           <AppNavbar/>
           <CreateTodo/>
        </div>
    );
};

export default CreatePage;
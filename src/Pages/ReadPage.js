import React from 'react';
import AppNavbar from '../Components/Common/AppNavbar/AppNavbar';
import TodoList from '../Components/TodoList/TodoList';

const ReadPage = () => {
    return (
        <div>
            <AppNavbar/>
            <TodoList/>
        </div>
    );
};

export default ReadPage;
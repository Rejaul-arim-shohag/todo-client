import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoCreate } from '../../ApiServices/TodoCrud';
import {isEmpty,successToast, errorToast} from "../../Helper/ValidationHelper"
const CreateTodo = () => {
    const navigate = useNavigate();
    const todoName=useRef();
    const todoDescription = useRef();
    
    //for post useId and it pick from localstroage
    // let user = JSON.parse(localStorage.getItem('todo-app-user'));
    // const UserId = parseInt(user.UserId);
    const todoSubmit=()=>{
        const TodoName=todoName.current.value;
        const TodoDesc = todoDescription.current.value;
        if(isEmpty(TodoName) ||TodoName.length<5){
            errorToast("Todo Name Should Be greater than or equal 5 Characters")
        } else if(isEmpty(TodoDesc) ||TodoDesc.length<10){
            errorToast("Todo Description Should Be greater than or equal 10 Characters")
        }else{
           
            TodoCreate(TodoName, TodoDesc)
            .then((result)=>{
                if(result){ 
                    console.log(result)
                    successToast("Todo Create Success")
                    navigate("/allTodos")
                } else{
                    errorToast("Todo Create Faild, Try Again!!!")
                }
            })
            
        }
    }
    return (
        <div>
            <div className="container">
                <div className="customRow">
                    <div className="col-md-12 p-2">
                        <label>Todo Name</label>
                        <input type="text" ref={todoName} className="form-control" />
                    </div>
                    <div className="col-md-12 p-2">
                        <label>Description</label>
                        <input type="text" ref={todoDescription} className="form-control" />
                    </div>
                    <div className="text-center">
                        <button onClick={todoSubmit} className="todoSubmitBtn btn btn-primary  my-3">Add Todo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;
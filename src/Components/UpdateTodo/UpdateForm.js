import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { UpdateTodo, ReadTodoById } from '../../ApiServices/TodoCrud';

const UpdateForm = (props) => {
    let todoName=useRef();
    let todoDescription = useRef();
    const {id}=useParams()
    useEffect(()=>{
        ReadTodoById(id)
        .then((result)=>{
            todoName.value= result.data[0].Title;
            todoDescription.value= result.data[0].Detail
        })
    }, [])
    // console.log(todoName, todoDescription)
    const updateTodo=()=>{
        UpdateTodo(id,todoName,todoDescription)
        .then(result=>{
           if(result.status===200){
           console.log("update success")
           }
           else{
            console.log("update fail")
           }
        })
    }
    return (
        <div>
            <div className="container">
                <div className="customRow">
                    <div className="col-md-12 p-2">
                        <label>Todo Name</label>
                        <input type="text" ref={(input)=>todoName=input} className="form-control" />
                    </div>
                    <div className="col-md-12 p-2">
                        <label>Description</label>
                        <input type="text" ref={(input)=>todoDescription=input} className="form-control" />
                    </div>
                    <div className="text-center">
                        <button onClick={updateTodo} className="todoUpdateBtn btn btn-primary  my-3">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateForm;
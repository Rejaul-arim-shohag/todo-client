import React, { useEffect, useState } from 'react';
import { DeleteTodo, ReadTodoByUserId } from '../../ApiServices/TodoCrud';
import { SpinnerCircularFixed } from 'spinners-react';
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const TodoList = () => {
    const navigate = useNavigate()
    const [myTodos, setMyTodos] = useState([]);
    useEffect(() => {
        ReadTodoByUserId()
            .then((result) => {
                // setMyTodos(result.data)
                setMyTodos(result.data)
            })
    },[])

    //todo delete Function 
    const deleteTodo=(id)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                DeleteTodo(id)
                .then((result=>{
                    console.log(result)
                }))
                window.location.reload()
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }

    //update function
    const updateTodo=(id)=>{
        navigate(`/UpdateTodo/${id}`)
    }
    if (myTodos.length > 0) {
        return (
            <div>
                <div className="container">
                    <h2 className="text-center my-4">Todo Lists</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-center">
                                <th>Todo Name</th>
                                <th>Description</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myTodos.map((todo, i) => {
                                    return (
                                        <tr>
                                            <td>{todo.Title}</td>
                                            <td>{todo.Detail}</td>
                                            <td className="text-center">
                                                <button onClick={()=>deleteTodo(todo._id)}  className="btn btn-warning mx-1"><MdDelete/></button>
                                                <button onClick={()=>updateTodo(todo._id)} className="btn btn-warning mx-1"><AiFillEdit/></button>
                                                </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    //  else if(myTodos.length===0){
    //     return(
           
    //     )
    // }
    else{
       return(
            <div className="grid-container">
                <SpinnerCircularFixed size={90} thickness={100} speed={100} color="rgba(57, 71, 172, 1)" secondaryColor="rgba(85, 57, 172, 0.44)" />
            </div>
       )
        
    }

};

export default TodoList;
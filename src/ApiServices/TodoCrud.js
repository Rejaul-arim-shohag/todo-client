const axios = require('axios')


let token = JSON.parse(localStorage.getItem('token'));
//create Todo
export function TodoCreate(Title, Detail, UserId){
    const url="http://localhost:5000/api/v1/createTodo";
    const postBody={
        Title:Title,
        Detail:Detail,
        UserId:UserId
    }
    // const token = localStorage.getItem("token")
    // console.log(token)
    return axios.post(url, postBody, {headers:{token:token}})
    .then((result)=>{
        if(result.status===200){
            return [true, result.data]
        } else{
            return false;
        }
    })
    .catch((err)=>{
        console.log(err)
    })

}  

export function ReadTodoByUserId(){
    const url="http://localhost:5000/api/v1/ReadTodoByUserId";
    return axios.get(url, {headers:{token:token}})
    .then((result)=>{
        if(result.status===200){
            return result.data;
        } else{
            return false;
        }
    })
}

export function ReadTodoById(id){
    const url=`http://localhost:5000/api/v1/ReadTodoById/${id}`;
    return axios.get(url, {headers:{token:token}})
    .then((result)=>{
        if(result.status===200){
            return result.data;
        } else{
            return false
        }
    })
}
export function DeleteTodo(id){
    const url=`http://localhost:5000/api/v1/deleteTodo/${id}`;
    return axios.get(url, {headers:{token:token}})
    .then((result)=>{
        if(result.status===200){
            return result.data;
        } else{
            return false;
        }
    })
}

export function UpdateTodo(id, todoName,todoDescription){
    const url=`http://localhost:5000/api/v1/updateTodo/${id}`;
    const body={
        Title:todoName,
        Detail:todoDescription
    };
    return axios.post(url,body,{headers:{token:token}})
    .then((result)=>{
        console.log(result)
        if(result.status===200){
            return result.data;
        } else{
            return false;
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}


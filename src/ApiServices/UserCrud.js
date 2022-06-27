const axios = require('axios')
export function Create(UserName, Email, Password){
    const url="https://rejaul-karim-todo.herokuapp.com/api/v1/createUser";
    const postBody = {
        UserName: UserName,
        Email: Email,
        Password: Password
    }
    return axios.post(url, postBody)
    .then((res)=>{
        if(res.status===200){
            return [true, res.data]
        } else{
            return false;
        }
    }).catch((err)=>{
        console.log("err", err)
    })
}

//login api call
export const userLogin = (email, password)=>{
    const postBody = {
        Email: email,
        Password: password
    }
    const url = "https://rejaul-karim-todo.herokuapp.com/api/v1/loginUser"
    return axios.post(url, postBody)
    .then((res)=>{
        if(res.status===200){
            return [true, res.data]
        }else{
            return false;
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}


//all user find without me
// export const AllUsers=(id)=>{
//     const url = "http://localhost:5000/api/v1/Allusers/"+id;
//     return axios.get(url)
//     .then((res)=>{
//         if(res.status===200){
//             return res.data;
//         }
//         else{
//             return false;
//         }
//     })
//     .catch((err)=>{
//         console.log(err)
//         return err;
//     })
// }
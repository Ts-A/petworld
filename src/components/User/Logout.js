import Axios from 'axios'

export const logout = ()=>{
    return new Promise((resolve,reject)=>{
        Axios.post('/user/logout',{},{
            headers:{
                'Authorization':"Bearer " + localStorage.getItem('token')
            }
        }).then( data => resolve(data.data) )
        .catch( e => reject(new Error(e.response.data.error)) )
    })
}
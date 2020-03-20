import axios from 'axios'

const setGet=(url,params)=>{
    return new Promise((resolve,resject)=>{
        axios.get(url,{params:params})
        .then((res)=>{
            resolve(res.data);
        })
        .catch((err)=>{
            resject(err)
        })
    })
}
export default {
    setGet,
}
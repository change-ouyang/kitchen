import axios from 'axios'
import { Indicator } from 'mint-ui'
//axios封装
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
//拦截器的使用
const setinter = () =>{
    axios.interceptors.request.use(function (config) {
        Indicator.open({
            text: 'Loading...',
            spinnerType: 'fading-circle',
        });
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
    axios.interceptors.response.use(function (response) {
        Indicator.close();
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
}
export default {
    setGet,setinter
}
import axios from 'axios'
//返回值是promise对象
export default function ajax(url:string,data = {}, type = 'GET') {
    return new Promise((resolve,reject) =>{
        //执行异步ajax请求
        let promise //这个内部的pomise用来保存axios的返回值
        if(type === 'GET'){
            let dataStr = ''

            Object.keys(data).forEach(key =>{
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !==''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url+ '?' + dataStr
            }
            promise = axios.get(url);
        }else {
            promise = axios.post(url,data)
        }
        //success resolve()
        promise.then(response=>{
            resolve(response.data)
        })
            .catch(error=>{
            reject(error)
        })
        //regect（）


    })

}

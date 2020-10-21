import axios from 'axios'

export default class AxiosRequest {

    static getPromise(url){
        return axios.get(url);
    }

    static get(url,onResponse,onError) {
        axios.get(url)
        .then(res => 
        {
            onResponse(res.data)
        })
        .catch(err => 
        {
            onError(err)
        })
    }

    static getAll(promises = [],onResponse,onError) {
        axios.all(promises)
        .then(responses => 
        {
            onResponse(responses)
        })
        .catch(err => 
        {
            onError(err)
        })
    }

}
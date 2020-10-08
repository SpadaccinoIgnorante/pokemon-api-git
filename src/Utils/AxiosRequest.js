import axios from 'axios'

export default class AxiosRequest {

    static Get(url,onResponse,onError) {
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

}
import axios from 'axios'

export default class AxiosRequest {

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

}
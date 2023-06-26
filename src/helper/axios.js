import axios from 'axios'

const rootAPI = "httsp://localhost:8000"
const userAPI = rootAPI + "/api/v1/user"

export const postUser = async data =>{
    try {
        const resp = await axios.post(userAPI, data)
        console.log(resp)

        return resp.data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}
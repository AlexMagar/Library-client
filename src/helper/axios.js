import axios from 'axios'

const rootAPI = "http://localhost:8000"
const userAPI = rootAPI + "/api/v1/user"

const postUser = async data =>{
    try {
        const resp = await axios.post(userAPI, data)

        return resp.data;
    } catch (error) {
        return{
            status: "error",
            message: "someting wrong"
        }
    }
}
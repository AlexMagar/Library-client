import axios from 'axios'

const rootAPI = "httsp://localhost:8000"
const userAPI = rootAPI + "/api/v1/user"

export const postUser = async (userData) =>{
    try {
        const {data} = await axios.post(userAPI, userData);
        console.log(data)

        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}
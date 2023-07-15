import axios from 'axios'

const rootAPI = "http://localhost:8000"
const userAPI = rootAPI + "/api/v1/user"
const bookAPI = rootAPI + "/api/v1/books"
const burrowAPI = rootAPI + "/api/v1/burrow"
const reviewAPI = rootAPI + "./api/v1/review"

const getUserIdFromLocalStorage = () =>{
    console.log("step 4")
    const str = localStorage.getItem("persist:userInfo")
    if(str){
        const userInfo = JSON.parse(str)
        if(userInfo.user){
            const user = JSON.parse(userInfo.user)
            return user?._id
        }
    }
    return null;
}
// ======= user =======
export const postUser = async (userData) =>{
    try {
        const {data} = await axios.post(userAPI, userData);

        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const loginUser = async (userData) =>{
    try {
        const {data} = await axios.post(userAPI + "/login", userData);
        console.log("from axios: ",data);

        return data;
    } catch (error) {
        return{
            status: "error",
            message: error.message,
        };
    }
}

// ========= Book =========
export const postBook = async (obj) =>{
    try {
        const {data} = await axios.post(bookAPI, obj,{
            headers: {
                Authorization: getUserIdFromLocalStorage(),
            }
        });

        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const fetchBooks = async () =>{
    try {
        const {data} = await axios.get(bookAPI );

        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const updateBooks = async (obj) =>{
    try {
        const {data} = await axios.put(bookAPI, obj );

        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const deleteBooks = async (_id) =>{
    try {
        const {data} = await axios.delete(bookAPI + "/" + _id, {
            headers: {
                Authorization: getUserIdFromLocalStorage(),
            }
        });
        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}

// ========= Burrow =========
export const postBurrow = async (obj) =>{
    try {
        const {data} = await axios.post(burrowAPI, obj, {
            headers: {
                Authorization: getUserIdFromLocalStorage(),
            }
        });

        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const fetchBurrow = async () =>{
    try {
        const {data} = await axios.get(burrowAPI, {
            headers: {
                Authorization: getUserIdFromLocalStorage(),
            }
        });

        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const returnBurrow = async (obj) => {
    try {
      const { data } = await axios.put(burrowAPI, obj, {
        headers: {
          Authorization: getUserIdFromLocalStorage(),
        },
      });
  
      return data;
    } catch (error) {
      return {
        status: "error",
        message: error.message,
      };
    }
  };



// ============ Review =========
export const postReview = async (obj) =>{
    try {
        const {data} = await axios.post(reviewAPI, obj, {
            headers: {
                Authorization: getUserIdFromLocalStorage(),
            }
        });

        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const getReviews = async () =>{
    try {
        const {data} = await axios.get(reviewAPI, obj);

        return data;
    } catch (error) {
        return{
            status: 'error',
            message: error.message,
        }
    }
}
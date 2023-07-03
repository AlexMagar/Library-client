import { toast } from "react-toastify";
import { deleteBooks, fetchBooks, postBook } from "../../helper/axios"
import { setBooks } from "./bookSlice";
import { updateBooks } from "../../helper/axios";


export const postBookAction = (bookObj) => async (dispatch) =>{
    const dataPending = postBook(bookObj);

    toast.promise(dataPending, {
        pending: "Please wait...."
    })

    const {status, message} = await dataPending;

    toast[status](message);
    if(status === 'success'){
        //nedd to fetch all books
        dispatch(fetchBookAction());
    }
}

export const updateBookAction = (bookObj) => async (dispatch) =>{
    const dataPending = updateBooks(bookObj);

    toast.promise(dataPending, {
        pending: "Please wait...."
    })

    const {status, message} = await dataPending;

    toast[status](message);
    if(status === 'success'){
        //nedd to fetch all books
        dispatch(fetchBookAction());
    }
}

export const fetchBookAction = () => async (dispatch) =>{

    const {status, books} = await fetchBooks();

    if(status === 'success'){
        //nedd to fetch all books
        dispatch(setBooks(books));
    }
}

export const deleteBookAction = (_id) => async (dispatch) =>{
    const dataPending = deleteBooks(_id);

    toast.promise(dataPending, {
        pending: "Please wait...."
    })

    const {status, message} = await dataPending;

    toast[status](message);
    if(status === 'success'){
        //nedd to fetch all books
        dispatch(fetchBookAction());
    }
}
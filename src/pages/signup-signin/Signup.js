import React, { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { BiSolidUserDetail } from "react-icons/bi";
import { toast } from "react-toastify";
import { postUser } from "../../helper/axios";
import { useSelector } from "react-redux";

const Signup = () => {

    const { user } = useSelector((state) => state.userInfo);

    const [form, setForm] = useState({
        role: "student",
    });

    const handleOnChange = (e) =>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault();

        const {confirmPassord, ...rest} = form;

        if(confirmPassord !== form.password){

            return toast.error("Password do not match");

        }
        console.log(confirmPassord, form.password);

        //call api and send rest obj
        const dataPromise = postUser(rest);
        console.log(dataPromise)
        toast.promise(dataPromise, {
            pending: "Please wait...",
    });

    const { status, message } = await dataPromise;
    toast[status](message);
  };


    const inputs = [
        {
            label:'First Name',
            name: 'fName',
            required: true,
            placeholder: 'Sam',
            type: 'text',
        },
        {
            label:'last Name',
            name: 'lName',
            required: true,
            placeholder: 'Sam',
            type: 'text',
        },
        {
            label:'Phone',
            name: 'phone',
            placeholder: '0987654',
            type: 'number',
        },
        {
            label:'Address',
            name: 'address',
            placeholder: 'Sydney',
            type: 'text',
        },
        {
            label:'Email',
            name: 'email',
            required: true,
            placeholder: 'Sam@email',
            type: 'email',
        },
        {
            label:'Password',
            name: 'password',
            required: true,
            placeholder: '***********',
            type: 'password',
            minLength: '6'
        },
        {
            label:'Confirm Password',
            name: 'confirmPassword',
            required: true,
            placeholder: '***********',
            type: 'password',
            minLength: '6'
        },
    ]
  return (
    <div>
        <Header />
        <section className='main' >
            <Form className='m-5 p-5 border shadow-lg' onSubmit={handleOnSubmit}>
                <h1 className='text-center'> <BiSolidUserDetail className='f-4'/>Create New Account {user?.role === "admin" && "For Admin"} </h1>
                <hr />
                {
                    user?.role === "admin" && (
                    <Form.Group className="mb-3">
                        <Form.Label>Select user type</Form.Label>
                        <Form.Select onChange={handleOnChange} required name="role">
                            <option value="">---select---</option>
                            <option value="admin">Admin</option>
                            <option value="student">Student</option>
                        </Form.Select>
                    </Form.Group>
                )}
                {
                    inputs.map((item, i) =>(
                        <CustomInput key={i} {...item} onChange={handleOnChange}/>
                    ))
                }
                <div className="d-grid">
                <Button variant='primary' type='submit'>Create New Account</Button>
                </div>
            </Form>
        </section>
        <Footer />
    </div>
  );
};

export default Signup;
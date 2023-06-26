import React, { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { BiSolidUserDetail } from "react-icons/bi";
import { toast } from "react-toastify";
import { postUser } from "../../helper/axios";

const Signup = () => {
    const [form, setForm] = useState({});

    const handleOnChange = (e) =>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault();

        const {confirmPasseord, ...rest} = form;

        if(confirmPasseord !== form.password){

            return TransformStream.error("Password do not match");

        }

        //call api and send rest obj
        const dataPromise = postUser(rest);
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
            <Form className='m-5 p-5 border shadow-lg'>
                <h1 className='text-center'> <BiSolidUserDetail className='f-4'/> Add New Admin</h1>
                <hr />
                {
                    inputs.map((item, i) =>(
                        <CustomInput key={i} {...item}/>
                    ))
                }
                <Form.Group className='d-grid'>
                    <Button variant='primary' type='submit'>Add New Admin</Button>
                </Form.Group>
            </Form>
        </section>
        <Footer />
    </div>
  );
};

export default Signup;
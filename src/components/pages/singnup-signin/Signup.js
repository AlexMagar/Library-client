import React, { useState } from 'react'
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { CustomInput } from '../../custom-input/CustomInput';
import { Form } from 'react-bootstrap';

export const Signup = () => {

    const [form, setForm] = useState({})

    const handleOnChange = e =>{
        const {name, value} = e.target;
    }

    const inputs = [
        {
            label: "First Name",
            name: 'fName',
            required: true,
            Placeholder: "Sam",
            type: "text"

        }
    ]
  return (
    <div>
        <Header />
        <section className='main'>
            <Form className='m-5 p-5 border shadow-lg'>
                <h1>Add new Admin</h1>
                {
                    inputs.map((item, i) =>{
                        <CustomInput key={i} {...item} />
                    })
                }
                <div className=''></div>
            </Form>
        </section>
        <Footer />
    </div>
  )
}

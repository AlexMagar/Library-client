import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BiSolidUserDetail } from "react-icons/bi";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { signInAdminAction } from "./userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Singnin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo); //get the user info


  const [form, setForm] = useState({}); //data type is an onject

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const loginInput =[
    {
      label: 'Email',
      name: 'email',
      required: true,
      placeholder: 'ram@email.com',
      type: 'email',
    },
    {
      label: 'Password',
      name: 'password',
      required: true,
      placeholder: '******',
      type: 'password',
      minLength: '6'
    },
  ]


  const handleOnChange = (e) => {
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]: value,
    })
  }
  console.log("Data from Signin form", form);

  const handleOnSubmit = (e) => {
    e.preventDefault(); //prevent referece the browser

    dispatch(signInAdminAction(form));

    console.log(form)
  }

  return (
    <div>
      <Header />
      <section className='main' >
        <Form className='m-5 p-5 border shadow-lg' onSubmit={handleOnSubmit}>
            <h1 className='text-center'> <BiSolidUserDetail className='f-4'/> Login to the System</h1>
            <hr />
            {
              loginInput.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange}/>
              ))
            }
            <div className="d-grid">
            <Button variant='primary' type='submit' >Login</Button>
            </div>
        </Form>
      </section>
      <Footer />
    </div>
  )
}

export default Singnin
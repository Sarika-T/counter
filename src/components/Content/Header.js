import { Button } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider as Form, useForm } from "react-hook-form";
import {  useAuth } from '../../utils/AuthConfig/AuthProvider';
import { ProfileIcon } from '../../assets/icon';


const FormProvider = ({ children, onSubmit, methods, style , ...rest }) => (
    <Form {...methods}>
         <form data-testid="form" onSubmit={onSubmit} {...rest} style={style}>{children}</form>
    </Form>
);

export default function Header() {
    const methods = useForm();
    const {logout} = useAuth();
    const navigate = useNavigate();
    const {
    register,
    handleSubmit,
    formState: { errors },setError
    } = methods;
    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        logout();
        navigate("/signup");
    })


    return (
        <div className='header'>
            <div className='header-page'>
            <FormProvider methods={methods} onSubmit={(onSubmit)} style={{width:'100%'}}>
                <div className='header-container-main'>
                <span className='header-page-text'>Dashboard</span>
                <div className='header-page-icon'><ProfileIcon /></div>
                    <div className='header-container-main-button'>
                        <Button
                            variant="contained"
                            type='submit'
                            size="large"
                            color="secondary"
                            className="logoutBtn"
                            disabled={false}>
                            Logout
                        </Button>
                    </div>
                </div>
            </FormProvider>
            </div>
        </div>
      )

}
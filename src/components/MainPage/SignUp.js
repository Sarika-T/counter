
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import './MainPage.scss';
import { FormProvider as Form, useForm } from "react-hook-form";
import { useAuth } from '../../utils/AuthConfig/AuthProvider';
import { validateFields } from '../../utils/HelperFunction/Validation';

const FormProvider = ({ children, onSubmit, methods , ...rest }) => (
    <Form {...methods}>
         <form data-testid="form" onSubmit={onSubmit} {...rest}>{children}</form>
    </Form>
);

const resolver = async (values) => {
  const fields =['email','password'];
  const resposeError = validateFields(fields, values)
  return {
      values: values.email ? values : {},
      errors: resposeError,
  };
};

export default function  SignUp ()  {
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const methods = useForm({ resolver });

    const {
        register,
        handleSubmit,
        formState: { errors },setError
        } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      setError('');
      setLoading(true);
      await signup(data.email, data.password);
      navigate('/dashboard');
    } catch(error) {
      console.log(error,"error")
        setError('general', { type: 'manual', message: 'Invalid Credential' });
    }
    setLoading(false);
  });

  return (
    <div className='singup-page'>
      <div className='singup-page-content'>
      <div className='singup-page-content-left'>
        <img clasName="singup-page-content-left-image" src="https://cdn.123formbuilder.com/modules/login-signup/images/123formbuilder-account-1x.png" alt="Background image"/>
      </div>
      <div className="singup-page-content-right">
        <div className="singup-page-content-right-heading">Create an Account</div>
        {errors.general && <p className='errorMes'>{errors.general.message}</p>}
        <FormProvider methods={methods} onSubmit={(onSubmit)} style={{width:'300px'}}>
          <div className="inputContainer">
              <TextField
                  fullWidth
                  id="username"
                  type="email"
                  label="Email"
                  placeholder="Enter Email id"
                  margin="normal"
                  {...register("email")}
                  className={`${errors.email && "input-error"}`}
              />
              {errors.email && <p className="errorMes">{errors.email?.message}</p>}
          </div>
          <div className='inputContainer'>
              <TextField
                  fullWidth
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Enter Password"
                  margin="normal"
                  {...register("password")}
                  className={`${errors.email && "input-error"}`}
              />
              {errors.password && <p className="errorMes">{errors.password?.message}</p>}
          </div>
              <Button
                  variant="contained"
                  type='submit'
                  size="large"
                  color="secondary"
                  className="loginBt"
                >
                  SingUp
              </Button>
        </FormProvider>
        <p className="signup-content-form-down">By signing up you agree to our Terms of Service and Privacy Policy.</p>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};
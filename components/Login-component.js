import React, { useState } from 'react'
import {
  TextField,
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
})

const LoginForm = () => {
  return (
    <section class="signup_area section--padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="cardify signup_form">
              <div class="login--header">
                <h3> Create Your Account </h3>
                <p>
                  Please fill the following fields with appropriate information
                  to register a new DigiPro account.
                </p>
              </div>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  userName: '',
                  password: '',
                  passwordConfirmation: '',
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={(values) => {
                  alert(values)
                  // same shape as initial values
                  console.log(values)
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div class="login--form">
                      <label for="name">Your Name</label>
                      <Field
                        id="name"
                        type="text"
                        name="name"
                        class="text_field"
                        placeholder="Enter your Name"
                      />

                      {touched.name && errors.name && <div>{errors.name}</div>}

                      <label for="email">Email Address</label>
                      <input
                        id="email"
                        type="text"
                        name="email"
                        class="text_field"
                        placeholder="Enter your email address"
                      />
                      {touched.email && errors.email && (
                        <div>{errors.email}</div>
                      )}

                      <label for="user_name">Username</label>
                      <input
                        id="userName"
                        type="text"
                        name="userName"
                        class="text_field"
                        placeholder="Enter your username..."
                      />
                      {touched.userName && errors.userName && (
                        <div>{errors.userName}</div>
                      )}

                      <label for="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        class="text_field"
                        placeholder="Enter your password..."
                      />
                      {touched.password && errors.password && (
                        <div>{errors.password}</div>
                      )}

                      <label for="con_pass">Confirm Password</label>
                      <input
                        id="passwordConfirmation"
                        type="password"
                        name="passwordConfirmation"
                        class="text_field"
                        placeholder="Confirm password"
                      />
                      {touched.passwordConfirmation &&
                        errors.passwordConfirmation && (
                          <div>{errors.passwordConfirmation}</div>
                        )}

                      <button
                        class="btn btn--md register_btn btn-primary"
                        type="submit"
                      >
                        Register Now
                      </button>

                      <div class="login_assist">
                        <p>
                          Already have an account?
                          <a href="login.html">Login</a>
                        </p>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm

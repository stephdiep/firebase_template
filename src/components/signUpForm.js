import React from 'react'
import styled from 'styled-components'

import getFirebase from '../utils/firebase'
import useFormInput from '../utils/useFormInput'
import FormButton from './button'


const SignUpForm = () => {
  const firebase = getFirebase()
  const email = useFormInput("")
  const password = useFormInput("")

  const signUpUser = (event) => {
    event.preventDefault()

    if (firebase) {
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then((user) => {
        console.log('user', user)
        window.location.replace('/')
        alert('Welcome!')
      }).catch((error) => {
        console.log('error', error)
        alert(error.message)
      })
    }
  }

  return (
    <Form onSubmit={signUpUser} >
      <Label htmlFor="email">Email
        <Input autocomplete="off" htmlFor="email" {...email}/>
      </Label>
      <Label htmlFor="password">Password
        <Input autocomplete="off" type="password" htmlFor="password" {...password}/>
      </Label>
      <FormButton text="Sign Up"/>
    </Form>
  )
}

export default SignUpForm


const Form = styled.form`
  display: grid;
  gap: 20px;
  max-width: 300px;
`

const Label = styled.label`
  display: grid;
  gap: 10px;
  font-family: 'Raleway', sans-serif;
`

const Input = styled.input`
  border: 1px solid #BE879C;
  background: white;
  padding: 10px;
  border-radius: 30px;
`
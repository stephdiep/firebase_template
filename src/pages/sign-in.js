import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import Layout from "../components/layout"
import SignInForm from '../components/signInForm'

const signUpPage = () => {

  return (
    <Layout>
      <Wrapper>
        <h1>Sign in</h1>
        <SignInForm />
        <Button onClick={() => { navigate('/')}}>Go back to homepage</Button>
        <Button onClick={() => { navigate('/sign-up')}}>Sign up here</Button>
      </Wrapper>
    </Layout>
  )
}

export default signUpPage

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
`

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  border-radius: 30px;
  background: #87A7BE;
  color: white;
  font-weight: bold;
  cursor: pointer;

  :hover {
    transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`
import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import Layout from "../components/layout"
import SignUpForm from '../components/signUpForm'

const signUpPage = () => {

  return (
    <Layout>
      <Wrapper>
        <h1>Sign up</h1>
        <SignUpForm />
        <Button onClick={() => { navigate('/')}}>Go back to homepage</Button>
        <Button onClick={() => { navigate('/sign-in')}}>Sign in here</Button>
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
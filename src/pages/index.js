import React from "react"
import { navigate } from 'gatsby'
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
  <Layout>
    <SEO title="Home" />
    <TextWrapper>
      <h1>Hi peeps</h1>
      <p>Welcome to your new Gatsby site. Now go build something great.</p>
    </TextWrapper>

    <ButtonsWrapper>
      <Button onClick={() => { navigate('/sign-up')}}>Sign Up here</Button>
      <Button onClick={() => { navigate('/sign-in')}}>Sign In here</Button>
    </ButtonsWrapper>

    <ImageWrapper>
      <Image />
    </ImageWrapper>
  </Layout>
  )

}
export default IndexPage

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 0 0 20px;
`

const ImageWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 30px;
`

const ButtonsWrapper = styled.div`
  display: grid;
  gap: 10px;
  max-width: 300px;
  margin: 50px 0;
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
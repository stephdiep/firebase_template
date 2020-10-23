import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TextWrapper>
      <h1>Hi peeps</h1>
      <p>Welcome to your new Gatsby site. Now go build something great.</p>
    </TextWrapper>
    
    <ImageWrapper>
      <Image />
    </ImageWrapper>
  </Layout>
)

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
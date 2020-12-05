import React from 'react'
import styled from 'styled-components'

const FormButton = (props) => {
  const { text } = props
  return (
    <Button>{text}</Button>
  )
}

export default FormButton

const Button = styled.button`
  border: none;
  padding: 15px 0;
  border-radius: 30px;
  background: #BE879C;
  color: white;
  font-weight: bold;
  cursor: pointer;

  :hover {
    transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`
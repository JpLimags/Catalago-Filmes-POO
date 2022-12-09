import styled from "styled-components"

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
`
export const Left = styled.div`
  width: 48vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 2rem;
`

export const Right = styled.div``

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 55vh;
  box-shadow: 0 1px 2px #0003;
  background-color: #28282C;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`


export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: 480px;
  padding-left: 100px;
  background-color: red;

  
}
`

export const Content = styled.div`
  gap: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 48vw;
  box-shadow: 0 1px 2px #0003;
  background-color: #28282C;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`

export const Label = styled.label`
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin-top: 2rem;
`

export const Text = styled.text`
  font-size: 18px;
  font-weight: 600;
  color: white;
  font-size: 80px;
`

export const LabelSignin = styled.label`
  font-size: 16px;
  color: white;
`

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #925FF0;
  }
`
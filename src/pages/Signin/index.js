import React, { useState } from "react"
import Input from "../../components/input"
import Button from "../../components/button"
import * as C from "./styles"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import logo from "./assets/Logo.png"

const Signin = () => {
  const { signin } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos")
      return
    }

    const res = signin(email, senha)

    if (res) {
      setError(res)
      return
    }

    navigate("/home")
  }

  return (
    <C.Container>
      <C.Left>
        <h1 style={{color: "white", fontSize: '50px'}}>Faça seu login na plataforma</h1>
        <img src={logo} alt="Logo do site"></img>
      </C.Left>
      <C.Content>
        <C.Label>Faça login</C.Label>
        <C.Form>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <Button Text="Entrar" onClick={handleLogin} />
          <C.LabelSignin>
            Não tem uma conta?
            <C.Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </C.Strong>
          </C.LabelSignin>
        </C.Form>
        
      </C.Content>
    </C.Container>
  )
}

export default Signin
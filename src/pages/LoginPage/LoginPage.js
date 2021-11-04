import React from "react"
import useForm from "../../hooks/useForm"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import logo3x from '../../assents/logo3x.png'
import styled from "styled-components"
import { LoginContainer, LogoImage, TextoLogin, InputLoginContainer,LoginFormContainer, SignUpButtonContainer } from "./styled"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { Typography } from "@material-ui/core"

export const goToCadastro = (history) => {
    history.push("/cadastro")
}

export const goToHomeScreenPage = (history) => {
    history.push("/")
}


const LoginPage = () => {

const history = useHistory()

const [form, onChange, clear] = useForm({email:"", password:""})
    
const onSubmitForm = (event) => {
event.preventDefault()
login(form, clear)
  } 

  const login = (form, clear, history) => {
      axios.post (`${BASE_URL}/login`, form)
      .then((res) => {
          localStorage.setItem("token", res.data.token)
          clear()
          goToHomeScreenPage(history)
      })
      .catch((err) => alert ("Erro no Login"))
  }

    return(
        <LoginContainer>
            <LogoImage src= {logo3x} />
            <Typography>
            <TextoLogin color={'black'}>
               <strong> Entrar </strong>
            </TextoLogin> 
            </Typography>
            
            <LoginFormContainer>
            <form onSubmit ={onSubmitForm}>
                <InputLoginContainer>
           <TextField 
           name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          border-radius={"20px"}
          fullWidth margin={"normal"}
          required
          type={"email"}
          />

            <TextField 
           name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth margin={"normal"}
          required
          type={"password"}/>
  
    </InputLoginContainer>
          <Button
          type={"submit"}
          fullWidth
          variant={'contained'}
          color={"primary"}
         >


            <strong>Entrar</strong></Button>

         </form>
        
         </LoginFormContainer>

         <SignUpButtonContainer>

           <Button
           onClick={() => goToCadastro(history)}
           type={"submit"}
           fullWidth
           variant={'contained'}
           > <strong>Não possui cadastro? Clique aqui. </strong></Button>
        </SignUpButtonContainer>
        </LoginContainer>
      
    )
}

export default LoginPage 
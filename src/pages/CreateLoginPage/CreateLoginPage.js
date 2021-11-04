import React from "react"
import useForm from "../../hooks/useForm"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import logo3x from '../../assents/logo3x.png'
import styled from "styled-components"
import { CadastroContainer, LogoImage, TextCadastro, InputCadastroContainer,CadastroFormContainer } from "./styled"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { Typography } from "@material-ui/core"


export const goToAddAdressPage = (history) => {
    history.push("/endereço")
}

export const goToHomeScreenPage = (history) => {
    history.push("/")
}


const CreateLoginPage = () => {

    const history = useHistory()
    const [form, onChange, clear] = useForm({email:"", cpf: "", password:""})
        
    const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, history)} 
    
    const signUp = (form, clear, history) => {
          axios.post (`${BASE_URL}/signUp`, form)
          .then((res) => {
              localStorage.setItem("token", res.data.token)
              clear()
              goToAddAdressPage(history)
          })
          .catch((err) => alert ("Erro no Cadastro"))
      }

    return(

        <CadastroContainer>
            <LogoImage src={logo3x} />
            <Typography>
            <TextCadastro color={'black'}>
               <strong> Cadastrar </strong>
            </TextCadastro> 
            </Typography>
            
            <CadastroFormContainer>
            <form onSubmit ={onSubmitForm}>
                <InputCadastroContainer>
           <TextField 
          value={form.name}
          name={'name'}
          onChange={onChange}
          label={'Nome'}
          variant={'outlined'}
          fullWidth
          required
          autoFocus
          margin={'normal'}
        />
        <TextField
          value={form.email}
          name={'email'}
          onChange={onChange}
          label={'E-mail'}
          variant={'outlined'}
          type={'email'}
          fullWidth
          required
          margin={'normal'}
        />
         <TextField
          value={form.cpf}
          name={'cpf'}
          onChange={onChange}
          label={'CPF'}
          variant={'outlined'}
          type={'cpf'}
          fullWidth
          required
          margin={'normal'}
        />
        <TextField
          value={form.password}
          name={'password'}
          onChange={onChange}
          label={'Senha'}
          variant={'outlined'}
          type={'password'}
          fullWidth
          required
          margin={'normal'}
        />
         <TextField
          value={form.password}
          name={'password'}
          onChange={onChange}
          label={'Confirmar senha'}
          variant={'outlined'}
          type={'password'}
          fullWidth
          required
          margin={'normal'}
        />
  
    </InputCadastroContainer>
          <Button onClick={() => goToAddAdressPage(history)}
          type={"submit"}
          fullWidth
          variant={'contained'}
          color={"primary"}
         >

            <strong>Criar</strong></Button>
         </form>
        
         </CadastroFormContainer>


        </CadastroContainer>
      
    )
}

export default CreateLoginPage
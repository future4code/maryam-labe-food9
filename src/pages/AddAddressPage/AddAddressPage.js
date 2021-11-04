import React from "react"
import useForm from "../../hooks/useForm"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import styled from "styled-components"
import { AddAdressContainer, TextAddAdress, InputAddAdressContainer,AddAdressFormContainer } from "./styled"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { Typography } from "@material-ui/core"


export const goToHomeScreenPage = (history) => {
    history.push("/")
}

const AddAddressPage = () => {

    const history = useHistory()
    const [form, onChange, clear] = useForm({neighbourhood:"", number:"", city: "", 
    apartment: "", state:"", street:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        AddAdress(form, clear)} 

    const AddAdress = (form, clear) => {
          axios.post(`${BASE_URL}/address`, form, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          })
            .then((res) => {
              alert(res.data.message)
              clear()
              goToHomeScreenPage(history)
            })
            .catch((err) => {
              alert(err.response.message)
            })
        }

    return(

        <AddAdressContainer>
            <Typography>
            <TextAddAdress color={'black'}>
               <strong> Meu endereço </strong>
            </TextAddAdress> 
            </Typography>
            
            <AddAdressFormContainer>
            <form onSubmit ={onSubmitForm}>
                <InputAddAdressContainer>
           <TextField 
          value={form.street}
          name={'street'}
          onChange={onChange}
          label={'Logradouro'}
          variant={'outlined'}
          fullWidth
          required
          autoFocus
          margin={'normal'}
        />
        <TextField
          value={form.number}
          name={'number'}
          onChange={onChange}
          label={'Número'}
          variant={'outlined'}
          type={'number'}
          fullWidth
          required
          margin={'normal'}
        />
         <TextField
          value={form.apartment}
          name={'apartment'}
          onChange={onChange}
          label={'Complemento'}
          variant={'outlined'}
          fullWidth
          margin={'normal'}
        />
        <TextField
          value={form.neighbourhood}
          name={'neighbourhood'}
          onChange={onChange}
          label={'Bairro'}
          variant={'outlined'}
          fullWidth
          required
          margin={'normal'}
        />
         <TextField
          value={form.city}
          name={'city'}
          onChange={onChange}
          label={'Cidade'}
          variant={'outlined'}
          fullWidth
          required
          margin={'normal'}
        />
<TextField
          value={form.state}
          name={'state'}
          onChange={onChange}
          label={'Estado'}
          variant={'outlined'}
          fullWidth
          required
          margin={'normal'}
        />
  
    </InputAddAdressContainer>
          <Button onClick={() => goToHomeScreenPage(history)}
          type={"submit"}
          fullWidth
          variant={'contained'}
          color={"primary"}
         >

            <strong>Salvar</strong></Button>
         </form>
        
         </AddAdressFormContainer>
        </AddAdressContainer>
      
    )
}

export default AddAddressPage
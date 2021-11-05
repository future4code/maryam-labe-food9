import React, {useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container, FormContainer } from "./styled";
import useForm from "../../hooks/useForm";
import Header from "../../pages/Header/Header"



function EditProfile() {
  useEffect(() => {
    editProfile();
  }, []);

  const history = useHistory();
  const goToProfile = () => {
    history.push("/profile");
  };

  const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  const handleFormValues = (event) => {
    event.preventDefault();
    editProfile();
    goToProfile();
  };

  const editProfile = () => {
    const token = window.localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodC/profile",
        form,
        axiosConfig
      )
      .then((response) => {
        console.log(response.data);
        alert("Perfil editado com sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Header BackArrow="True" PageToLink="profile" title="Editar" />
      <FormContainer onSubmit={handleFormValues}>
        <TextField
          className="style-input"
          id="outlined-required"
          required
          label="Nome"
          value={form.name}
          onChange={handleInputChange}
          name="name"
          variant="outlined"
        ></TextField>
        <TextField
          className="style-input"
          id="outlined-required"
          required
          type="email"
          label="E-mail"
          value={form.email}
          name="email"
          onChange={handleInputChange}
          variant="outlined"
        ></TextField>
        <TextField
          className="style-input"
          id="outlined-required"
          required
          type="number"
          label="CPF"
          value={form.cpf}
          name="cpf"
          onChange={handleInputChange}
          variant="outlined"
        ></TextField>
        <button className="style-button">SALVAR</button>
      </FormContainer>
    </Container>
  );
}

export default EditProfile;

import React from "react"
import { useHistory } from "react-router"
import { ContainerProfilePage, RenderContainer , TitleLogout, LogoutContainer, UserContainer, UserData, AddresContainer, AddresTitle, OrderBar} from "./styled"


const ProfilePage = () => {
    const history = useHistory()

    return(
        <ContainerProfilePage>
            <RenderContainer>
                <LogoutContainer>
            <h4>Editar Perfil</h4>
            <TitleLogout>Logout</TitleLogout>
                </LogoutContainer>
                <UserContainer>
                    <UserData>
                        <h1>Nome Usuario Cadastrado</h1>
                    </UserData>
                    <UserData>
                        <h1>email</h1>
                    </UserData>
                    <UserData>
                        <h1>CPF</h1>
                    </UserData>
                    <AddresContainer>
                     <AddresTitle>Endereço do Cadastrado</AddresTitle>
                        </AddresContainer> 
                        <OrderBar>Historico de Pedidos</OrderBar>
                </UserContainer>
            </RenderContainer>
        </ContainerProfilePage>
    )
}

export default ProfilePage
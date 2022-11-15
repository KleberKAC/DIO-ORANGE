import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import {Button} from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture,

} from './styles';
import { IHeader } from "./types";

const Header = ({autenticado}: IHeader) => {

    const navigate1 = useNavigate();
    const handleCliCadastro = () => {
        navigate1('/cadastro')}
    return (
        <Wrapper>
            <Container>
            <Row>
                <img src={logo} alt="Logo da DIO"/>   
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer> 
                        <Menu>Live code</Menu>   
                        <Menu>Global</Menu>
                    </>
                ) : null}        
                </Row> 
               <Row>
                    {autenticado ? (
                         <UserPicture src="https://hermes.digitalinnovation.one/users/student/17b00034-1fe8-4ea0-a00c-6c985031b270.jpg" />
                    ): (
                        <>
                            <MenuRight href="#">Home</MenuRight>     
                            <Button title="Entrar"/>
                            <Button onClick={handleCliCadastro} title="Cadastrar"/> 
                        </>          
                    )}
                </Row> 
            </Container>

        </Wrapper>
    )
}

export { Header }


import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (<>
    <Header autenticado={true} />
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING TOP 5 DA SEMANA </TitleHighlight> 
            <UserInfo percentual={80} nome="Kleber Coelho" image="https://hermes.digitalinnovation.one/users/student/17b00034-1fe8-4ea0-a00c-6c985031b270.jpg" />
            <UserInfo percentual={60} nome="Kleber Coelho" image="https://hermes.digitalinnovation.one/users/student/17b00034-1fe8-4ea0-a00c-6c985031b270.jpg" />
            <UserInfo percentual={50} nome="Kleber Coelho" image="https://hermes.digitalinnovation.one/users/student/17b00034-1fe8-4ea0-a00c-6c985031b270.jpg" />
            <UserInfo percentual={25} nome="Kleber Coelho" image="https://hermes.digitalinnovation.one/users/student/17b00034-1fe8-4ea0-a00c-6c985031b270.jpg" />
            <UserInfo percentual={15} nome="Kleber Coelho" image="https://hermes.digitalinnovation.one/users/student/17b00034-1fe8-4ea0-a00c-6c985031b270.jpg" />
        </Column>
       
    </Container>
   
    </>
    )
}

export { Feed }
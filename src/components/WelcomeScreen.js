import logo from "../assets/logo.png"
import styled from "styled-components"

export default function WelcomeScreen({goToDeckScreen}) {
    return (
        <ScreenContainer>
            <Logo src={logo}/>
            <Titulo>ZapRecall</Titulo>
            <BotaoIniciar onClick={goToDeckScreen}>Iniciar Recall</BotaoIniciar>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Logo = styled.img`
    width: 136px;
`
const Titulo = styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin: 10px 0 30px 0;
`
const BotaoIniciar = styled.button`
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 246px;
    height: 54px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
`
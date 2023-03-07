import Flashcard from "./Flashcard"
import Footer from "./Footer"
import logo from "../assets/logo.png"
import styled from "styled-components"
import deckReact from "../constants/deckReact"
import { useState } from "react"
import StatusIcon from "./StatusIcon"
import sad from "../assets/sad.png"
import happy from "../assets/party.png"

export default function DeckScreen() {
    const [counter, setCounter] = useState(0)
    const [answers, setAnswers] = useState([])

    function increaseCounter() {
        setCounter(counter + 1)
    }

    function addAnswer(status) {
        setAnswers([...answers, status])
    }

    return (
        <ScreenContaier>

            <LogoContainer>
                <img src={logo} alt="Logo do ZapRecall - raio amarelo" />
                <h1>ZapRecall</h1>
            </LogoContainer>

            {deckReact.map((card, i) => (
                <Flashcard
                    key={card.question}
                    index={i}
                    card={card}
                    increaseCounter={increaseCounter}
                    addAnswer={addAnswer}
                />
            ))}

            <Footer totalQuestions={deckReact.length} questionsCounter={counter}>
                {counter === deckReact.length && (
                    answers.includes("wrong") ? (
                        <Finalizacao>
                            <img src={sad} alt="Emoji triste" />
                            <span>Putz...</span>
                            <p>Ainda faltam algumas... Mas não desanime!</p>
                        </Finalizacao>

                    ) : (
                        <Finalizacao>
                            <img src={happy} alt="Emoji feliz" />
                            <span>Parabéns!</span>
                            <p>Você não esqueceu nenhum flashcard!</p>
                        </Finalizacao>
                    )
                )}

                {counter}/{deckReact.length} CONCLUÍDOS

                <StatusPerguntas>
                    {answers.map(a => <StatusIcon status={a} />)}
                </StatusPerguntas>

            </Footer>

        </ScreenContaier>
    )
}

const ScreenContaier = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }
`
const StatusPerguntas = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 5px;
`
const Finalizacao = styled.div`
    text-align: center;
    margin-bottom: 20px;
    span {
        margin-left: 10px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    p {
        margin-top: 20px;
    }
`
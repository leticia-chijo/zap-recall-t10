import { useState } from "react"
import styled from "styled-components"
import turnArrow from "../assets/seta_virar.png"
import StatusIcon from "./StatusIcon"
import { VERDE, VERMELHO, AMARELO, CINZA } from "../constants/colors"

export default function Flashcard({ index, card, increaseCounter, addAnswer }) {
    const [started, setStarted] = useState(false)
    const [turned, setTurned] = useState(false)
    const [finished, setFinished] = useState(false)
    const [status, setStatus] = useState("not answered") // correct, almost, wrong

    function showQuestion() {
        if (!finished) {
            setStarted(true)
        }
    }

    function showAnswer() {
        setTurned(true)
    }

    function answerQuestion(questionStatus) {
        setStarted(false)
        setFinished(true)
        setStatus(questionStatus)
        increaseCounter()
        addAnswer(questionStatus)
    }

    return (
        <>
            {!started ? (
                <PerguntaFechada status={status}>
                    <p>Pergunta {index + 1}</p>
                    <StatusIcon status={status} showQuestion={showQuestion} />
                </PerguntaFechada>
            ) : (
                <PerguntaAberta>
                    {!turned ? (
                        <>
                            {card.question}
                            <img onClick={showAnswer} src={turnArrow} alt="Seta de virar o card" />
                        </>
                    ) : (
                        <>
                            {card.answer}
                            <ContainerBotoes>
                                <BotaoResposta background={VERMELHO} onClick={() => answerQuestion("wrong")}>Não Lembrei</BotaoResposta>
                                <BotaoResposta background={AMARELO} onClick={() => answerQuestion("almost")}>Quase não Lembrei</BotaoResposta>
                                <BotaoResposta background={VERDE} onClick={() => answerQuestion("correct")}>Zap!</BotaoResposta>
                            </ContainerBotoes>
                        </>
                    )}
                </PerguntaAberta>
            )}
        </>



    )
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: ${props => props.status === "not answered" ? "none" : "line-through"};
    color: ${props => {
        switch(props.status){
            case "correct":
                return VERDE
            case "wrong":
                return VERMELHO
            case "almost":
                return AMARELO
            default:
                return CINZA
        }
    }}
  }
`
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`
const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
const BotaoResposta = styled.button`
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: ${props => props.background};
        border-radius: 5px;
        border: 1px solid ${props => props.background};
        padding:5px;
`

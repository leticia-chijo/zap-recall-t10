import play from "../assets/seta_play.png"
import correctIcon from "../assets/icone_certo.png"
import almostIcon from "../assets/icone_quase.png"
import wrongIcon from "../assets/icone_erro.png"

export default function StatusIcon({ status, showQuestion }) {
    return (
        <>
            {status === "correct" && <img src={correctIcon} alt="Ícone de certo" />}
            {status === "almost" && <img src={almostIcon} alt="Ícone de quase" />}
            {status === "wrong" && <img src={wrongIcon} alt="Ícone de errado" />}
            {status === "not answered" && <img onClick={showQuestion} src={play} alt="Ícone de play" />}
        </>
    )
}
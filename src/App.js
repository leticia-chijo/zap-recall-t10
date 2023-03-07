import { useState } from "react"
import DeckScreen from "./components/DeckScreen"
import WelcomeScreen from "./components/WelcomeScreen"


export default function App() {
  const [welcome, setWelcome] = useState(true)

  function goToDeckScreen() {
    setWelcome(false)
  }

  return (
    <>
      {welcome ? <WelcomeScreen goToDeckScreen={goToDeckScreen}/> : <DeckScreen />}
    </>
  )
}
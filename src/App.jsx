import { useState } from 'react'
import './App.css'
/* 필요한게 무엇인가???
  1. 박스 2개 (타이틀, 사진, 결과)
  2. 가위, 바위, 보 버튼
  3. 버튼을 클릭하면 클릭한 값이 박스에 보임
  4. 컴퓨터는 랜덤하게 아이템 선택이 된다
  5. 3 4 의 결과를 가지고 누가이겼는지 승패를 따진다
  6. 승패 결과에 따라 테두리 색이 바뀐다
  (이기면-초록, 지면-빨강, 비기면-검정)
*/
import Box from './components/Box'
const choice = {
  rock: {
    name: "Rock",
    img: "PIC/바위.png"
  },
  scissors: {
    name: "Scissors",
    img: "PIC/가위.png"
  },
  paper: {
    name: "Paper",
    img: "PIC/보.png"
  }
}


function App() {
  const [useSelect, setUseSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState('')
  const play = (userChoice) => {
    setUseSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(choice[computerChoice])
    setResult(judgement(choice[userChoice], choice[computerChoice]))
  }

  const judgement = (user, computer) => {
    if(user.name === computer.name) {
      return 'tie'
    }
    else if(user.name === 'Rock') 
      return computer.name === 'Scissors' ? 'win' : 'lose'
    else if(user.name === 'Scissors') 
      return computer.name === 'Paper' ? 'win' : 'lose'
    else if(user.name === 'Paper') 
      return computer.name === 'Rock' ? 'win' : 'lose'
  }

  const randomChoice = () => {
    // 객체에서 키만 뽑아서 배열로 만들자
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    //키의 배열[랜덤숫자] => 랜덤한 키
    return itemArray[randomItem]
  }
  return (
    <div>
      <div className='main'>
        <Box title="you" item={useSelect} result={result}/>
        <Box title="computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  )
}

export default App

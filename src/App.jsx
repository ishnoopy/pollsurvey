import { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal';
import cat from './assets/cat.svg'
import dog from './assets/dog.svg'

import { ModalComponent } from './ModalComponent';

Modal.setAppElement('#root')

function App() {
  const questions = [
    {question:" Which pet is lazy af 😕😬?"},
    {question:" Which pet scratches the most 😐?"},
    {question:" Which pet clings too much 🙄?"},
  ]

  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState({
    cat: 0,
    dog: 0
  })

  const [selectedOption, setSelectedOption] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function nextQuestion(){
    if(questionIndex+2 <= questions.length){
      setQuestionIndex((prevIndex)=> prevIndex+1)
    }else{
      setIsModalOpen(true)
    }
    setSelectedOption(null)
  }
  const question = questions[questionIndex]

  function castVote(){
    if(selectedOption){
      setScore((prevScore)=>({
        ...prevScore,
        [selectedOption]: prevScore[selectedOption]+1
      }))
    }

    nextQuestion()
  }

  function voteAgain(){
    setQuestionIndex(0)
    setScore({
      cat: 0,
      dog: 0
    })
    setIsModalOpen(false)
  }

  // useEffect(()=>{
  //   console.log(score)
  // }, [score])

  return (
    <div className="container">
        <h1 className='pageTitle'>Cast your Vote 🐱🐶</h1>
        
        <div className="survey">
          <h2>Question❗</h2>
          <div className='question'>
          <p>{question?.question}</p>
          </div>
          <div className="choices">
              <img src={cat} alt="cat" onClick={()=>setSelectedOption('cat')}
              className={selectedOption === 'cat'? 'selected': ''}
              />
              <img src={dog} alt="dog" onClick={()=>setSelectedOption('dog')}
              className={selectedOption === 'dog'? 'selected': ''}
              />
          </div>

          <button onClick={castVote} disabled={!selectedOption}>{questionIndex+2 <= questions.length? 'Next': 'Submit'}</button>
        </div>
        
       <ModalComponent isOpen={isModalOpen} onCloseModal={voteAgain} score={score}/>
    </div>
  )
}

export default App

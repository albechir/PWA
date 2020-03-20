import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import quizz from '../assets/q.json'
import uuid from 'uuid/v4'

export default function Questions(props) {
  const [quiz, setQuiz] = useState({
  })

  const { themeid, questionid } = useParams()

  useEffect(() => {
    if (!quizz[themeid]) {
      props.history.push('/summary')
      //ERROR
    }
    setQuiz(quizz[themeid][questionid])
  }, [questionid])

  console.log(quiz)
  // console.log("quiz.answers", quiz.answers[0])
  console.log(props)

  function answerValidator() {}

  return (
    <Wrap>
      <div>
        <AskWrap>
          <Number>{questionid}</Number>
          <Ask>{quiz.question}</Ask>
        </AskWrap>
        <QButWrap>
          { quiz?.answers?.map((answers => (
            <QBut key={uuid()}>{answers.answer}</QBut>
          )))}
        </QButWrap>
        <NextDisplayer>
          <Next onClick={() => props.history.push('/question/theme1/1')}>
            Suivant
          </Next>
        </NextDisplayer>
      </div>
    </Wrap>
  )
}

const Number = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  text-align: center;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QButWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QBut = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: #ffffff;
  outline: none;
  border: none;
  font-weight: 700;
  background-color: #1e97ef;
  width: 17rem;
  height: 4rem;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  margin: 12px 24px;
  border-radius: 8px;
`

const Ask = styled.span`
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
`

const AskWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`

const Next = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: #ffffff;
  outline: none;
  border: none;
  font-weight: 700;
  background-color: #1e97ef;
  width: 17rem;
  height: 4rem;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  margin: 12px 24px;
  border-radius: 8px;
`

const NextDisplayer = styled.div`
  display: none;
`

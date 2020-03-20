import React from 'react'
import styled from 'styled-components'
import Gif from '../components/GifPlayer'

export default function Landing() {
  return (
    <>
      <Wrap>
        <Title>COVID-19</Title>
        <Gif />
        <ButtonWrap>
          <a href='/before'>
            <Enter>Tentez votre chance au quizz</Enter>
          </a>
          <a href='/help'>
            <Info>Besoin d'informations</Info>
          </a>
        </ButtonWrap>
      </Wrap>
    </>
  )
}

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  //margin-top: -175px;
`

const Global = styled.div``

const Enter = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: #ffffff;
  outline: none;
  border: none;
  font-weight: 700;
  background-color: #a0bf2c;
  width: 17rem;
  height: 4rem;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  margin: 16px 24px;
  border-radius: 8px;
`

const Info = styled.button`
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
  margin: 0 24px;
  border-radius: 8px;
`

const Wrap = styled.div`
  background-color: #301f43;
  width: 100%;
  min-width: 420px;
  height: 850px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
`

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

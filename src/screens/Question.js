import React from 'react'
import styled from 'styled-components'

export default function Questions() {
  return (
    <Wrap>
      <div>
        <div>
          <h1>TITRE</h1>
          <div>Question</div>
        </div>

        <div>
          <span></span>
        </div>
        <div>
          <button>Tentez votre chance au quizz</button>
          <button>Tentez votre chance au quizz</button>
          <button>Tentez votre chance au quizz</button>
          <button>Tentez votre chance au quizz</button>
        </div>
      </div>
    </Wrap>
  )
}

const Title = styled.h1`

`

const Wrap = styled.div`

`

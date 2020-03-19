import React from 'react'
import styled from 'styled-components'

export default function Landing() {
  return (
    <>
      <div>
          <Virus src="https://www.stickpng.com/assets/images/5bd08b637aaafa0575d85039.png" alt="virus"/>
          <div>
              <button>Tentez votre chance au quizz</button>
          </div>
      </div>
    </>
  )
}

const Virus = styled.img`
  width: 60px;
  height: 60px;
`
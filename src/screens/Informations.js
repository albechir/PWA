import React from 'react'
import styled from 'styled-components'

export default function Informations() {
    return (
        <Wrap>
            <div>
                <h1></h1>
                <h2></h2>
                <p></p>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
  background-color: #111111;
  width: 100%;
  min-width: 420px;
  height: 850px;
  margin: 0;
  padding: 0;
`

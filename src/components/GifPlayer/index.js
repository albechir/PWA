import React from 'react'
import Gif from '../../assets/coronavirus.gif'
import GifPlayer from 'react-gif-player'
import './stylesheet.css'

export default function GifReader() {
  return (
    <>
      <GifPlayer gif={Gif} still={Gif} />
    </>
  )
}

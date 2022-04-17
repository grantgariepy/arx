import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroH1, HeroBtnWrapper, ArrowRight, ArrowForward} from './HeroElements'
import {Button} from '../ButtonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Decentralized Web3 Password Manager</HeroH1>
        <HeroP>Click Connect Wallet to connect your Metamask wallet.</HeroP>
        <HeroBtnWrapper>
          <Button to ='connect' onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true'
            dark='true'>
            Connect Wallet {hover ? <ArrowForward /> : <ArrowRight /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

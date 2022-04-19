import React, {useState} from 'react'
import Video from '../../videos/Pexels Videos 1085656.mp4'
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
        <HeroH1>ARX OCCULTUS</HeroH1>
        <HeroP>decentralized web3 password manager</HeroP>
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

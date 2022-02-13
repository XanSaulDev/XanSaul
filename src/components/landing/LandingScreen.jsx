import React from 'react'
import { AboutMe } from './AboutMe'
import {Banner} from './Banner'
import { Footer } from './Footer'
import { HobbiesGrid } from './HobbiesGrid'



export const LandingScreen = () => {

  return (
    <div >
      <Banner/>
      <AboutMe />
      <HobbiesGrid />
      <Footer />
    </div>
  )
}

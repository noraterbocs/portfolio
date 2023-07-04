import { FlexContainer } from 'components/FlexContainer'
import { FeaturedProjects } from 'pages/featuredprojectspage/FeaturedProjects'
import { Introduction } from 'pages/introductionpage/Introduction'
import { MyWords } from 'pages/MyWords'
import { Skills } from 'pages/Skills'
import { Tech } from 'pages/techpage/Tech'
import { TimeToTalk } from 'pages/TimeToTalk'
import React from 'react'

export const App = () => {
  return (
    <div>
      <Introduction />
      <FlexContainer>
        <Tech />
        <FeaturedProjects />
        <MyWords />
        <Skills />
      </FlexContainer>
      <TimeToTalk />
    </div>
  )
}

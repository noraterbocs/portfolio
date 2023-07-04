import { FlexContainer } from 'components/FlexContainer'
import { FeaturedProjects } from 'pages/featuredprojectspage/FeaturedProjects'
import { Introduction } from 'pages/introductionpage/Introduction'
import { MyWords } from 'pages/mywordspage/MyWords'
import { Skills } from 'pages/skillspage/Skills'
import { Tech } from 'pages/techpage/Tech'
import { TimeToTalk } from 'pages/timetotalkpage/TimeToTalk'
import React from 'react'

export const App = () => {
  return (
    <FlexContainer>
      <Introduction />
      <FlexContainer>
        <Tech />
        <FeaturedProjects />
        <MyWords />
        <Skills />
      </FlexContainer>
      <TimeToTalk />
    </FlexContainer>
  )
}

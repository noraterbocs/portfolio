import { FlexContainer } from 'components/containerComponents/FlexContainer'
import { GlobalStyle } from 'components/GlobalStyle'
import { FeaturedProjects } from 'pages/featuredprojectspage/FeaturedProjects'
import { OtherProjects } from 'pages/featuredprojectspage/OtherProjects'
import { Introduction } from 'pages/introductionpage/Introduction'
import { MyWords } from 'pages/mywordspage/MyWords'
import { Skills } from 'pages/skillspage/Skills'
import { Tech } from 'pages/techpage/Tech'
import { TimeToTalk } from 'pages/timetotalkpage/TimeToTalk'
import React from 'react'

export const App = () => {
  return (
    <FlexContainer gap="0px">
      <GlobalStyle />
      <Introduction />
      <FlexContainer gap="0px">
        <Tech />
        <FeaturedProjects />
        <OtherProjects />
        <MyWords />
        <Skills />
      </FlexContainer>
      <TimeToTalk />
    </FlexContainer>
  )
}
